'use client';

import { useState } from 'react';
import { Send, MessageSquare, CheckCircle, Mail, Phone, ArrowUpRight, Film, Camera } from 'lucide-react';
import { BRAND_DATA, MEDIA_SERVICES } from '@/data/portfolioData';

export default function MediaEnquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Cinematography & Videography');
  const [shootDate, setShootDate] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const message = `Hello Great Light Group (Creative Division),\n\nMy name is ${name || '[Your Name]'}.\nI would like to book a creative production for: *${service}*.\nTarget Date/Timeline: ${shootDate || 'Flexible / To Be Discussed'}.\n\nBrief:\n${details || 'I would like to discuss creative direction and rates.'}\n\nEmail: ${email || '[Your Email]'}\nPhone: ${phone || '[Your Phone]'}`;
    return `https://wa.me/233594273358?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-eyebrow text-[#e8d5b5] font-semibold mb-3 flex items-center justify-center gap-2">
            <Film className="w-4 h-4 text-[#e8d5b5]" />
            <span>Creative Commissioning &amp; Booking</span>
          </div>
          <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight mb-4">
            Commission a Production with <br />
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8d5b5] via-[#f5e8d2] to-[#b89758]">
              Great Light Creative.
            </span>
          </h2>
          <p className="text-sm text-[#d4c5b9] leading-relaxed">
            Whether you require an executive commercial shoot, an editorial lookbook, or precision color grading, our creative director responds within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Booking Form Card */}
          <div className="md:col-span-8 bg-[#131017] rounded-3xl p-7 sm:p-10 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)] border border-[#e8d5b5]/20">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#e8d5b5]/20 text-[#e8d5b5] mx-auto flex items-center justify-center border border-[#e8d5b5]/40 shadow-[0_0_20px_rgba(232,213,181,0.25)]">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Production Brief Received
                </h3>
                <p className="text-xs text-[#d4c5b9] max-w-sm mx-auto leading-relaxed">
                  Thank you for commissioning Great Light Creative. Our production lead will review your treatment and schedule a concept review within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold text-[#e8d5b5] underline hover:text-white"
                  >
                    Submit another brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#e8d5b5] mb-2 font-semibold">
                    Select Creative Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs text-white focus:outline-none focus:border-[#e8d5b5] focus:ring-1 focus:ring-[#e8d5b5]"
                  >
                    {MEDIA_SERVICES.map((s) => (
                      <option key={s.number} value={s.title} className="bg-black text-white">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a39ea8] mb-1 font-semibold">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kwesi Mensah"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-[#a39ea8] focus:outline-none focus:border-[#e8d5b5] focus:ring-1 focus:ring-[#e8d5b5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a39ea8] mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. kwesi@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-[#a39ea8] focus:outline-none focus:border-[#e8d5b5] focus:ring-1 focus:ring-[#e8d5b5]"
                    />
                  </div>
                </div>

                {/* Phone & Target Shoot Date Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a39ea8] mb-1 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +233 59 427 3358"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-[#a39ea8] focus:outline-none focus:border-[#e8d5b5] focus:ring-1 focus:ring-[#e8d5b5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#a39ea8] mb-1 font-semibold">
                      Target Production Date
                    </label>
                    <input
                      type="text"
                      value={shootDate}
                      onChange={(e) => setShootDate(e.target.value)}
                      placeholder="e.g. November 2026 / Next Month"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-[#a39ea8] focus:outline-none focus:border-[#e8d5b5] focus:ring-1 focus:ring-[#e8d5b5]"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#a39ea8] mb-1 font-semibold">
                    Production Treatment &amp; Creative Scope
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your visual concept, location, expected deliverables (e.g. 60s commercial + 10 stills), and references..."
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder:text-[#a39ea8] focus:outline-none focus:border-[#e8d5b5] focus:ring-1 focus:ring-[#e8d5b5] resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#e8d5b5] text-[#0c0a0e] hover:bg-[#f5e8d2] transition-all shadow-[0_0_20px_rgba(232,213,181,0.25)] hover:scale-105"
                  >
                    <span>Submit Creative Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-all border border-white/15"
                  >
                    <MessageSquare className="w-4 h-4 text-[#e8d5b5]" />
                    <span>Instant WhatsApp (0594273358)</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Creative Contact Info & Rates Notice */}
          <div className="md:col-span-4 space-y-6">
            {/* Direct Line Card */}
            <div className="bg-[#131017] rounded-3xl p-6 sm:p-7 border border-[#e8d5b5]/20 space-y-4 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)]">
              <div className="text-xs uppercase font-mono tracking-wider text-[#e8d5b5] font-bold">
                Direct Studio Line
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/233594273358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-[#d4c5b9] hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#e8d5b5] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white font-mono">+233 59 427 3358</div>
                    <div className="text-[10px] text-[#a39ea8]">Direct WhatsApp &amp; Calls</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="flex items-start gap-3 text-xs text-[#d4c5b9] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#e8d5b5] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white font-mono break-all">{BRAND_DATA.email}</div>
                    <div className="text-[10px] text-[#a39ea8]">Official Creative Enquiries</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Production Standard Guarantee */}
            <div className="bg-[#131017] rounded-3xl p-6 sm:p-7 border border-white/10 space-y-3 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)]">
              <div className="text-xs uppercase font-mono tracking-wider text-white font-bold">
                The Creative Guarantee
              </div>
              <p className="text-xs text-[#a39ea8] leading-relaxed">
                Every project includes calibrated color management, licensed music clearances for commercial delivery, and high-bitrate master exports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
