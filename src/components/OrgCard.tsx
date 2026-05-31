/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Organization } from '../types';
import { Bookmark, MapPin, Building, ChevronRight } from 'lucide-react';

interface OrgCardProps {
  org: Organization;
  isBookmarked: boolean;
  onToggleBookmark: (id: string, e?: React.MouseEvent) => void;
  onViewDetails: (org: Organization) => void;
  key?: any;
}

export default function OrgCard({ org, isBookmarked, onToggleBookmark, onViewDetails }: OrgCardProps) {
  // Map category to geometric balanced badge styling
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
    <div
      onClick={() => onViewDetails(org)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:border-blue-900/30 transition-all duration-300 cursor-pointer"
    >
      {/* Top Bar with Acronym & Bookmarking */}
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Styled Logo Placeholder */}
            <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center font-black text-blue-900 border mb-4 shadow-sm text-sm tracking-tight ${org.logoBg ? org.logoBg : 'bg-blue-50 border-blue-100'}`}>
              {org.acronym}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-blue-900 transition-colors text-sm md:text-base leading-snug mb-1">
                {org.name}
              </h3>
              <span className={`inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold uppercase ${getCategoryBadgeStyle(org.category)}`}>
                {org.category}
              </span>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(org.id, e);
            }}
            className={`rounded-full p-2 transition-colors hover:bg-slate-50 ${
              isBookmarked ? 'text-blue-900' : 'text-slate-400 hover:text-slate-600'
            }`}
            title={isBookmarked ? 'Remove from saved' : 'Bookmark organization'}
          >
            <Bookmark className="h-5 w-5" fill={isBookmarked ? 'currentColor' : 'none'} />
          </button>
        </div>

        {/* Short Description */}
        <p className="mt-4 text-xs md:text-sm text-slate-500 line-clamp-3 leading-relaxed">
          {org.description}
        </p>
      </div>

      {/* Info Pills & Recruitment Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-4">
          <div className="flex items-center gap-1 rounded bg-slate-50 px-2.5 py-1 border border-slate-200">
            <span className="font-bold text-[9px] uppercase text-slate-600 tracking-wide">{org.type}</span>
          </div>
          {org.fields.map((f) => (
            <div key={f} className="flex items-center gap-1 rounded bg-blue-50 px-2.5 py-0.5 border border-blue-100 text-blue-900 font-bold text-[9px] uppercase">
              {f}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-end">
          <span className="flex items-center gap-1 text-xs font-bold text-blue-900 group-hover:translate-x-0.5 transition-transform uppercase tracking-tighter">
            View Trail
            <ChevronRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </div>
  );
}
