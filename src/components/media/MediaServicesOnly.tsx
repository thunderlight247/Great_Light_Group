'use client';

import Link from 'next/link';
import { Film, Camera, Palette, Check, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import { MEDIA_SERVICES } from '@/data/portfolioData';

export default function MediaServicesOnly() {
  const serviceIcons = [Film, Camera, Palette, Sparkles];

  return (
    <section id="services" className="py-24 md:py-36 relative border-b border-[#e8decb] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-[#9e7526] font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#b89047]" />
              <span>Commercial Deliverables &amp; Studio Capabilities</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-[#121115] tracking-tight leading-[1.05]">
              Creative Production &amp; <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#b89047] via-[#c59b3f] to-[#9e7526]">
                Atelier Services.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4b4754] leading-relaxed font-sans">
            From 4K DCI camera packages and DaVinci Resolve color grading to high-fashion bridal lookbooks and sacred ceremony archiving.
          </p>
        </div>

        {/* 4 Creative Media Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA_SERVICES.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const whatsappServiceMessage = encodeURIComponent(
              `Hello Great Light Creative, I would like to inquire about booking: "${service.title}" (Service ${service.number}). Please share your availability and package details.`
            );

            return (
              <div
                key={service.number}
                className="group rounded-3xl p-8 sm:p-10 bg-white border border-[#e8decb] hover:border-[#b89047] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(184,144,71,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#9e7526] bg-[#b89047]/10 border border-[#b89047]/30 px-3.5 py-1.5 rounded-full">
                      PACKAGE {service.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#faf8f5] text-[#b89047] border border-[#e8decb] group-hover:bg-[#b89047] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#121115] mb-4 group-hover:text-[#b89047] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4b4754] leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9e7526] mb-3 font-semibold flex items-center gap-1.5">
                    <span>Standard Studio Deliverables</span>
                  </div>
                  <div className="space-y-2.5 pt-3 border-t border-[#e8decb]">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-[#4b4754]">
                        <Check className="w-3.5 h-3.5 text-[#b89047] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#e8decb]/60 flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9e7526] hover:text-[#121115] transition-colors"
                    >
                      <span>Commission Brief</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`https://wa.me/233594273358?text=${whatsappServiceMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#faf8f5] hover:bg-[#b89047] hover:text-white text-[#4b4754] text-[11px] font-mono transition-all border border-[#e8decb] hover:border-[#b89047]"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#b89047]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_15px_40px_rgba(184,144,71,0.08)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#9e7526] mb-1 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#b89047]" />
              <span>Direct Production Consultation</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#121115] mb-1">
              Planning a wedding, campaign, or event documentary?
            </h4>
            <p className="text-xs text-[#787280]">
              We provide treatments, equipment specs, and scheduling within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#b89047] text-white hover:bg-[#9e7526] transition-all shrink-0 shadow-[0_10px_25px_rgba(184,144,71,0.25)] hover:scale-105"
          >
            Book Production Session
          </a>
        </div>
      </div>
    </section>
  );
}
