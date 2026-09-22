import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ShieldCheck, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="experience" className={`py-24 relative tech-grid border-t transition-colors ${
      isDark ? 'border-slate-800/60' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 ${
            isDark
              ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300'
              : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
          }`}>
            <Briefcase className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span>Professional Career</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Work Experience & <span className="gradient-text">Internships</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Hands-on software development experience across agile web engineering, prompt engineering for production codebases, and full-stack systems delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className={`absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 hidden sm:block ${
            isDark
              ? 'bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-600 opacity-30'
              : 'bg-gradient-to-b from-indigo-300 via-cyan-400 to-indigo-500 opacity-40'
          }`} />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center gap-8">
                  
                  {/* Timeline Badge (Desktop Center) */}
                  <div className={`hidden sm:flex absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 transition-colors ${
                    isDark
                      ? 'bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] text-cyan-400'
                      : 'bg-white border-2 border-indigo-600 shadow-md text-indigo-600'
                  }`}>
                    <Sparkles className="w-4 h-4" />
                  </div>

                  {/* Card Content */}
                  <div className={`w-full ${isEven ? 'md:pr-14 md:text-left' : 'md:pl-14 md:ml-auto md:text-left'}`}>
                    <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:shadow-xl ${
                      isDark
                        ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-500/10'
                        : 'bg-white border-slate-200/90 hover:border-indigo-400 shadow-sm hover:shadow-indigo-500/10'
                    }`}>
                      
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                          isDark
                            ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                            : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                        }`}>
                          <Building className="w-3.5 h-3.5" />
                          {exp.company}
                        </span>

                        <div className={`flex items-center gap-3 text-xs font-mono ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          <span className="flex items-center gap-1">
                            <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                            {exp.period}
                          </span>
                          {exp.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 animate-pulse">
                              Current Role
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Role & Location */}
                      <h3 className={`text-xl font-bold mb-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      <div className={`flex items-center gap-1.5 text-xs mb-6 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
                        <span>{exp.location}</span>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-3 mb-6">
                        {exp.highlights.map((item, hIdx) => (
                          <div key={hIdx} className={`flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-slate-700'
                          }`}>
                            <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isDark ? 'text-cyan-400' : 'text-indigo-600'
                            }`} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className={`pt-4 border-t flex flex-wrap gap-2 ${
                        isDark ? 'border-slate-800/80' : 'border-slate-200'
                      }`}>
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                              isDark
                                ? 'bg-slate-800/80 text-slate-300 border-slate-700/60 hover:text-cyan-300 hover:border-cyan-500/30'
                                : 'bg-slate-100 text-slate-700 border-slate-200 hover:text-indigo-700 hover:border-indigo-300'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
