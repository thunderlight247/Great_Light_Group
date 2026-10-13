'use client';

import { useState } from 'react';
import { Send, MessageSquare, CheckCircle, Mail, Phone, ArrowUpRight, Code2, Terminal } from 'lucide-react';
import { BRAND_DATA, SOFTWARE_SERVICES } from '@/data/portfolioData';

export default function SoftwareEnquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Application Development');
  const [stackPreference, setStackPreference] = useState('Next.js / TypeScript / Go');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const message = `Hello Great Light Group (Software Division),\n\nMy name is ${name || '[Your Name]'}.\nI am inquiring regarding: *${service}*.\nPreferred Stack: ${stackPreference}.\n\nProject Scope:\n${details || 'I would like to discuss software requirements and scoping.'}\n\nEmail: ${email || '[Your Email]'}\nPhone: ${phone || '[Your Phone]'}`;
    return `https://wa.me/233594273358?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3 flex items-center justify-center gap-2">
            <Code2 className="w-4 h-4" />
            <span>Direct Engineering Consultation</span>
          </div>
          <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight mb-4">
            Initiate a Software Project with <br />
            <span className="font-normal italic text-glg-gold">
              Great Light Group.
            </span>
          </h2>
          <p className="text-sm text-glg-text-secondary leading-relaxed">
            From high-concurrency database ledgers to custom enterprise web and mobile applications. Our principal engineer responds within 24 hours with architectural scoping.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Engineering Form Card */}
          <div className="md:col-span-8 glass-panel rounded-3xl p-7 sm:p-10 shadow-editorial border border-glg-emerald/30">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-glg-emerald/20 text-glg-emerald mx-auto flex items-center justify-center border border-glg-emerald/40 shadow-emerald-glow">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Engineering Scope Received
                </h3>
                <p className="text-xs text-glg-text-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you for submitting your brief. Our principal engineer will review your requirements and provide an initial technical proposal within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold text-glg-gold underline hover:text-glg-gold-bright"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-emerald mb-2 font-semibold">
                    Select Software Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-glg-emerald focus:ring-1 focus:ring-glg-emerald"
                  >
                    {SOFTWARE_SERVICES.map((s) => (
                      <option key={s.number} value={s.title} className="bg-black text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel Boateng"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-emerald focus:ring-1 focus:ring-glg-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. samuel@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-emerald focus:ring-1 focus:ring-glg-emerald"
                    />
                  </div>
                </div>

                {/* Phone & Tech Stack Preference */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +233 59 427 3358"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-emerald focus:ring-1 focus:ring-glg-emerald"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                      Target Stack (Optional)
                    </label>
                    <input
                      type="text"
                      value={stackPreference}
                      onChange={(e) => setStackPreference(e.target.value)}
                      placeholder="e.g. Next.js, Go, Flutter, PostgreSQL"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-emerald focus:ring-1 focus:ring-glg-emerald"
                    />
                  </div>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                    Technical Scope &amp; Functional Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your system architecture, business requirements, expected user volume, or deadline..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-emerald focus:ring-1 focus:ring-glg-emerald resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all shadow-emerald-glow hover:scale-105"
                  >
                    <span>Submit Technical Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-500 transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Engineer (0594273358)</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Technical Guarantee & Contact */}
          <div className="md:col-span-4 space-y-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-glg-emerald/30 space-y-4">
              <div className="text-xs uppercase font-mono tracking-wider text-glg-emerald font-bold">
                Direct Engineering Line
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/233594273358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-glg-text-secondary hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-glg-emerald shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white font-mono">+233 59 427 3358</div>
                    <div className="text-[10px] text-glg-text-muted">Engineering WhatsApp &amp; Calls</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="flex items-start gap-3 text-xs text-glg-text-secondary hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-glg-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white font-mono break-all">{BRAND_DATA.email}</div>
                    <div className="text-[10px] text-glg-text-muted">Technical Enquiries</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-white font-bold">
                Engineering Guarantees
              </div>
              <p className="text-xs text-glg-text-muted leading-relaxed">
                All production systems include automated database migrations, Docker container orchestration, reproducible builds, and 100% type safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
