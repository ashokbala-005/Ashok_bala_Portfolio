import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromptShowcase } from './components/PromptShowcase';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio_theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen flex flex-col font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#070A13] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navigation */}
      <Navbar
        onOpenResume={() => setResumeModalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenResume={() => setResumeModalOpen(true)} theme={theme} />
        <PromptShowcase theme={theme} />
        <Skills theme={theme} />
        <Experience theme={theme} />
        <Projects theme={theme} />
        <Education theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Footer */}
      <Footer theme={theme} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        theme={theme}
      />
    </div>
  );
}

export default App;
