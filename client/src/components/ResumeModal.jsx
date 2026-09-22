import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { personalInfo, skillsData, experiences, projects, education } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose, theme }) => {
  if (!isOpen) return null;

  const isDark = theme === 'dark';

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    window.open('/api/resume/download', '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
        isDark ? 'bg-[#0b101d] border-slate-700' : 'bg-white border-slate-300'
      }`}>
        
        {/* Top Control Bar */}
        <div className={`flex items-center justify-between px-6 py-4 border-b shrink-0 ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-cyan-500" />
            <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Curriculum Vitae — Ashok Bala S
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200'
                  : 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700 shadow-sm'
              }`}
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-indigo-500" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-bold text-white shadow-sm transition-colors"
              title="Download Resume Document"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              className={`p-1.5 rounded-xl transition-colors ${
                isDark ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' : 'bg-slate-200 hover:bg-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className={`overflow-y-auto p-6 sm:p-10 space-y-8 font-sans ${
          isDark ? 'text-slate-100 bg-[#070b14]' : 'text-slate-900 bg-white'
        }`}>
          
          {/* Header */}
          <div className={`text-center pb-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <h1 className={`text-3xl sm:text-4xl font-black tracking-tight uppercase mb-2 ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}>
              {personalInfo.name}
            </h1>
            <p className={`text-sm sm:text-base font-semibold tracking-wide mb-3 ${
              isDark ? 'text-cyan-400' : 'text-indigo-600'
            }`}>
              Prompt Engineering & GenAI-Assisted Development | React JS · Node JS · JavaScript
            </p>
            <div className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-mono ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <span>{personalInfo.email}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono mt-2 text-indigo-500 font-semibold">
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/ashok-bala-7bb372362
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/ashokbala005
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className={`text-sm font-bold tracking-wider uppercase pb-1 mb-3 border-b-2 ${
              isDark ? 'text-cyan-300 border-cyan-500/40' : 'text-indigo-700 border-indigo-500/40'
            }`}>
              Professional Summary
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed text-justify ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className={`text-sm font-bold tracking-wider uppercase pb-1 mb-3 border-b-2 ${
              isDark ? 'text-cyan-300 border-cyan-500/40' : 'text-indigo-700 border-indigo-500/40'
            }`}>
              Technical Skills
            </h2>
            <div className={`space-y-2 text-xs sm:text-sm ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Generative AI / Prompt Engineering: </span>
                <span>Prompt design & optimization, structured/role-based prompting, few-shot prompting, prompt debugging, AI-assisted code generation and review</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>AI Tools: </span>
                <span className={`font-semibold ${isDark ? 'text-cyan-300' : 'text-indigo-600'}`}>Claude AI, Google Antigravity, GitHub Copilot</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Languages: </span>
                <span>JavaScript (ES6+)</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Frontend: </span>
                <span>React JS, HTML, CSS, Tailwind CSS, Bootstrap</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Backend: </span>
                <span>Node JS, Express JS</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Database: </span>
                <span>MySQL</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Developer Tools: </span>
                <span>Git, GitHub, VS Code</span>
              </div>
              <div>
                <span className={`font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Deployment & Hosting: </span>
                <span>Shared Hosting</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className={`text-sm font-bold tracking-wider uppercase pb-1 mb-4 border-b-2 ${
              isDark ? 'text-cyan-300 border-cyan-500/40' : 'text-indigo-700 border-indigo-500/40'
            }`}>
              Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <div>
                      <span className={`font-bold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </span>
                      <span className="opacity-50"> — </span>
                      <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                        {exp.company}
                      </span>
                      <span className="text-xs opacity-70">, {exp.location}</span>
                    </div>
                    <span className="text-xs font-mono italic text-indigo-500 font-semibold">{exp.period}</span>
                  </div>
                  <ul className={`list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className={`text-sm font-bold tracking-wider uppercase pb-1 mb-4 border-b-2 ${
              isDark ? 'text-cyan-300 border-cyan-500/40' : 'text-indigo-700 border-indigo-500/40'
            }`}>
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((proj, idx) => (
                <div key={idx}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                    <div>
                      <span className={`font-bold text-sm sm:text-base ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        {proj.title}
                      </span>
                      <span className="opacity-50"> — </span>
                      <span className={`text-xs font-mono font-semibold ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                        {proj.category}
                      </span>
                    </div>
                  </div>
                  <ul className={`list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {proj.features.map((f, fIdx) => (
                      <li key={fIdx} className="leading-relaxed">
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className={`text-sm font-bold tracking-wider uppercase pb-1 mb-4 border-b-2 ${
              isDark ? 'text-cyan-300 border-cyan-500/40' : 'text-indigo-700 border-indigo-500/40'
            }`}>
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <div className={`font-bold text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {edu.degree}
                    </div>
                    <div className={`text-xs font-semibold ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                      {edu.institution}
                    </div>
                    <div className="text-xs text-emerald-500 font-semibold mt-0.5">
                      Percentage: {edu.score}
                    </div>
                  </div>
                  <span className="text-xs font-mono italic text-indigo-500 font-semibold self-start sm:self-auto mt-1 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
