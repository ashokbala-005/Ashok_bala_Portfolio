import React, { useState } from 'react';
import { Sparkles, Copy, Check, Terminal, Bot, Play, Cpu, Wand2, ShieldCheck, ArrowRight } from 'lucide-react';
import { promptShowcases } from '../data/portfolioData';

export const PromptShowcase = ({ theme }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedOutput, setSimulatedOutput] = useState(null);

  const isDark = theme === 'dark';
  const current = promptShowcases[activeTab];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulatedOutput(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulatedOutput(current.outputPreview);
    }, 600);
  };

  return (
    <section id="showcase" className={`py-20 relative tech-grid border-t border-b transition-colors ${
      isDark ? 'border-slate-800/60' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 ${
            isDark
              ? 'bg-indigo-500/10 border border-indigo-500/30 text-indigo-300'
              : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
          }`}>
            <Bot className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
            <span>Interactive Prompt Architecture</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Prompt Engineering <span className="gradient-text">In Action</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Explore how disciplined prompt design—structured constraints, role assignment, and few-shot patterns—accelerates development, unit testing, and code review with Claude AI, Google Antigravity, and GitHub Copilot.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tabs / Selector Sidebar */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className={`text-xs font-mono uppercase tracking-wider mb-2 px-1 ${
              isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
            }`}>
              Select Pattern Architecture:
            </h3>
            {promptShowcases.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(idx);
                    setSimulatedOutput(null);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                    isSelected
                      ? isDark
                        ? 'bg-slate-800/90 border-cyan-500/60 shadow-[0_4px_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30 text-white'
                        : 'bg-white border-indigo-500 shadow-md ring-1 ring-indigo-400/40 text-slate-900'
                      : isDark
                        ? 'bg-slate-900/50 border-slate-800/80 hover:bg-slate-800/50 text-slate-300'
                        : 'bg-white/80 border-slate-200/90 hover:bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-mono flex items-center gap-1.5 font-semibold ${
                      isDark ? 'text-cyan-400' : 'text-indigo-600'
                    }`}>
                      <Cpu className="w-3.5 h-3.5" />
                      {item.tool}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                      isDark
                        ? 'bg-slate-800 text-slate-400 border-slate-700'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  <h4 className={`font-semibold text-sm mb-1 ${
                    isSelected
                      ? isDark ? 'text-white' : 'text-indigo-700 font-bold'
                      : isDark ? 'text-slate-200' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h4>
                  <p className={`text-xs line-clamp-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {item.intent}
                  </p>
                </button>
              );
            })}

            {/* Prompt Methodology Insight Box */}
            <div className={`p-4 rounded-2xl border mt-6 ${
              isDark
                ? 'bg-cyan-950/20 border-cyan-500/20 text-slate-300'
                : 'bg-indigo-50/80 border-indigo-200 text-slate-700 shadow-sm'
            }`}>
              <div className={`flex items-center gap-2 text-xs font-bold mb-2 ${
                isDark ? 'text-cyan-300' : 'text-indigo-700'
              }`}>
                <ShieldCheck className="w-4 h-4 text-cyan-500" />
                <span>Confidentiality & Code Security</span>
              </div>
              <p className="text-xs leading-relaxed">
                "Prompts strictly adhere to company code confidentiality standards: credentials stored in environment variables, sanitized tokens, and restricted production access."
              </p>
            </div>
          </div>

          {/* Interactive Workspace Panel */}
          <div className="lg:col-span-8">
            <div className={`rounded-2xl border overflow-hidden backdrop-blur-xl shadow-2xl transition-colors ${
              isDark
                ? 'bg-slate-900/80 border-slate-700/80'
                : 'bg-white border-slate-200/90'
            }`}>
              
              {/* Workspace Header */}
              <div className={`px-5 py-3.5 border-b flex flex-wrap items-center justify-between gap-3 ${
                isDark ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${
                    isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <Wand2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Target Model: </span>
                    <span className={`text-xs font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{current.tool}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(current.promptText)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium transition-colors ${
                      isDark
                        ? 'bg-slate-800/90 hover:bg-slate-700 border-slate-700 text-slate-300'
                        : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 shadow-sm'
                    }`}
                    title="Copy prompt text"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                    <span>{copied ? 'Copied' : 'Copy Prompt'}</span>
                  </button>

                  <button
                    onClick={handleSimulate}
                    disabled={isSimulating}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-indigo-500/20 disabled:opacity-50 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{isSimulating ? 'Synthesizing...' : 'Simulate GenAI Output'}</span>
                  </button>
                </div>
              </div>

              {/* Prompt Body */}
              <div className="p-5 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className={isDark ? 'text-indigo-400' : 'text-indigo-600 font-semibold'}>
                      // Structured Prompt Specification:
                    </span>
                    <span className={isDark ? 'text-slate-500' : 'text-slate-400'}>
                      Few-shot calibrated
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-xs text-cyan-200 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-56 shadow-inner">
                    {current.promptText}
                  </pre>
                </div>

                {/* Simulated Output Area */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-emerald-500 font-semibold">
                      // AI-Assisted Solution / Code Generation:
                    </span>
                    {simulatedOutput && (
                      <span className="text-[11px] text-emerald-500 flex items-center gap-1 font-semibold">
                        <Check className="w-3 h-3" /> Ready for Code Review & PR
                      </span>
                    )}
                  </div>

                  {isSimulating ? (
                    <div className="p-6 rounded-xl bg-[#090d16] border border-slate-800 flex flex-col items-center justify-center text-slate-400 gap-3">
                      <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                      <span className="text-xs font-mono text-cyan-300">Evaluating role constraints & compiling verified solution...</span>
                    </div>
                  ) : simulatedOutput ? (
                    <pre className="p-4 rounded-xl bg-[#090d16] border border-emerald-500/40 text-xs text-emerald-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto shadow-inner animate-in fade-in duration-300">
                      {simulatedOutput}
                    </pre>
                  ) : (
                    <div
                      onClick={handleSimulate}
                      className={`p-5 rounded-xl border border-dashed text-center cursor-pointer transition-colors group ${
                        isDark
                          ? 'border-slate-800 hover:border-cyan-500/40 bg-slate-950/40'
                          : 'border-slate-300 hover:border-indigo-400 bg-slate-50/80'
                      }`}
                    >
                      <Sparkles className="w-5 h-5 text-indigo-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className={`text-xs font-medium ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                        Click <span className="text-indigo-500 font-bold underline">"Simulate GenAI Output"</span> to preview the clean, production-ready solution synthesized by this prompt.
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
