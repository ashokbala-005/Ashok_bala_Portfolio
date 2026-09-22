import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer = ({ theme }) => {
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 relative overflow-hidden transition-colors ${
      isDark ? 'bg-[#05070e] border-slate-800/80 text-slate-100' : 'bg-slate-100 border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${
          isDark ? 'border-slate-800/80' : 'border-slate-200'
        }`}>
          {/* Brand info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-sm">
                AB
              </div>
              <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {personalInfo.name}
              </span>
            </div>
            <p className={`text-xs max-w-md ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Prompt Engineering & GenAI-Assisted Development • React JS · Node JS · Express · MySQL
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-indigo-400 shadow-sm'
              }`}
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-400 shadow-sm'
              }`}
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-400 shadow-sm'
              }`}
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-all ${
                isDark
                  ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30 text-cyan-400'
                  : 'bg-white hover:bg-slate-50 border-slate-300 text-indigo-600 shadow-sm'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className={`pt-6 flex flex-col sm:flex-row items-center justify-between text-xs gap-3 text-center sm:text-left font-mono ${
          isDark ? 'text-slate-500' : 'text-slate-500'
        }`}>
          <div>
            © {new Date().getFullYear()} Ashok Bala S. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with React, Tailwind &</span>
            <Sparkles className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span className={isDark ? 'text-cyan-400' : 'text-indigo-600 font-semibold'}>
              Prompt Engineering
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
