import React, { useState } from 'react';
import { 
  FolderGit2, ExternalLink, Sparkles, Layers, 
  CheckCircle2, X, ArrowUpRight, Cpu, Radio, ShoppingBag 
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

export const Projects = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="py-24 relative tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 ${
            isDark
              ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300'
              : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
          }`}>
            <FolderGit2 className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span>Showcase & Research</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            From IEEE-published deep learning signal processing to production full-stack e-commerce platforms engineered with AI-assisted workflows.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => {
            const isAIResearch = proj.id === 'spectrum-sensing';
            return (
              <div
                key={proj.id}
                className={`group relative rounded-3xl border backdrop-blur-xl p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isDark
                    ? 'bg-slate-900/70 border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/15'
                    : 'bg-white border-slate-200/90 hover:border-indigo-400 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10'
                }`}
              >
                <div>
                  {/* Top Category Badge & Icon */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                      isDark
                        ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                        : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                    }`}>
                      {isAIResearch ? <Radio className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                      {proj.category}
                    </span>

                    <button
                      onClick={() => setSelectedProject(proj)}
                      className={`p-2 rounded-xl transition-colors ${
                        isDark
                          ? 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                          : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                      }`}
                      title="Inspect Details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className={`text-2xl font-bold mb-2 transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-cyan-300'
                      : 'text-slate-900 group-hover:text-indigo-600'
                  }`}>
                    {proj.title}
                  </h3>
                  <p className={`text-xs font-mono mb-4 font-semibold ${
                    isDark ? 'text-indigo-300' : 'text-indigo-600'
                  }`}>{proj.tagline}</p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {proj.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    {proj.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-xs ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isDark ? 'text-cyan-400' : 'text-indigo-600'
                        }`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Stack & Actions */}
                <div>
                  <div className={`pt-4 border-t mb-5 flex flex-wrap gap-1.5 ${
                    isDark ? 'border-slate-800/80' : 'border-slate-200'
                  }`}>
                    {proj.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                          isDark
                            ? 'bg-slate-950/80 text-cyan-300 border-slate-800'
                            : 'bg-slate-100 text-indigo-700 border-slate-200'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors border ${
                        isDark
                          ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200 hover:text-white'
                          : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-900 shadow-sm'
                      }`}
                    >
                      <span>Deep Dive & Architecture</span>
                    </button>

                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`flex items-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-semibold transition-colors border ${
                          isDark
                            ? 'bg-slate-950 hover:bg-cyan-500/20 border-slate-800 text-slate-300 hover:text-cyan-300'
                            : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 hover:text-indigo-600 shadow-sm'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Deep Dive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl ${
              isDark ? 'bg-[#0d1424] border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
            }`}>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 right-6 p-2 rounded-xl transition-colors ${
                  isDark
                    ? 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Content */}
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-2 ${
                  isDark
                    ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                    : 'bg-indigo-50 text-indigo-700 border-indigo-200'
                }`}>
                  {selectedProject.badge}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {selectedProject.title}
                </h3>
                <p className={`text-sm font-mono font-semibold ${isDark ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  {selectedProject.tagline}
                </p>
              </div>

              <div className={`p-4 rounded-2xl border mb-6 ${
                isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Architectural Summary
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
                  {selectedProject.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className={`text-xs font-mono uppercase tracking-wider mb-3 font-semibold ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Technical Specifications & Achievements
                </h4>
                <div className="space-y-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isDark ? 'text-cyan-400' : 'text-indigo-600'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 font-semibold ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-medium border ${
                        isDark
                          ? 'bg-slate-800 text-cyan-300 border-slate-700'
                          : 'bg-slate-100 text-indigo-700 border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className={`flex items-center justify-end gap-3 pt-4 border-t ${
                isDark ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border ${
                    isDark
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                  }`}
                >
                  Close
                </button>

                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-500/25 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
