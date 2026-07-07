/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { QuizQuestion, Organization } from '../types';
import { QUIZ_QUESTIONS, ORGANIZATIONS } from '../orgsData';
import { Sparkles, RefreshCw, Trophy, ArrowRight, CheckCircle2, Bookmark, Compass, Send } from 'lucide-react';

interface MatchQuizProps {
  onViewOrgDetails: (org: Organization) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

export default function MatchQuiz({ onViewOrgDetails, bookmarks, onToggleBookmark }: MatchQuizProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // question index -> option index
  const [isDone, setIsDone] = useState<boolean>(false);
  const [matches, setMatches] = useState<{ org: Organization; score: number }[]>([]);

  const handleSelectOption = (optionIdx: number) => {
    const updatedAnswers = { ...answers, [currentIdx]: optionIdx };
    setAnswers(updatedAnswers);

    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      calculateResults(updatedAnswers);
    }
  };

  const calculateResults = (finalAnswers: Record<number, number>) => {
    // Tally category weights
    const categoryScores: Record<string, number> = {};

    QUIZ_QUESTIONS.forEach((q, qIdx) => {
      const selectedOptionIdx = finalAnswers[qIdx];
      if (selectedOptionIdx !== undefined) {
        const option = q.options[selectedOptionIdx];
        
        // Accumulate standard category scores
        Object.entries(option.scores).forEach(([key, points]) => {
          categoryScores[key] = (categoryScores[key] || 0) + points;
        });
      }
    });

    // Score all organizations
    const scoredOrgs = ORGANIZATIONS.map((org) => {
      let baseScore = 20;

      // Match type
      if (categoryScores[org.type]) {
        baseScore += categoryScores[org.type] * 12;
      }

      // Match fields
      org.fields.forEach(f => {
        if (categoryScores[f]) {
          baseScore += categoryScores[f] * 10;
        }
      });

      // Clamp percentage between 10 and 100
      const scorePercentage = Math.max(10, Math.min(100, Math.round((baseScore / 75) * 100)));

      return {
        org,
        score: scorePercentage,
      };
    });

    // Sort by compatibility score
    const sorted = scoredOrgs
      .filter((item) => item.score > 20) // Only show compatible ones
      .sort((a, b) => b.score - a.score);

    setMatches(sorted);
    setIsDone(true);
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setAnswers({});
    setIsDone(false);
    setMatches([]);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentIdx];

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      {/* State A: Complete Results Screen */}
      {isDone ? (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm animate-in fade-in zoom-in-95 duration-300">
          <div className="text-center max-w-md mx-auto mb-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-200">
              <Trophy className="h-8 w-8 animate-bounce" />
            </div>
            <h2 className="mt-4 text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Your QCU Org Matches Are Ready!</h2>
            <p className="mt-2 text-xs md:text-sm text-slate-500 leading-relaxed">
              Based on your unique creative spark, preferred topics, and active campus selection, we found matching organizations waiting for you.
            </p>
          </div>

          <div className="space-y-4">
            {matches.slice(0, 4).map(({ org, score }, idx) => (
              <div
                key={org.id}
                className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50/30 hover:border-blue-200 hover:bg-blue-50/5 p-4 md:p-6 transition-all cursor-pointer"
                onClick={() => onViewOrgDetails(org)}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border font-bold font-mono text-sm ${org.logoBg}`}>
                    {org.logoImage ? (
                      <img
                        src={org.logoImage}
                        alt={`${org.name} logo`}
                        className="h-full w-full object-cover"
                        style={org.logoImageScale ? { transform: `scale(${org.logoImageScale})` } : undefined}
                      />
                    ) : (
                      org.acronym
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="inline-flex items-center rounded bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 uppercase">
                      {org.category} • {org.campus}
                    </span>
                    <h3 className="mt-1 font-bold text-slate-950 text-sm md:text-base group-hover:text-blue-900 transition-colors truncate">
                      {org.name}
                    </h3>
                    <p className="text-xs text-slate-500 truncate max-w-sm sm:max-w-md mt-0.5 font-medium">{org.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-center shrink-0">
                  {/* Matching Percentage Ring */}
                  <div className="text-right">
                    <div className="text-[10px] font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 uppercase tracking-wider">
                      {score}% Match
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(org.id);
                    }}
                    className={`rounded-full p-1.5 hover:bg-white border border-transparent hover:border-slate-200 transition-colors ${
                      bookmarks.includes(org.id) ? 'text-blue-900' : 'text-slate-400 hover:text-slate-650'
                    }`}
                  >
                    <Bookmark className="h-4.5 w-4.5" fill={bookmarks.includes(org.id) ? 'currentColor' : 'none'} />
                  </button>

                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 group-hover:text-blue-900 transition-all hidden sm:block" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={handleRestart}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-3 text-xs md:text-sm font-bold text-slate-700 hover:bg-slate-50 uppercase tracking-tight cursor-pointer w-full sm:w-auto"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Retry matchmaker</span>
            </button>

            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider text-center sm:text-right">
              Explore your pathways! You can join multiple clubs as a QCU Alumnus or current student.
            </p>
          </div>
        </div>
      ) : (
        /* State B: Interactive Quiz Flow */
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm animate-in fade-in zoom-in-95 duration-200">
          
          {/* Progress Indicators */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>Step {currentIdx + 1} of {QUIZ_QUESTIONS.length}</span>
              <span>{Math.round(((currentIdx) / QUIZ_QUESTIONS.length) * 100)}% Completed</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100 border border-slate-200/50">
              <div
                className="h-full rounded-full bg-blue-900 transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="mb-8 text-center sm:text-left">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-900 mb-3 border border-blue-100">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-base md:text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {currentQuestion.question}
            </h2>
          </div>

          {/* Grid Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                className="w-full text-left rounded-2xl border border-slate-200 hover:border-blue-900 bg-slate-50/20 hover:bg-blue-50/5 p-4 text-slate-700 hover:text-blue-900 transition-all hover:translate-x-0.5 shadow-xs flex items-center justify-between group cursor-pointer"
              >
                <span className="text-xs md:text-sm font-semibold leading-relaxed">{option.text}</span>
                <CheckCircle2 className="h-5 w-5 text-slate-200 group-hover:text-blue-900 shrink-0 transition-colors ml-4" />
              </button>
            ))}
          </div>

          {/* Quick navigational footer */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400 font-medium">
            <span>Select the response that matches your perspective</span>
            {currentIdx > 0 && (
              <button
                onClick={() => setCurrentIdx(currentIdx - 1)}
                 className="font-bold uppercase text-[10px] tracking-wider text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
              >
                ← Back
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
