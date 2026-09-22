import React, { useState } from 'react';
import { 
  Bot, Cpu, Sparkles, Wand2, Workflow, Zap, Terminal, Code2, 
  Layers, Palette, Layout, Server, Database, Radio, 
  ShieldCheck, GitBranch, Code, Cloud, Users, Lock, 
  Atom, Smartphone, Eye, CheckCircle 
} from 'lucide-react';
import { Github } from './Icons';
import { skillsData } from '../data/portfolioData';

// Icon resolver helper
const getIcon = (iconName) => {
  const map = {
    Bot, Cpu, Sparkles, Wand2, Workflow, Zap, Terminal, Code2,
    Layers, Palette, Layout, Server, Database, Radio,
    ShieldCheck, GitBranch, Github, Code, Cloud, Users, Lock,
    Atom, Smartphone, Eye
  };
  const Component = map[iconName] || Code2;
  return <Component className="w-5 h-5" />;
};

export const Skills = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const isDark = theme === 'dark';

  const categories = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'genAI', label: 'GenAI & Prompting' },
    { key: 'frontend', label: 'Frontend UI' },
    { key: 'backend', label: 'Backend & APIs' },
    { key: 'tools', label: 'Tools & Workflow' },
  ];

  const renderSection = (categoryKey, data) => (
    <div key={categoryKey} className="mb-12 last:mb-0">
      <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-3 border-b transition-colors ${
        isDark ? 'border-slate-800' : 'border-slate-200'
      }`}>
        <div>
          <h3 className={`text-xl font-bold tracking-tight flex items-center gap-2 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isDark ? 'bg-cyan-400' : 'bg-indigo-600'}`} />
            {data.category}
          </h3>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{data.description}</p>
        </div>
        <span className={`text-xs font-mono px-3 py-1 rounded-full border self-start sm:self-auto font-medium ${
          isDark
            ? 'text-cyan-400/90 bg-cyan-950/40 border-cyan-800/40'
            : 'text-indigo-700 bg-indigo-50 border-indigo-200'
        }`}>
          {data.items.length} Core Competencies
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.items.map((skill, idx) => (
          <div
            key={idx}
            className={`group p-4 rounded-2xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${
              isDark
                ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10'
                : 'bg-white border-slate-200/90 hover:border-indigo-400 shadow-sm hover:shadow-md hover:shadow-indigo-500/10'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`p-2.5 rounded-xl transition-all group-hover:scale-105 ${
                isDark
                  ? 'bg-slate-800/90 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500/20'
                  : 'bg-slate-100 text-indigo-600 group-hover:bg-indigo-50 group-hover:text-indigo-700'
              }`}>
                {getIcon(skill.icon)}
              </div>
              <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${
                isDark
                  ? 'bg-slate-800 text-slate-400 border-slate-700/60'
                  : 'bg-slate-100 text-slate-600 border-slate-200'
              }`}>
                {skill.tag}
              </span>
            </div>

            <div className="mb-2">
              <h4 className={`font-semibold text-sm transition-colors ${
                isDark
                  ? 'text-white group-hover:text-cyan-300'
                  : 'text-slate-900 group-hover:text-indigo-600'
              }`}>
                {skill.name}
              </h4>
            </div>

            {/* Proficiency Bar */}
            <div className="space-y-1">
              <div className={`flex justify-between text-[10px] font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-500 font-medium'
              }`}>
                <span>Proficiency</span>
                <span className={isDark ? 'text-cyan-400' : 'text-indigo-600 font-bold'}>{skill.level}%</span>
              </div>
              <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                isDark ? 'bg-slate-800' : 'bg-slate-100'
              }`}>
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    isDark
                      ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 group-hover:from-cyan-400 group-hover:to-indigo-400'
                      : 'bg-gradient-to-r from-indigo-500 to-cyan-500 group-hover:from-indigo-600 group-hover:to-cyan-600'
                  }`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 relative tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 ${
            isDark
              ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300'
              : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
          }`}>
            <Cpu className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Specialized Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A comprehensive matrix of modern full-stack engineering, prompt design, GenAI workflow orchestration, and agile collaboration standards.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.key
                    ? isDark
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/25 scale-105'
                      : 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 scale-105'
                    : isDark
                      ? 'bg-slate-900/80 text-slate-300 border border-slate-800 hover:bg-slate-800'
                      : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Render */}
        <div className="mt-8">
          {activeCategory === 'all' && (
            <>
              {renderSection('genAI', skillsData.genAI)}
              {renderSection('frontend', skillsData.frontend)}
              {renderSection('backend', skillsData.backend)}
              {renderSection('tools', skillsData.tools)}
            </>
          )}

          {activeCategory === 'genAI' && renderSection('genAI', skillsData.genAI)}
          {activeCategory === 'frontend' && renderSection('frontend', skillsData.frontend)}
          {activeCategory === 'backend' && renderSection('backend', skillsData.backend)}
          {activeCategory === 'tools' && renderSection('tools', skillsData.tools)}
        </div>

      </div>
    </section>
  );
};
