'use client';

import { useState } from 'react';
import { SOFTWARE_SERVICES, MEDIA_SERVICES, BRAND_DATA } from '@/data/portfolioData';
import { Code2, Film, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'software' | 'media'>('software');

  return (
    <section id="services" className="py-24 md:py-36 bg-glg-bg text-glg-text-primary border-b border-glg-gold/15 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3">
              Capabilities &amp; Verified Deliverables
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Dual-Discipline <br />
              <span className="font-normal italic text-glg-gold">
                Service Capabilities.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            Delivering transparent, measurable outcomes. No unsupported claims; every service is backed by verified engineering workflows and cinematic craftsmanship.
          </p>
        </div>

        {/* Discipline Tab Switcher */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 mb-12 pb-3 border-b border-glg-gold/15">
          <button
            onClick={() => setActiveTab('software')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
              activeTab === 'software'
                ? 'bg-glg-emerald text-black shadow-emerald-glow'
                : 'bg-white/5 text-glg-text-muted border border-white/10 hover:text-white'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Software Services (12 Offerings)</span>
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold transition-all ${
              activeTab === 'media'
                ? 'bg-glg-gold text-black shadow-gold-glow'
                : 'bg-white/5 text-glg-text-muted border border-white/10 hover:text-white'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Media &amp; Creative (4 Offerings)</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(activeTab === 'software' ? SOFTWARE_SERVICES : MEDIA_SERVICES).map((service) => (
            <div
              key={service.number}
              className="rounded-2xl glass-panel p-7 sm:p-8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-gold/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-glg-gold bg-glg-gold/10 border border-glg-gold/30 px-3 py-1 rounded-md">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-glg-text-muted">
                    {service.category === 'software' ? 'Engineering' : 'Creative'}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-glg-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-glg-gold mb-2 font-semibold">
                  Core Deliverables
                </div>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-glg-text-secondary">
                      <Check className="w-3.5 h-3.5 text-glg-emerald shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl glass-panel border border-glg-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-gold-glow">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-glg-gold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Engagements</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white mb-1">
              Have an urgent technical or creative deadline?
            </h4>
            <p className="text-xs text-glg-text-muted">
              We provide architectural assessments for software and concept treatments for media.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shrink-0 shadow-gold-glow hover:scale-105"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </section>
  );
}
