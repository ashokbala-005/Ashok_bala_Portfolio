import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar = ({ onOpenResume, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'showcase', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#hero', id: 'hero' },
    { name: 'Prompt Lab', href: '#showcase', id: 'showcase' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const isDark = theme === 'dark';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? 'py-3 bg-[#070A13]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/40'
            : 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200/90 shadow-md shadow-slate-200/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center font-black text-white text-lg shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            AB
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg tracking-tight transition-colors ${
              isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-indigo-600'
            }`}>
              {personalInfo.name}
            </span>
            <span className={`text-[11px] font-mono tracking-wider uppercase font-semibold ${
              isDark ? 'text-cyan-400' : 'text-indigo-600'
            }`}>
              GenAI & Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className={`hidden md:flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-md transition-colors ${
          isDark
            ? 'bg-slate-900/70 border-slate-800/80'
            : 'bg-slate-100/90 border-slate-200/90 shadow-inner'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? isDark
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.25)]'
                      : 'bg-white text-indigo-600 border border-slate-200 shadow-sm'
                    : isDark
                      ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className={`p-2 rounded-xl border transition-all duration-200 ${
              isDark
                ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-amber-400 hover:text-amber-300 shadow-sm'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-indigo-600 hover:text-indigo-700 shadow-sm'
            }`}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={onOpenResume}
            className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all duration-200 ${
              isDark
                ? 'bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-slate-200 hover:text-white'
                : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-700 hover:text-slate-900 shadow-sm'
            }`}
          >
            <FileText className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span>Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu and theme buttons */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className={`p-2 rounded-xl border transition-colors ${
              isDark
                ? 'bg-slate-800/60 border-slate-700 text-amber-400'
                : 'bg-slate-100 border-slate-300 text-indigo-600'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl border focus:outline-none ${
              isDark
                ? 'bg-slate-800/60 border-slate-700 text-slate-300 hover:text-white'
                : 'bg-slate-100 border-slate-300 text-slate-700 hover:text-slate-900'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-5 py-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200 border-b backdrop-blur-2xl ${
          isDark
            ? 'bg-[#0a0f1d]/95 border-slate-800 text-slate-200'
            : 'bg-white/95 border-slate-200 text-slate-800 shadow-xl'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isDark
                    ? 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60'
                    : 'text-slate-700 hover:text-indigo-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className={`pt-3 border-t flex flex-col gap-2 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border ${
                isDark
                  ? 'bg-slate-800 text-slate-200 border-slate-700'
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <FileText className="w-4 h-4 text-cyan-500" />
              View Full Resume
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-indigo-500/20"
            >
              <Send className="w-4 h-4" />
              Contact Ashok
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
