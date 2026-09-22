import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/portfolioData';

export const Education = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="education" className={`py-24 relative tech-grid border-t transition-colors ${
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
            <GraduationCap className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span>Academic Background</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Strong foundational computer science and engineering coursework, analytical mathematics, and software design principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800 hover:border-indigo-500/40 hover:shadow-xl hover:shadow-indigo-500/10'
                  : 'bg-white border-slate-200/90 hover:border-indigo-400 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    isDark
                      ? 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30'
                      : 'bg-indigo-50 text-indigo-600 border-indigo-200'
                  }`}>
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-bold text-xs font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>{item.score}</span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {item.degree}
                </h3>
                <h4 className={`text-sm font-semibold mb-4 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                  {item.institution}
                </h4>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.description}
                </p>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between text-xs font-mono ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span className="flex items-center gap-1.5">
                  <Calendar className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                  {item.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
                  {item.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
