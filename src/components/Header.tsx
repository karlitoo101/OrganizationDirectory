/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Compass,
  GraduationCap,
  Sparkles,
  Bookmark,
  HelpCircle,
  Activity,
  Code,
  ClipboardList,
  Menu,
  X,
} from "lucide-react";

interface HeaderProps {
  activeTab: "explore" | "quiz" | "my-trail" | "developers" | "contribute";
  setActiveTab: (
    tab: "explore" | "quiz" | "my-trail" | "developers" | "contribute",
  ) => void;
  bookmarkCount: number;
}

export default function Header({
  activeTab,
  setActiveTab,
  bookmarkCount,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      id: "explore" as const,
      label: "Explore",
      icon: Compass,
      iconColor: "text-blue-900",
    },
    {
      id: "quiz" as const,
      label: "Matchmaker",
      icon: Sparkles,
      iconColor: "text-amber-500",
    },
    {
      id: "contribute" as const,
      label: "Contribute",
      icon: ClipboardList,
      iconColor: "text-teal-500",
    },
    {
      id: "developers" as const,
      label: "Creators",
      icon: Code,
      iconColor: "text-rose-500",
    },
    {
      id: "my-trail" as const,
      label: "Saved Trail",
      icon: Bookmark,
      iconColor: "text-pink-500",
      isSaved: true,
    },
  ];

  const handleNavClick = (tabId: (typeof navItems)[number]["id"]) => {
    setActiveTab(tabId);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-45 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo Brand */}
          <div
            className="flex items-center gap-3 shrink-0 cursor-pointer select-none"
            onClick={() => handleNavClick("explore")}
          >
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-black text-lg shadow-md border border-blue-900">
              BK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-blue-900 leading-tight uppercase tracking-wider text-[11px] sm:text-xs md:text-sm">
                <span className="text-sm sm:text-base md:text-lg font-black">B</span>yaheng{' '}
                <span className="text-sm sm:text-base md:text-lg font-black">K</span>yusiyu
              </span>
              <span className="text-[8px] md:text-[9px] text-slate-400 font-bold tracking-widest uppercase">
                Find Your Community
              </span>
            </div>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[10px] xl:text-xs font-bold uppercase tracking-wider">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-1 shrink-0 rounded px-2.5 py-2 transition-all outline-none border-b-2 hover:bg-slate-50/50 ${
                    isActive
                      ? "text-blue-900 border-blue-900 font-extrabold bg-blue-50/20"
                      : "text-slate-500 border-transparent hover:text-blue-900 hover:border-slate-300"
                  }`}
                >
                  <Icon className={`h-4 w-4 shrink-0 ${item.iconColor}`} />
                  <span>{item.label}</span>
                  {item.isSaved && bookmarkCount > 0 && (
                    <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-900 text-[8px] font-black text-white ring-2 ring-white">
                      {bookmarkCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-900"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-lg animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-0.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between w-full rounded-lg px-4 py-2.5 transition-all outline-none ${
                    isActive
                      ? "text-blue-900 bg-blue-50/40 font-extrabold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-900"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`h-4 w-4 shrink-0 ${item.iconColor}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.isSaved && bookmarkCount > 0 && (
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-900 text-[9px] font-black text-white ring-2 ring-white">
                      {bookmarkCount}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
