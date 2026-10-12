'use client';

import { useState } from 'react';
import { Send, MessageSquare, CheckCircle, Mail, Phone, ArrowUpRight } from 'lucide-react';
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
    return `https://wa.me/233248380011?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-glg-paper scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-green font-semibold mb-2">
            Initiate Collaboration
          </div>
          <h2 className="clamp-h2 font-serif font-bold text-glg-ink tracking-tight mb-4">
            Start a Project with <br />
            <span className="font-normal italic text-glg-green">Great Light Group.</span>
          </h2>
          <p className="text-sm text-glg-ink/75 leading-relaxed">
            Whether you require scalable software architecture or cinematic media production, we respond within 24 hours with clear timelines and technical recommendations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Form Card */}
          <div className="md:col-span-8 bg-white rounded-2xl border border-glg-ink/10 p-6 sm:p-10 shadow-editorial">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-glg-green/10 text-glg-green mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-glg-ink">
                  Thank you for reaching out.
                </h3>
                <p className="text-xs text-glg-ink/70 max-w-sm mx-auto leading-relaxed">
                  We have received your enquiry for Great Light Group. Our lead engineer will review your project details and follow up via email shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-glg-green underline hover:text-glg-green-light"
                  >
                    Submit another enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Discipline Selector Toggle */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-muted mb-2 font-semibold">
                    Inquiry Discipline
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setDiscipline('software');
                        setService('');
                      }}
                      className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                        discipline === 'software'
                          ? 'bg-glg-green text-white shadow-sm'
                          : 'bg-glg-paper text-glg-ink/70 hover:bg-glg-ink/5'
                      }`}
                    >
                      Technology & Software
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setDiscipline('media');
                        setService('');
                      }}
                      className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                        discipline === 'media'
                          ? 'bg-glg-gold text-glg-ink shadow-sm'
                          : 'bg-glg-paper text-glg-ink/70 hover:bg-glg-ink/5'
                      }`}
                    >
                      Media & Creative
                    </button>
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-muted mb-1 font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Samuel Boateng"
                      className="w-full px-4 py-2.5 rounded-lg border border-glg-ink/15 text-xs text-glg-ink placeholder:text-glg-muted focus:outline-none focus:ring-2 focus:ring-glg-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-glg-muted mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. samuel@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-glg-ink/15 text-xs text-glg-ink placeholder:text-glg-muted focus:outline-none focus:ring-2 focus:ring-glg-green"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-muted mb-1 font-semibold">
                    Specific Service Needed
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-glg-ink/15 text-xs text-glg-ink focus:outline-none focus:ring-2 focus:ring-glg-green bg-white"
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-glg-muted mb-1 font-semibold">
                    Project Scope / Brief
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your project goals, desired timeline, or key deliverables..."
                    className="w-full px-4 py-2.5 rounded-lg border border-glg-ink/15 text-xs text-glg-ink placeholder:text-glg-muted focus:outline-none focus:ring-2 focus:ring-glg-green resize-none"
                  />
                </div>

                {/* Form Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-glg-green text-white hover:bg-glg-green-light transition-all shadow-sm"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Project Enquiry</span>
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Contact Direct Details Sidebar */}
          <div className="md:col-span-4 space-y-6">
            <div className="bg-glg-ink text-glg-paper rounded-2xl p-6 sm:p-7 shadow-editorial space-y-6">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-glg-gold font-semibold block mb-1">
                  Direct Inquiries
                </span>
                <h4 className="font-serif text-lg font-bold text-white">
                  Great Light Group
                </h4>
                <p className="text-xs text-glg-paper/70 mt-1">
                  &ldquo;{BRAND_DATA.motto}&rdquo;
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-glg-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-glg-paper/60 text-[10px] uppercase font-mono">
                      Public Email
                    </span>
                    <a
                      href={`mailto:${BRAND_DATA.email}`}
                      className="text-white hover:text-glg-gold transition-colors font-mono break-all"
                    >
                      {BRAND_DATA.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-glg-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-glg-paper/60 text-[10px] uppercase font-mono">
                      WhatsApp Line
                    </span>
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-glg-gold transition-colors font-mono"
                    >
                      +233 24 838 0011
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-glg-paper/80 leading-relaxed">
                Response SLA: All proposals receive an engineering scope assessment within 24 hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
