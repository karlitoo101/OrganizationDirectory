/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Mail, Code, Terminal, Heart, Trophy, BookOpen } from 'lucide-react';

export default function Developers() {
  const devs = [
    {
      name: 'Karl Jhon Mangapot',
      role: 'Co-Founder & Project Manager',
      campus: 'San Bartolome (Main)',
      program: 'BS in Information Technology (BSIT)',
      avatarBg: 'bg-gradient-to-br from-blue-900 to-indigo-950 text-white',
      initials: 'KM',
      links: [
        { label: 'Karl Jhon Mangapot | LinkedIn', url: 'https://www.linkedin.com/in/karl-mangapot/' },
        { label: 'Karl Jhon Mangapot | Portfolio', url: 'https://karlmangapot.vercel.app/' }
      ],
      bio: 'I am an Information Technology student at Quezon City University and the Product Manager at the tech startup SEEGLA. In my role, I focus on product roadmapping and translating user needs into clear, actionable technical requirements. Beyond development, I am heavily involved in the local tech community. I serve as the Vice Chief Officer of Relations and Communication for the AWS Student Builder Group - QCU and regularly volunteer for events like WordPress Manila and DEVCON Manila.',
      skills: ['React', 'Tailwind CSS', 'Node.js', 'Flutter', 'C#', 'Java', 'Python', 'JavaScript', 'Project Management', 'SQL']
    },
    {
      name: 'Rochele Fernandez',
      role: 'Data Engineer',
      campus: 'San Bartolome (Main)',
      program: 'BS in Computer Science',
      avatarBg: 'bg-gradient-to-br from-teal-600 to-emerald-700 text-white',
      initials: 'RF',
      links: [
        { label: 'Rochele Fernandez | LinkedIn', url: 'https://www.linkedin.com/in/rochele-fernandez-7a8964354/?skipRedirect=true' },
        { label: 'Rochele Fernandez | Portfolio', url: 'https://about-rclfern.vercel.app/' }
      ],
      bio: 'Formerly hailing from an engineering background, now a Computer Science student venturing into the field of data science & econometrics and its scope to ML/AI development. Currently serving as the Chief Officer of Relations and Communications Office from AWS Student Builder Group - QCU and a member of the IEEE Computer Society - Philippine Chapter!',
      skills: ['Data Science', 'Econometrics', 'Python', 'ML/AI', 'IEEE Systems', 'SQL']
    }
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 animate-in fade-in duration-300">
      
      {/* Overview / Brief Summary */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-xs mb-10">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-[10px] font-bold text-blue-900 ring-1 ring-inset ring-blue-100 uppercase tracking-widest mb-4">
            <Code className="h-3.5 w-3.5" />
            <span>Project Creators</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-none mb-3">
            About the Web Creators
          </h2>
          <p className="text-slate-650 text-xs md:text-sm leading-relaxed mb-4">
            Taking the initiative to empower the QCU student community, <strong>Rochele and Karl</strong> built a dedicated web platform for student organizations. The two developers are the Chief and Vice-Chief of the esteemed <strong>AWS Student Builder Group - QCU</strong>.
          </p>
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider pr-6">
            <div className="flex items-center gap-1.5">
              <Trophy className="h-4 w-4 text-amber-500" />
              <span>AWS Builder Group</span>
            </div>
            <div className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4 text-blue-900" />
              <span>CCS Innovation Project</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Heart className="h-4 w-4 text-rose-500 shrink-0" />
              <span>Built with QCU Pride</span>
            </div>
          </div>
        </div>
      </div>

      {/* Individual Profiles Grid */}
      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 block font-mono">Meet the Student Developers</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {devs.map((dev, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg hover:border-blue-900/30 transition-all duration-300"
          >
            <div>
              {/* Profile Header Avatar */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-black text-lg shadow-sm border border-slate-100 ${dev.avatarBg}`}>
                  {dev.initials}
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm md:text-base leading-tight">
                    {dev.name}
                  </h4>
                  <p className="text-[10px] uppercase font-bold text-blue-900 mt-1">
                    {dev.role}
                  </p>
                </div>
              </div>

              {/* Bio Details */}
              <p className="mt-4 text-[11px] md:text-xs text-slate-650 leading-relaxed font-medium min-h-[70px]">
                {dev.bio}
              </p>

              {/* Campus Tags */}
              <div className="mt-4 flex flex-wrap gap-1">
                <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-0.5 text-[9px] font-bold text-slate-500 border border-slate-200">
                  {dev.campus}
                </span>
                <span className="inline-flex items-center rounded-md bg-blue-50/50 px-2 py-0.5 text-[9px] font-bold text-blue-800 border border-blue-100">
                  {dev.program}
                </span>
              </div>
            </div>

            {/* Technical Skills and Social Handles */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <div className="flex flex-wrap gap-1 mb-4">
                {dev.skills.map(s => (
                  <span key={s} className="bg-slate-150 px-1.5 py-0.5 rounded text-[8px] font-bold text-slate-650 border border-slate-200/50">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-2 border-t border-slate-50 pt-3">
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Terminal className="h-3 w-3" />
                  Website Links & Profiles
                </span>
                <div className="flex flex-col gap-1.5 mt-1">
                  {dev.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-blue-900 hover:text-blue-800 hover:underline flex items-center gap-1.5"
                    >
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
