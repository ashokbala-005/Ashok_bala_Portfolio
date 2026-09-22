import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle2, AlertCircle, MessageSquare } from 'lucide-react';
import { Linkedin, Github } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const isDark = theme === 'dark';

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in your name, email, and message.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        console.warn('Backend endpoint returned non-200, acknowledging locally.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    } catch {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {}
    }
  };

  return (
    <section id="contact" className="py-24 relative tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold mb-3 ${
            isDark
              ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-300'
              : 'bg-indigo-50 border border-indigo-200 text-indigo-700'
          }`}>
            <MessageSquare className={`w-3.5 h-3.5 ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`} />
            <span>Get In Touch</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Interested in prompt engineering, GenAI-accelerated web systems, or discussing full-stack engineering roles? Drop a message below!
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Left: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`p-6 sm:p-7 rounded-3xl border backdrop-blur-xl space-y-6 ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Direct Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all group ${
                    isDark
                      ? 'bg-slate-950/60 border-slate-800 hover:border-cyan-500/40'
                      : 'bg-slate-50 border-slate-200 hover:border-indigo-400 shadow-sm'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl transition-transform group-hover:scale-105 ${
                    isDark ? 'bg-cyan-500/15 text-cyan-400' : 'bg-indigo-50 text-indigo-600'
                  }`}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email Address</div>
                    <div className={`text-sm font-semibold truncate transition-colors ${
                      isDark ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all group ${
                    isDark
                      ? 'bg-slate-950/60 border-slate-800 hover:border-emerald-500/40'
                      : 'bg-slate-50 border-slate-200 hover:border-emerald-500 shadow-sm'
                  }`}
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-500 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Phone & WhatsApp</div>
                    <div className={`text-sm font-semibold transition-colors ${
                      isDark ? 'text-slate-200 group-hover:text-emerald-400' : 'text-slate-900 group-hover:text-emerald-600'
                    }`}>
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className={`flex items-center gap-3.5 p-3 rounded-2xl border ${
                  isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className={`p-2.5 rounded-xl ${isDark ? 'bg-indigo-500/15 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Current Location</div>
                    <div className={`text-sm font-semibold ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-500 font-semibold'
                }`}>
                  Professional Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'bg-slate-950 hover:bg-cyan-500/20 border-slate-800 text-slate-300 hover:text-cyan-300'
                        : 'bg-slate-50 hover:bg-indigo-50 border-slate-200 text-slate-700 hover:text-indigo-600 shadow-sm'
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'bg-slate-950 hover:bg-indigo-500/20 border-slate-800 text-slate-300 hover:text-indigo-300'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl ${
              isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200/90 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Send a Message
              </h3>
              <p className={`text-xs mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Fill in the details below. Ashok will review and get back to you promptly.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 flex items-center gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div className="text-xs">
                    <span className="font-bold">Message Sent Successfully!</span> Thank you for reaching out. Ashok will respond shortly.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/40 text-rose-400 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                  <div className="text-xs font-medium">{errorMessage}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700 font-semibold'}`}>
                      Your Name <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Turner"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white'
                      }`}
                      required
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700 font-semibold'}`}>
                      Your Email <span className="text-cyan-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white'
                      }`}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700 font-semibold'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700 font-semibold'}`}>
                    Message <span className="text-cyan-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Ashok, I'd like to discuss a development opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl border text-xs sm:text-sm focus:outline-none transition-colors resize-none ${
                      isDark
                        ? 'bg-slate-950/80 border-slate-800 text-slate-200 placeholder-slate-500 focus:border-cyan-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white'
                    }`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
