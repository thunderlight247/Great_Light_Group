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
    return `https://wa.me/233256287121?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase font-mono tracking-eyebrow text-[#9e7526] font-semibold mb-3 flex items-center justify-center gap-2">
            <Film className="w-4 h-4 text-[#b89047]" />
            <span>Creative Commissioning &amp; Booking</span>
          </div>
          <h2 className="clamp-h2 font-serif font-bold text-[#121115] tracking-tight mb-4">
            Commission a Production with <br />
            <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#b89047] via-[#c59b3f] to-[#9e7526]">
              Great Light Creative.
            </span>
          </h2>
          <p className="text-sm text-[#4b4754] leading-relaxed font-sans">
            Whether you require an executive commercial shoot, an editorial lookbook, or precision color grading, our creative director responds within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Booking Form Card */}
          <div className="md:col-span-8 bg-white rounded-3xl p-7 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-[#e8decb]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#b89047]/10 text-[#b89047] mx-auto flex items-center justify-center border border-[#b89047]/30 shadow-sm">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#121115]">
                  Production Brief Received
                </h3>
                <p className="text-xs text-[#4b4754] max-w-sm mx-auto leading-relaxed">
                  Thank you for commissioning Great Light Creative. Our production lead will review your treatment and schedule a concept review within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono font-bold text-[#b89047] underline hover:text-[#121115]"
                  >
                    Submit another brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#121115] mb-2 font-semibold">
                    Select Creative Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8decb] text-xs text-[#121115] focus:outline-none focus:border-[#b89047] focus:ring-1 focus:ring-[#b89047]"
                  >
                    {MEDIA_SERVICES.map((s) => (
                      <option key={s.number} value={s.title} className="bg-white text-[#121115]">
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#4b4754] mb-1 font-semibold">
                      Your Name / Brand *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kwesi Mensah"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8decb] text-xs text-[#121115] placeholder:text-[#787280] focus:outline-none focus:border-[#b89047] focus:ring-1 focus:ring-[#b89047]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#4b4754] mb-1 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. kwesi@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8decb] text-xs text-[#121115] placeholder:text-[#787280] focus:outline-none focus:border-[#b89047] focus:ring-1 focus:ring-[#b89047]"
                    />
                  </div>
                </div>

                {/* Phone & Target Shoot Date Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#4b4754] mb-1 font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +233 25 628 7121"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8decb] text-xs text-[#121115] placeholder:text-[#787280] focus:outline-none focus:border-[#b89047] focus:ring-1 focus:ring-[#b89047]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#4b4754] mb-1 font-semibold">
                      Target Production Date
                    </label>
                    <input
                      type="text"
                      value={shootDate}
                      onChange={(e) => setShootDate(e.target.value)}
                      placeholder="e.g. November 2026 / Next Month"
                      className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8decb] text-xs text-[#121115] placeholder:text-[#787280] focus:outline-none focus:border-[#b89047] focus:ring-1 focus:ring-[#b89047]"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#4b4754] mb-1 font-semibold">
                    Production Treatment &amp; Creative Scope
                  </label>
                  <textarea
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Describe your visual concept, location, expected deliverables (e.g. 60s commercial + 10 stills), and references..."
                    className="w-full px-4 py-3 rounded-xl bg-[#faf8f5] border border-[#e8decb] text-xs text-[#121115] placeholder:text-[#787280] focus:outline-none focus:border-[#b89047] focus:ring-1 focus:ring-[#b89047] resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#b89047] text-white hover:bg-[#9e7526] transition-all shadow-[0_10px_25px_rgba(184,144,71,0.25)] hover:scale-105"
                  >
                    <span>Submit Creative Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#faf8f5] hover:bg-[#121115] hover:text-white text-[#121115] transition-all border border-[#e8decb]"
                  >
                    <MessageSquare className="w-4 h-4 text-[#b89047]" />
                    <span>Instant WhatsApp (0256287121)</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Creative Contact Info & Rates Notice */}
          <div className="md:col-span-4 space-y-6">
            {/* Direct Line Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8decb] space-y-4 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="text-xs uppercase font-mono tracking-wider text-[#9e7526] font-bold">
                Direct Studio Line
              </div>
              <div className="space-y-3">
                <a
                  href="https://wa.me/233256287121"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-xs text-[#4b4754] hover:text-[#121115] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#b89047] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#121115] font-mono">+233 25 628 7121</div>
                    <div className="text-[10px] text-[#787280]">Direct WhatsApp &amp; Calls</div>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="flex items-start gap-3 text-xs text-[#4b4754] hover:text-[#121115] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#b89047] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#121115] font-mono break-all">{BRAND_DATA.email}</div>
                    <div className="text-[10px] text-[#787280]">Official Creative Enquiries</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Production Standard Guarantee */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e8decb] space-y-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="text-xs uppercase font-mono tracking-wider text-[#121115] font-bold">
                The Creative Guarantee
              </div>
              <p className="text-xs text-[#4b4754] leading-relaxed">
                Every project includes calibrated color management, licensed music clearances for commercial delivery, and high-bitrate master exports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
