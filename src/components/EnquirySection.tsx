'use client';

import { useState } from 'react';
import { Send, MessageSquare, CheckCircle, Mail, Phone, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_DATA, SOFTWARE_SERVICES, MEDIA_SERVICES } from '@/data/portfolioData';

export default function EnquirySection() {
  const [discipline, setDiscipline] = useState<'software' | 'media'>('software');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const currentServices = discipline === 'software' ? SOFTWARE_SERVICES : MEDIA_SERVICES;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const selectedService = service || (discipline === 'software' ? 'Software Development' : 'Creative Media');
    const message = `Hello Great Light Group,\n\nMy name is ${name || '[Your Name]'}.\nI am inquiring regarding: *${selectedService}* (${discipline === 'software' ? 'Technology' : 'Media'}).\n\nProject brief:\n${details || 'I would like to discuss a new project with you.'}\n\nEmail: ${email || '[Your Email]'}`;
    return `https://wa.me/233594273358?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-glg-bg text-glg-text-primary scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-3">
            Direct Commercial Collaboration
          </div>
          <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight mb-4">
            Initiate a Project with <br />
            <span className="font-normal italic text-glg-gold">
              Great Light Group.
            </span>
          </h2>
          <p className="text-sm text-glg-text-secondary leading-relaxed">
            Whether you require high-concurrency software engineering or cinematic creative production, our team responds within 24 hours with transparent scoping and technical recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="md:col-span-8 glass-panel rounded-2xl p-7 sm:p-10 shadow-editorial">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-glg-emerald/20 text-glg-emerald mx-auto flex items-center justify-center border border-glg-emerald/40 shadow-emerald-glow">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Enquiry Received
                </h3>
                <p className="text-xs text-glg-text-secondary max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Great Light Group. Our principal engineer will review your brief and follow up via email within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold text-glg-gold underline hover:text-glg-gold-bright"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Discipline Selector Toggle */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-gold mb-2 font-semibold">
                    Inquiry Discipline
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setDiscipline('software');
                        setService('');
                      }}
                      className={`py-3 px-4 rounded-xl text-xs font-mono font-bold transition-all ${
                        discipline === 'software'
                          ? 'bg-glg-emerald text-black shadow-emerald-glow'
                          : 'bg-white/5 text-glg-text-secondary hover:text-white border border-white/10'
                      }`}
                    >
                      Technology &amp; Software
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDiscipline('media');
                        setService('');
                      }}
                      className={`py-3 px-4 rounded-xl text-xs font-mono font-bold transition-all ${
                        discipline === 'media'
                          ? 'bg-glg-gold text-black shadow-gold-glow'
                          : 'bg-white/5 text-glg-text-secondary hover:text-white border border-white/10'
                      }`}
                    >
                      Media &amp; Creative
                    </button>
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel Boateng"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-gold focus:ring-1 focus:ring-glg-gold"
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
                      placeholder="e.g. samuel@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-gold focus:ring-1 focus:ring-glg-gold"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                    Specific Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/70 border border-white/15 text-xs text-white focus:outline-none focus:border-glg-gold focus:ring-1 focus:ring-glg-gold"
                  >
                    <option value="">Select a specific capability...</option>
                    {currentServices.map((s) => (
                      <option key={s.number} value={s.title}>
                        {s.number} — {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Scope & Brief */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-text-muted mb-1 font-semibold">
                    Project Scope / Brief
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your operational goals, desired timeline, or key deliverables..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-glg-text-muted focus:outline-none focus:border-glg-gold focus:ring-1 focus:ring-glg-gold resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shadow-gold-glow hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Enquiry</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-[#25D366] text-black hover:bg-[#20ba5a] transition-all shadow-md hover:scale-[1.02]"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp (0594273358)</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Contact Direct Details Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="glass-panel text-glg-text-primary rounded-2xl p-7 shadow-editorial space-y-6 border border-glg-gold/30">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-glg-gold font-bold block mb-1">
                  Direct Inquiries
                </span>
                <h4 className="font-serif text-xl font-bold text-white">
                  Great Light Group
                </h4>
                <p className="text-xs text-glg-gold-champagne font-serif italic mt-1">
                  &ldquo;{BRAND_DATA.motto}&rdquo;
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-glg-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-glg-text-muted text-[10px] uppercase font-mono">
                      Public Email
                    </span>
                    <a
                      href={`mailto:${BRAND_DATA.email}`}
                      className="text-white hover:text-glg-gold transition-colors break-all"
                    >
                      {BRAND_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-glg-emerald shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-glg-text-muted text-[10px] uppercase font-mono">
                      Direct WhatsApp
                    </span>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-glg-emerald transition-colors"
                    >
                      0594273358 (+233594273358)
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-glg-text-secondary leading-relaxed">
                Response SLA: Every enquiry receives an initial technical scope assessment within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
