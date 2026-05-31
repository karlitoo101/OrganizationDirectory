/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { Send, Sparkles, MessageSquare, Bot, User, RotateCcw, HelpCircle, X } from 'lucide-react';

interface AICounselorProps {
  onSearchQuery: (query: string) => void;
}

export default function AICounselor({ onSearchQuery }: AICounselorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('qcu_org_chats');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        // ignore
      }
    }
    return [
      {
        id: 'initial',
        sender: 'bot',
        text: 'Mabuhay, future QCIan voyager! I am **Byaheng Kyusiyu AI**, your digital travel guide (derived from QCU, where the students are called QCIans). Ask me anything about student organizations at Quezon City University!\n\nWhether you study at **San Bartolome**, **San Francisco**, or **Batasan Hills**, let me know your interests, tech stacks, list of hobbies, or academic majors so I can match you with the best student orgs!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  });
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMsg, setLoadingMsg] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const SUGGESTED_PROMPTS = [
    'Tech Clubs',
    'Student Press',
    'SCG Requirements',
    'Performing Arts',
    'Free Orgs'
  ];

  useEffect(() => {
    localStorage.setItem('qcu_org_chats', JSON.stringify(messages));
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen]);

  const loadingMessages = [
    'Tapping QCU student registry...',
    'Consulting OrgAdvisor guidelines...',
    'Formulating match profiles...',
    'Analyzing organizational details...',
    'Drafting highly accurate suggestions...'
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loading) {
      let idx = 0;
      setLoadingMsg(loadingMessages[0]);
      timer = setInterval(() => {
        idx = (idx + 1) % loadingMessages.length;
        setLoadingMsg(loadingMessages[idx]);
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [loading]);

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(-10) // keep token payload small & responsive
        }),
      });

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        sender: 'bot',
        text: data.text || 'Gandang araw, QCIan! I received an empty response. Let me know what specific campus or majors you want to explore!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const botMsg: ChatMessage = {
        id: Math.random().toString(36).substring(7),
        sender: 'bot',
        text: 'Paumanhin, QCIan! I encountered a connection issue fetching advice from our campus databases. Please check that your server is running or retry shortly!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const clearChats = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Reset your conversation with Byaheng Kyusiyu AI?')) {
      const initialMsg: ChatMessage = {
        id: 'initial',
        sender: 'bot',
        text: 'Mabuhay, future QCIan voyager! I am **Byaheng Kyusiyu AI**, your digital travel guide (derived from QCU, where the students are called QCIans). Ask me anything about student organizations at Quezon City University!\n\nWhether you study at **San Bartolome**, **San Francisco**, or **Batasan Hills**, let me know your interests, tech stacks, list of hobbies, or academic majors so I can match you with the best student orgs!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([initialMsg]);
    }
  };

  const formatText = (txt: string) => {
    const lines = txt.split('\n');
    return lines.map((line, idx) => {
      let parts: React.ReactNode[] = [];
      let lastIndex = 0;
      const boldRegex = /\*\*(.*?)\*\*/g;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(
          <strong key={match.index} className="font-bold text-slate-900 bg-blue-50/40 px-1 py-0.5 rounded">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }

      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
      
      if (isBullet) {
        const cleanContent = line.trim().substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-slate-700 font-medium text-xs pl-1 my-1">
            {parts.length > 0 ? parts : cleanContent}
          </li>
        );
      }

      return (
        <p key={idx} className="text-slate-700 font-medium text-xs leading-relaxed mb-2">
          {parts.length > 0 ? parts : line}
        </p>
      );
    });
  };

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all cursor-pointer ring-4 ring-white border ${
            isOpen 
              ? 'bg-rose-600 hover:bg-rose-500 border-rose-600 text-white rotate-90 scale-95' 
              : 'bg-blue-900 hover:bg-blue-800 border-blue-900 text-white hover:scale-105'
          }`}
          title={isOpen ? 'Close Chat' : 'Ask QCU Advisor'}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Bot className="h-6 w-6 animate-pulse" />
          )}
          {!isOpen && (
            <>
              <span className="absolute -top-1 -right-1 block h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white animate-ping" />
              <span className="absolute -top-1 -right-1 block h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Container Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[500px] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden animate-in fade-in-50 slide-in-from-bottom-5 duration-200">
          
          {/* Header Panel */}
          <div className="flex items-center justify-between bg-blue-900 px-4 py-3 text-white shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white border border-white/20">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-blue-900" />
              </div>
              <div>
                <h3 className="font-extrabold text-xs leading-none">Byaheng Kyusiyu AI</h3>
                <span className="text-[9px] text-blue-200 font-bold uppercase tracking-wider block mt-1">Campus Travel Bot</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={clearChats}
                className="rounded-lg p-1.5 hover:bg-white/10 text-blue-100 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                title="Reset Conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 hover:bg-white/10 text-blue-100 hover:text-white transition-all cursor-pointer flex items-center justify-center md:hidden"
                title="Minimize"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Trail View */}
          <div className="flex-1 overflow-y-auto bg-slate-50/50 p-4 space-y-3.5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                } animate-in fade-in duration-150`}
              >
                <div className={`flex h-7.5 w-7.5 shrink-0 items-center justify-center rounded-lg border text-white ${
                  msg.sender === 'user'
                    ? 'bg-blue-900 border-blue-950 shadow-xs'
                    : 'bg-white border-slate-250 text-blue-900 shadow-xs'
                }`}>
                  {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>

                <div className={`rounded-xl px-3 py-2.5 shadow-2xs border text-[11px] sm:text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-blue-900 border-blue-955 text-white'
                    : 'bg-white border-slate-200 text-slate-800'
                }`}>
                  {msg.sender === 'user' ? (
                    <p className="font-semibold text-white">{msg.text}</p>
                  ) : (
                    <div className="chat-markdown prose prose-sm leading-relaxed font-semibold">
                      {formatText(msg.text)}
                    </div>
                  )}
                  <span className={`text-[8px] block mt-1 tracking-wider text-right font-bold uppercase ${
                    msg.sender === 'user' ? 'text-blue-200' : 'text-slate-400'
                  }`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2.5 max-w-[85%] mr-auto animate-pulse">
                <div className="flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-blue-900 text-white shadow-xs">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-2xs">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-900 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-900 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="flex h-1.5 w-1.5 rounded-full bg-blue-900 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <p className="text-[8px] text-slate-400 font-bold uppercase tracking-wider mt-1">{loadingMsg}</p>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Bottom Controls Panel */}
          <div className="bg-white p-3 border-t border-slate-100 shrink-0">
            
            {/* Quick Starters Chips */}
            {messages.length < 3 && (
              <div className="mb-2.5">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest block mb-1.5">Suggested Starters</span>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_PROMPTS.map((prompt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(prompt)}
                      className="rounded-lg bg-slate-50 hover:bg-slate-100 text-[9px] font-bold text-slate-700 hover:text-blue-900 border border-slate-200 hover:border-blue-300 px-2.5 py-1 text-left transition-colors cursor-pointer uppercase tracking-tighter"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form Fields */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex items-center gap-1.5"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Byaheng Kyusiyu AI..."
                disabled={loading}
                className="flex-1 rounded-xl border-2 border-slate-200 px-3.5 py-2.5 text-xs focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900 text-slate-800 font-semibold"
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="rounded-xl bg-blue-900 hover:bg-blue-800 text-white p-2.5 self-stretch flex items-center justify-center transition-all disabled:bg-slate-100 disabled:text-slate-400 cursor-pointer border border-blue-900 disabled:border-slate-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

        </div>
      )}
    </>
  );
}

