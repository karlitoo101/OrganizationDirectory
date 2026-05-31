/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Organization } from '../types';
import { X, DollarSign, Mail, User, Send, Facebook } from 'lucide-react';

interface OrgDetailModalProps {
  org: Organization | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export default function OrgDetailModal({ org, onClose, isBookmarked, onToggleBookmark }: OrgDetailModalProps) {
  if (!org) return null;

  // Category badge colors matching OrgCard exactly
  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Departmental Organizations':
        return 'bg-emerald-50 text-emerald-800 border border-emerald-250';
      case 'University-Wide Organizations':
        return 'bg-blue-50 text-blue-900 border border-blue-250';
      case 'Community-Based (?)':
        return 'bg-purple-50 text-purple-800 border border-purple-250';
      default:
        return 'bg-slate-50 text-slate-800 border border-slate-200';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
      {/* Modal Canvas */}
      <div className="relative w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Cover Banner */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center font-black text-blue-900 border shadow-sm text-sm tracking-tight ${org.logoBg ? org.logoBg : 'bg-blue-50 border-blue-100'}`}>
              {org.acronym}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center rounded px-2.5 py-0.5 text-[10px] font-bold uppercase ${getCategoryBadgeStyle(org.category)}`}>
                  {org.category}
                </span>
                <span className="inline-flex items-center rounded bg-slate-150 border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 uppercase">
                  {org.campus}
                </span>
              </div>
              <h2 className="mt-1 font-extrabold text-blue-900 text-base md:text-xl">{org.name}</h2>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Scrollable Content Shell */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          
          {/* Section: Overview */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">About the Organization</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{org.description}</p>
          </div>

          {/* Section: Recruitment details & Fee */}
          <div className="pt-6 border-t border-slate-200">
            <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/40 max-w-sm">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4.5 w-4.5 text-emerald-600 animate-pulse" />
                <h3 className="font-bold text-slate-900 text-xs md:text-sm">Membership Fee</h3>
              </div>
              <p className="text-xs md:text-sm text-slate-800 bg-emerald-50/55 text-emerald-800 font-bold px-3 py-1.5 rounded-lg border border-emerald-200 inline-block uppercase tracking-wider">
                {org.membershipFee}
              </p>
            </div>
          </div>

          {/* Section: Officers Directory */}
          {org.officers.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Key Organization Officers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {org.officers.map((officer, idx) => (
                  <div key={idx} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-xs font-bold text-slate-600 border border-slate-200">
                      <User className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold text-slate-900">{officer.name}</p>
                      <p className="truncate text-[11px] text-slate-505 font-medium">{officer.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Featured Events */}
          {org.featuredEvents.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Featured Core Initiatives</h3>
              <div className="space-y-3">
                {org.featuredEvents.map((event, idx) => (
                  <div key={idx} className="rounded-xl border border-dashed border-slate-300 p-4 bg-slate-50/20">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="font-bold text-slate-900 text-xs md:text-sm">{event.title}</h4>
                      <span className="text-[11px] text-slate-500 font-semibold bg-white px-2.5 py-0.5 rounded border border-slate-200 shrink-0 shadow-xs">
                        {event.date}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Social Details */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Stay in Touch</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${org.contactEmail}`}
                className="flex items-center gap-2 hover:text-blue-900 text-slate-600 text-xs bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 font-semibold"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                <span>{org.contactEmail}</span>
              </a>
              {org.facebookUrl && (
                <a
                  href={org.facebookUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-900 text-slate-600 text-xs bg-slate-50 px-3 py-2 rounded-lg border border-slate-200 font-semibold"
                >
                  <Facebook className="h-4 w-4 text-slate-400" />
                  <span>Facebook Profile</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="border-t border-slate-200 p-4 bg-slate-50/30 flex flex-col sm:flex-row justify-between gap-3">
          <button
            onClick={() => onToggleBookmark(org.id)}
            className={`w-full sm:w-auto rounded-xl px-5 py-2.5 text-xs md:text-sm font-bold border transition-all flex items-center justify-center gap-2 uppercase tracking-tight ${
              isBookmarked
                ? 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <span>{isBookmarked ? '★ Bookmarked' : '☆ Bookmark Trial'}</span>
          </button>

          <a
            href={`mailto:${org.contactEmail}?subject=Byaheng%20Kyusiyu%2520-%2520Inquiry%2520-%2520${org.acronym}`}
            className="w-full sm:w-auto rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs md:text-sm px-6 py-2.5 flex items-center justify-center gap-2 transition-transform shadow-md uppercase tracking-tighter cursor-pointer"
          >
            <Send className="h-4 w-4" />
            <span>Contact {org.acronym} via Email</span>
          </a>
        </div>

      </div>
    </div>
  );
}
