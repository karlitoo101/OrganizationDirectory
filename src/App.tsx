/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import OrgCard from './components/OrgCard';
import OrgDetailModal from './components/OrgDetailModal';
import MatchQuiz from './components/MatchQuiz';
import AICounselor from './components/AICounselor';
import MyTrail from './components/MyTrail';
import Developers from './components/Developers';
import Contribute from './components/Contribute';
import { Organization } from './types';
import { ORGANIZATIONS, CAMPUSES, CATEGORIES, TYPES, FIELDS } from './orgsData';
import { Search, MapPin, Sparkles, SlidersHorizontal, Compass, GraduationCap, XCircle, ChevronDown, CheckCircle, HelpCircle, RotateCcw } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'quiz' | 'counselor' | 'my-trail' | 'developers' | 'contribute'>('explore');
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null);
  
  // Bookmarks state (Org IDs) synchronized to localStorage
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const saved = localStorage.getItem('qcu_org_bookmarks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        // ignore
      }
    }
    return [];
  });

  // Filter & Sorting States
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedField, setSelectedField] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<'A-Z' | 'Z-A'>('A-Z');

  useEffect(() => {
    localStorage.setItem('qcu_org_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  useEffect(() => {
    if (activeTab === 'explore') {
      document.title = 'Byaheng Kyusiyu';
    } else if (activeTab === 'developers') {
      document.title = 'Byaheng Kyusiyu | Creator';
    } else {
      const formattedTab = activeTab
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      document.title = `Byaheng Kyusiyu | ${formattedTab}`;
    }
  }, [activeTab]);

  const handleToggleBookmark = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleResetFilters = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedType('All');
    setSelectedField('All');
    setSortOrder('A-Z');
  };

  const filteredOrgs = ORGANIZATIONS.filter((org) => {
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.acronym.toLowerCase().includes(search.toLowerCase()) ||
      org.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || org.category === selectedCategory;

    const matchesType =
      selectedType === 'All' || org.type === selectedType;

    const matchesField =
      selectedField === 'All' || org.fields.includes(selectedField as any);

    return matchesSearch && matchesCategory && matchesType && matchesField;
  }).sort((a, b) => {
    if (sortOrder === 'A-Z') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 flex flex-col font-sans">
      {/* Dynamic Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        bookmarkCount={bookmarks.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'explore' && (
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-200">
            {/* Hero Section Banner */}
            <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 text-center shadow-xs">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-10 h-32 w-32 rounded-full bg-yellow-400/10 blur-2xl pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-[10px] font-bold text-blue-900 ring-1 ring-inset ring-blue-200 justify-center inline-flex uppercase tracking-wider mb-4 font-sans">
                  <GraduationCap className="h-4 w-4 text-blue-900" />
                  <span>Byaheng Kyusiyu • Student Organizations Portal</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-905 mb-4 tracking-tight leading-none font-sans">
                  Navigate Your Org Journey with <span className="text-blue-900 underline decoration-yellow-400 decoration-3 underline-offset-4 font-black">Byaheng Kyusiyu</span>
                </h1>
                <p className="text-slate-505 max-w-2xl mx-auto text-xs sm:text-sm leading-relaxed font-sans">
                  "Byaheng Kyusiyu" represents the exciting travel, exploration, and developmental voyage of student leadership, service, and learning across three campuses: <strong>San Bartolome</strong>, <strong>San Francisco</strong>, and <strong>Batasan Hills</strong>.
                </p>
              </div>
            </div>

            {/* Filter and Search Section */}
            <div className="rounded-2xl border border-slate-200 bg-white p-3 md:p-3.5 shadow-sm max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-3 items-center">
                
                {/* Search Bar Input */}
                <div className="relative col-span-12 lg:col-span-4">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search organizations..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 focus:bg-white px-5 py-2.5 text-xs md:text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all font-sans"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-655"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Selector */}
                <div className="relative col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 pl-4.5 pr-9 py-2.5 text-xs font-semibold text-slate-705 outline-none focus:border-blue-900 cursor-pointer appearance-none transition-all font-sans"
                  >
                    <option value="All">All Categories</option>
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                </div>

                {/* Type Selector */}
                <div className="relative col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 pl-4.5 pr-9 py-2.5 text-xs font-semibold text-slate-705 outline-none focus:border-blue-900 cursor-pointer appearance-none transition-all font-sans"
                  >
                    <option value="All">All Types</option>
                    {TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                </div>

                {/* Field Selector */}
                <div className="relative col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2">
                  <select
                    value={selectedField}
                    onChange={(e) => setSelectedField(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 pl-4.5 pr-9 py-2.5 text-xs font-semibold text-slate-705 outline-none focus:border-blue-900 cursor-pointer appearance-none transition-all font-sans"
                  >
                    <option value="All">All Fields</option>
                    {FIELDS.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                </div>

                {/* Sorting Selector + Companion Reset Button */}
                <div className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 flex items-center gap-2">
                  <div className="relative flex-1">
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value as any)}
                      className="w-full rounded-xl border border-slate-200 bg-white hover:bg-slate-50 pl-4.5 pr-9 py-2.5 text-xs font-semibold text-slate-705 outline-none focus:border-blue-900 cursor-pointer appearance-none transition-all font-sans"
                    >
                      <option value="A-Z">Sort: A-Z</option>
                      <option value="Z-A">Sort: Z-A</option>
                    </select>
                    <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
                  </div>

                  {(selectedCategory !== 'All' || selectedType !== 'All' || selectedField !== 'All' || search || sortOrder !== 'A-Z') && (
                    <button
                      onClick={handleResetFilters}
                      className="rounded-xl border border-slate-200 hover:border-blue-950 hover:bg-slate-50 text-slate-500 hover:text-blue-900 px-3.5 py-2.5 transition-all cursor-pointer shrink-0 flex items-center justify-center"
                      title="Reset filters"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </button>
                  )}
                </div>

              </div>
            </div>

            {/* Organizations Grid lists */}
            {filteredOrgs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOrgs.map((org) => (
                  <OrgCard
                    key={org.id}
                    org={org}
                    isBookmarked={bookmarks.includes(org.id)}
                    onToggleBookmark={handleToggleBookmark}
                    onViewDetails={setSelectedOrg}
                  />
                ))}
              </div>
            ) : (
              /* No matching elements display */
              <div className="rounded-2xl border border-slate-150 bg-white text-center p-12 max-w-lg mx-auto">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-50 text-slate-400 mb-4">
                  <XCircle className="h-7 w-7 text-red-500" />
                </div>
                <h3 className="font-bold text-slate-900 tracking-tight text-base font-sans">No Matching Organizations Found</h3>
                <p className="text-slate-500 text-xs md:text-sm mt-1.5 leading-relaxed font-sans">
                  We could not find student organizations matching your filter criteria. Try changing options or broadening your search input!
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs md:text-sm px-5 py-2.5 cursor-pointer shadow-md uppercase tracking-tight font-sans"
                >
                  Show All Active Clubs
                </button>
              </div>
            )}
          </div>
        )}

        {/* State 2: Personality Matching MatchQuiz */}
        {activeTab === 'quiz' && (
          <MatchQuiz
            onViewOrgDetails={(org) => setSelectedOrg(org)}
            bookmarks={bookmarks}
            onToggleBookmark={(id) => handleToggleBookmark(id)}
          />
        )}

        {/* State 4: Bookmarked lists / My Saved Trail path */}
        {activeTab === 'my-trail' && (
          <MyTrail
            bookmarks={bookmarks}
            onToggleBookmark={(id) => handleToggleBookmark(id)}
            onViewOrgDetails={(org) => setSelectedOrg(org)}
            setActiveTab={setActiveTab}
          />
        )}

        {/* State 6: Developers Profile Summary info */}
        {activeTab === 'developers' && (
          <Developers />
        )}

        {/* State 7: Contribution Request Form info */}
        {activeTab === 'contribute' && (
          <Contribute />
        )}
      </main>

      {/* Detail Popups Modal overlay */}
      <OrgDetailModal
        org={selectedOrg}
        onClose={() => setSelectedOrg(null)}
        isBookmarked={selectedOrg ? bookmarks.includes(selectedOrg.id) : false}
        onToggleBookmark={(id) => handleToggleBookmark(id)}
      />

      {/* Floating AI Advisor Chat Bubble */}
      <AICounselor
        onSearchQuery={(q) => {
          setSearch(q);
          setActiveTab('explore');
        }}
      />

      {/* University Geometric Footer */}
      <footer className="bg-white border-t border-slate-200 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 mt-12 shrink-0">
        <div className="flex gap-4 text-[9px] font-bold text-slate-400 uppercase tracking-widest text-center">
          <span>Locations Served: 3 Campuses</span>
        </div>
        <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest text-center">
          © 2026 Quezon City University. Built with Pride.
        </div>
      </footer>
    </div>
  );
}
