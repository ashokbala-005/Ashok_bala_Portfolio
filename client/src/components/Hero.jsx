import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Mail, MapPin, CheckCircle2, Code2, Bot } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero = ({ onOpenResume, theme }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden tech-grid">
      {/* Ambient Glow Orbs */}
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none -z-10 animate-glow-pulse ${
        isDark ? 'bg-cyan-500/15' : 'bg-cyan-500/10'
      }`} />
      <div className={`absolute top-1/3 right-10 w-[450px] h-[450px] rounded-full blur-[130px] pointer-events-none -z-10 ${
        isDark ? 'bg-indigo-500/15' : 'bg-indigo-500/12'
      }`} />
      <div className={`absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none -z-10 ${
        isDark ? 'bg-purple-500/10' : 'bg-purple-500/08'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 transition-colors ${
              isDark
                ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                : 'bg-indigo-50 border border-indigo-200 text-indigo-700 shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Junior Developer Intern @ RX Square</span>
              <span className="opacity-40">•</span>
              <span>Prompt & Full-Stack</span>
            </div>

            {/* Name */}
            <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start mb-6">
              <span className={`text-xl sm:text-2xl lg:text-3xl font-bold flex items-center gap-2 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <Sparkles className={`w-5 h-5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <span className={`font-mono transition-all duration-300 ${
                  isDark ? 'text-cyan-400' : 'text-indigo-600'
                }`}>
                  {personalInfo.roles[currentRoleIndex]}
                </span>
              </span>
            </div>

            {/* Bio */}
            <p className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {personalInfo.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm mb-8">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}>
                <MapPin className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <span>{personalInfo.location}</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}>
                <Bot className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span>Claude AI & Google Antigravity</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border ${
                isDark
                  ? 'bg-slate-900/60 border-slate-800 text-slate-400'
                  : 'bg-white border-slate-200 text-slate-700 shadow-sm'
              }`}>
                <Code2 className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <span>React · Node · Express · MySQL</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#showcase"
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border font-semibold text-sm transition-all ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 hover:border-cyan-500/40 text-slate-200'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm hover:border-indigo-400'
                }`}
              >
                <Sparkles className={`w-4 h-4 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
                <span>Prompt Demos</span>
              </a>

              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-5 py-3.5 rounded-xl border font-semibold text-sm transition-all ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 hover:border-indigo-500/40 text-slate-200'
                    : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm hover:border-indigo-400'
                }`}
              >
                <Download className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-950 hover:border-indigo-400 hover:bg-slate-50 shadow-sm'
                }`}
                title="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-400 hover:bg-slate-50 shadow-sm'
                }`}
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className={`p-2.5 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-400 hover:bg-slate-50 shadow-sm'
                }`}
                title="Email Ashok"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column: Terminal & Stats Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="p-0.5 rounded-3xl bg-gradient-to-br from-cyan-500/40 via-indigo-500/40 to-purple-600/40 shadow-2xl shadow-indigo-500/15">
                <div className="rounded-[22px] bg-[#0c1222]/95 backdrop-blur-2xl p-6 border border-white/10 text-slate-100">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 font-medium">
                      <Bot className="w-3.5 h-3.5" />
                      <span>ashok_bala_genai_agent.sh</span>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="space-y-4 font-mono text-xs">
                    <div>
                      <span className="text-slate-500">// Engineering Profile Context</span>
                      <p className="text-slate-200 mt-1">
                        <span className="text-cyan-400">$ prompt_engineer</span> --target="Full-Stack Production"
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-indigo-400">Current Engagement:</span>
                        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                          <CheckCircle2 className="w-3 h-3" /> RX Square Intern
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-indigo-400">Primary AI Stack:</span>
                        <span className="text-cyan-300">Claude AI · Antigravity · Copilot</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-indigo-400">Core Tech:</span>
                        <span className="text-slate-200">React · Node · Express · MySQL</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-indigo-400">Methodology:</span>
                        <span className="text-slate-200">Role-Based & Few-Shot Prompting</span>
                      </div>
                    </div>

                    {/* Stats Grid inside card */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {personalInfo.stats.map((st, idx) => (
                        <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                          <div className="text-lg font-bold gradient-text">{st.value}</div>
                          <div className="text-[10px] text-slate-400 font-sans font-medium">{st.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Snippet highlight */}
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-200 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>"Crafting robust full-stack software accelerated by disciplined prompt design."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
