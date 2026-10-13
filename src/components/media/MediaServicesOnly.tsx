'use client';

import Link from 'next/link';
import { Film, Camera, Palette, Check, ArrowRight, Sparkles } from 'lucide-react';
import { MEDIA_SERVICES } from '@/data/portfolioData';

export default function MediaServicesOnly() {
  return (
    <section id="services" className="py-24 md:py-36 relative border-b border-glg-gold/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Commercial Deliverables &amp; Studio Capabilities</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Media &amp; Creative <br />
              <span className="font-normal italic text-glg-gold">
                Service Capabilities.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            From 4K DCI camera packages and cinematic color grading to editorial lookbooks and typographic brand systems.
          </p>
        </div>

        {/* 4 Creative Media Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MEDIA_SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-3xl glass-panel p-8 sm:p-10 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-gold/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-glg-gold bg-glg-gold/15 border border-glg-gold/30 px-3.5 py-1.5 rounded-lg shadow-gold-glow">
                    Service {service.number}
                  </span>
                  <span className="text-[11px] uppercase font-mono tracking-wider text-glg-text-muted">
                    Creative Production
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-glg-gold mb-3 font-semibold">
                  Standard Production Deliverables
                </div>
                <div className="space-y-2.5 pt-3 border-t border-white/10">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-glg-text-secondary">
                      <Check className="w-3.5 h-3.5 text-glg-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-glg-gold hover:text-white transition-colors"
                  >
                    <span>Enquire for this service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl glass-panel border border-glg-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-gold-glow">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-glg-gold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Production Consultation</span>
            </div>
            <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
              Planning a commercial shoot or brand campaign?
            </h4>
            <p className="text-xs text-glg-text-muted">
              We provide treatment treatments, equipment specs, and scheduling within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shrink-0 shadow-gold-glow hover:scale-105"
          >
            Book Production Session
          </a>
        </div>
      </div>
    </section>
  );
}
