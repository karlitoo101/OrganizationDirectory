/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Organization } from '../types';
import { ORGANIZATIONS } from '../orgsData';
import { Trash2, CheckSquare, Square, Mail, Send, Compass, Sparkles, Star, ClipboardList } from 'lucide-react';

interface MyTrailProps {
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onViewOrgDetails: (org: Organization) => void;
  setActiveTab: (tab: 'explore' | 'quiz' | 'counselor' | 'my-trail') => void;
}

interface ChecklistState {
  orientation: boolean;
  formSubmitted: boolean;
  interview: boolean;
  accepted: boolean;
}

export default function MyTrail({ bookmarks, onToggleBookmark, onViewOrgDetails, setActiveTab }: MyTrailProps) {
  // Store checklist states per org id in local storage
  const [tasks, setTasks] = useState<Record<string, ChecklistState>>(() => {
    const saved = localStorage.getItem('qcu_org_checklists');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        // ignore
      }
    }
    return {};
  });

  useEffect(() => {
    localStorage.setItem('qcu_org_checklists', JSON.stringify(tasks));
  }, [tasks]);

  const bookmarkedOrgs = ORGANIZATIONS.filter((o) => bookmarks.includes(o.id));

  const toggleTask = (orgId: string, taskKey: keyof ChecklistState) => {
    const defaultState = { orientation: false, formSubmitted: false, interview: false, accepted: false };
    const currentOrgState = tasks[orgId] || defaultState;
    
    setTasks({
      ...tasks,
      [orgId]: {
        ...currentOrgState,
        [taskKey]: !currentOrgState[taskKey]
      }
    });
  };

  const calculateProgress = (orgId: string) => {
    const currentState = tasks[orgId] || { orientation: false, formSubmitted: false, interview: false, accepted: false };
    const completedCount = Object.values(currentState).filter(Boolean).length;
    return Math.round((completedCount / 4) * 100);
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Overview Head */}
      <div className="mb-8 border-b border-slate-200 pb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">Your Saved Explorer Trail</h2>
          <p className="mt-1 text-xs md:text-sm text-slate-500">
            Bookmark campus organizations to design your exploration journey and track connections.
          </p>
        </div>
        {bookmarkedOrgs.length > 0 && (
          <div className="rounded-xl bg-blue-50 px-4 py-2.5 border border-blue-250 text-xs md:text-sm text-blue-900 font-bold flex items-center gap-2 uppercase tracking-wide">
            <ClipboardList className="h-4.5 w-4.5" />
            <span>Tracking {bookmarkedOrgs.length} Candidate Club{bookmarkedOrgs.length > 1 ? 's' : ''}</span>
          </div>
        )}
      </div>

      {bookmarkedOrgs.length === 0 ? (
        /* Empty State */
        <div className="rounded-3xl border-2 border-slate-200 bg-white p-12 text-center max-w-xl mx-auto">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 border border-slate-200">
            <Star className="h-7 w-7" />
          </div>

          <h3 className="mt-4 text-base md:text-lg font-bold text-slate-900 tracking-tight">No saved organizations yet</h3>
          <p className="mt-2 text-xs md:text-sm text-slate-500 leading-relaxed max-w-sm mx-auto">
            Build your candidacy list! Head over to the Explore directory or take the dynamic Org Matchmaker quiz.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
               onClick={() => setActiveTab('explore')}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs md:text-sm px-5 py-2.5 transition-colors uppercase tracking-tight cursor-pointer w-full sm:w-auto"
            >
              <Compass className="h-4 w-4" />
              <span>Explore Directory</span>
            </button>
            <button
              onClick={() => setActiveTab('quiz')}
              className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-5 py-2.5 text-xs md:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors uppercase tracking-tight cursor-pointer w-full sm:w-auto"
            >
              <Sparkles className="h-4 w-4 text-amber-500" />
              <span>Matchmaker Quiz</span>
            </button>
          </div>
        </div>
      ) : (
        /* Tracking Cards Container */
        <div className="space-y-6">
          {bookmarkedOrgs.map((org) => {
            const checklist = tasks[org.id] || { orientation: false, formSubmitted: false, interview: false, accepted: false };
            const progress = calculateProgress(org.id);

            return (
              <div
                key={org.id}
                className="rounded-2xl border border-slate-200 bg-white shadow-xs p-6 flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow"
              >
                {/* Left side: Club Branding */}
                <div className="md:w-1/3 shrink-0 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0 md:pr-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl border font-bold font-mono text-sm ${org.logoBg}`}>
                        {org.acronym}
                      </div>
                      <div className="min-w-0">
                        <span className="inline-flex items-center rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-600 uppercase">
                          {org.campus}
                        </span>
                        <h3 className="font-extrabold text-blue-900 text-sm md:text-base truncate">{org.name}</h3>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-slate-500 line-clamp-3 leading-relaxed font-medium">{org.description}</p>
                  </div>

                  {/* Actions Row */}
                  <div className="mt-6 flex items-center justify-between gap-3 text-xs">
                    <button
                      onClick={() => onViewOrgDetails(org)}
                      className="font-bold text-blue-900 hover:text-blue-800 flex items-center gap-1 cursor-pointer uppercase text-[10px] tracking-wider"
                    >
                      View Profile
                    </button>

                    <button
                      onClick={() => onToggleBookmark(org.id)}
                      className="text-rose-600 hover:text-rose-700 hover:bg-rose-50 p-1.5 rounded-lg flex items-center gap-1 transition-colors font-bold cursor-pointer uppercase text-[10px] tracking-wider"
                      title="Remove Bookmark"
                    >
                      <Trash2 className="h-4 w-4 shrink-0" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>

                {/* Right side: Progress Tracker and Checkboxes */}
                <div className="flex-1">
                  <div className="flex justify-between items-center gap-4 mb-4">
                    <h4 className="font-extrabold text-slate-400 text-xs uppercase tracking-widest">Exploration Pathways</h4>
                    <span className="text-[10px] bg-blue-50 text-blue-900 font-bold px-2.5 py-1 rounded border border-blue-200 uppercase tracking-wider">
                      {progress}% Done
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-6 border border-slate-200/50">
                    <div
                      className="h-full bg-blue-900 rounded-full transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  {/* Checkbox Rows */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      onClick={() => toggleTask(org.id, 'orientation')}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                        checklist.orientation
                          ? 'bg-blue-50/20 border-blue-300 text-blue-900'
                          : 'bg-white border-slate-200 text-slate-650 hover:border-slate-300'
                      }`}
                    >
                      {checklist.orientation ? (
                        <CheckSquare className="h-5 w-5 text-blue-900 shrink-0" />
                      ) : (
                        <Square className="h-5 w-5 text-slate-300 shrink-0" />
                      )}
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800">1. Info Orientation</p>
                        <p className="text-[10px] text-slate-450 truncate">Attend initial webinars or booths</p>
                      </div>
                    </button>

                    <button
                      onClick={() => toggleTask(org.id, 'formSubmitted')}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                        checklist.formSubmitted
                          ? 'bg-blue-50/20 border-blue-300 text-blue-900'
                          : 'bg-white border-slate-200 text-slate-650 hover:border-slate-300'
                      }`}
                    >
                      {checklist.formSubmitted ? (
                        <CheckSquare className="h-5 w-5 text-blue-900 shrink-0" />
                      ) : (
                        <Square className="h-5 w-5 text-slate-300 shrink-0" />
                      )}
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800">2. Submit Application</p>
                        <p className="text-[10px] text-slate-450 truncate">Fill out form and submit reqs</p>
                      </div>
                    </button>

                    <button
                      onClick={() => toggleTask(org.id, 'interview')}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                        checklist.interview
                          ? 'bg-blue-50/20 border-blue-300 text-blue-900'
                          : 'bg-white border-slate-200 text-slate-650 hover:border-slate-300'
                      }`}
                    >
                      {checklist.interview ? (
                        <CheckSquare className="h-5 w-5 text-blue-900 shrink-0" />
                      ) : (
                        <Square className="h-5 w-5 text-slate-300 shrink-0" />
                      )}
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800">3. Interview / Audition</p>
                        <p className="text-[10px] text-slate-450 truncate">Face-to-face or virtual panel</p>
                      </div>
                    </button>

                    <button
                      onClick={() => toggleTask(org.id, 'accepted')}
                      className={`flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all cursor-pointer ${
                        checklist.accepted
                          ? 'bg-blue-50/20 border-blue-300 text-blue-900'
                          : 'bg-white border-slate-200 text-slate-650 hover:border-slate-300'
                      }`}
                    >
                      {checklist.accepted ? (
                        <CheckSquare className="h-5 w-5 text-blue-900 shrink-0" />
                      ) : (
                        <Square className="h-5 w-5 text-slate-300 shrink-0" />
                      )}
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-800">4. Membership Offer</p>
                        <p className="text-[10px] text-slate-450 truncate">Offer list posted or fee settled</p>
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
