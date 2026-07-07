/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Mail,
  ShieldCheck,
  ClipboardList,
  ExternalLink,
  Users,
} from "lucide-react";

export default function Contribute() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 animate-in fade-in duration-300">
      {/* Intro Overview Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm mb-8">
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-900/5 blur-3xl pointer-events-none" />

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-[10px] font-bold text-blue-900 ring-1 ring-inset ring-blue-100 uppercase tracking-widest mb-4">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>Co-Create QCU Trail</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-none mb-3">
            Register or Revise Student Club Details
          </h2>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6">
            Are you an officer of a recognized{" "}
            <strong>Quezon City University</strong> student club? Or did you
            identify an official department council missing or outdated in our
            directory? You can request additions or corrections directly. Our
            portal managers will review the submitted documentation to verify
            and integrate updates.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://forms.gle/9kRqwEt8853ggkPF6"
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs md:text-sm px-6 py-3 transition-colors uppercase tracking-tight shadow-md cursor-pointer w-full sm:w-auto"
            >
              <span>Go to Google Form Registry</span>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Verification Workflow panel */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 space-y-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800">
          <ShieldCheck className="h-6 w-6" />
        </div>

        <div>
          <h3 className="font-extrabold text-slate-950 text-xs sm:text-sm mb-2 tracking-tight uppercase tracking-wider">
            Manual Verification Workflow
          </h3>
          <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
            Unlike fully automated systems,{" "}
            <strong>
              every directory request is personally verified and checked by the
              portal creators
            </strong>
            . If you submit new organization details or corrections, ensure that
            you provide supporting documentation (e.g., certification letters,
            approved activity papers, or university clearance paperwork).
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider">
              Who Checks Your Request?
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              <strong>Karl Jhon Mangapot</strong> and{" "}
              <strong>Rochele Fernandez</strong> (student portal creators &
              co-founding developers) serve as the sole administrators. They
              will review all materials for consistency of academic scope.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider font-sans">
              Contacting the Administrators
            </h4>
            <p className="text-slate-600 text-xs leading-relaxed">
              If your request is urgent, features massive corrections, or
              includes customized badge preferences, you may directly reach out
              to Karl via email at{" "}
              <a
                href="mailto:karl.mangapot@gmail.com"
                className="text-blue-900 underline font-semibold"
              >
                karl.mangapot@gmail.com
              </a>{" "}
              with the documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
