'use client';

import { useState } from 'react';
import { SOFTWARE_SERVICES, MEDIA_SERVICES, BRAND_DATA } from '@/data/portfolioData';
import { Code2, Film, Check, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'software' | 'media'>('software');

  return (
    <section id="services" className="py-24 md:py-32 bg-glg-paper border-b border-glg-ink/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-green font-semibold mb-2">
              Capabilities & Offerings
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-glg-ink tracking-tight">
              Dual-Discipline <br />
              <span className="font-normal italic text-glg-green">Service Capabilities.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-ink/70 leading-relaxed">
            Delivering transparent, measurable outcomes. No unsupported claims; every service is backed by verified engineering workflows and creative craftsmanship.
          </p>
        </div>

        {/* Discipline Tab Switcher */}
        <div className="flex items-center gap-3 mb-10 pb-2 border-b border-glg-ink/10">
          <button
            onClick={() => setActiveTab('software')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'software'
                ? 'bg-glg-green text-white shadow-sm'
                : 'bg-white text-glg-ink/70 border border-glg-ink/10 hover:text-glg-ink'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Software Services (12 Offerings)</span>
          </button>
          <button
            onClick={() => setActiveTab('media')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === 'media'
                ? 'bg-glg-gold text-glg-ink shadow-sm'
                : 'bg-white text-glg-ink/70 border border-glg-ink/10 hover:text-glg-ink'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Media & Creative (4 Offerings)</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'software' ? SOFTWARE_SERVICES : MEDIA_SERVICES).map((service) => (
            <div
              key={service.number}
              className="rounded-2xl bg-white border border-glg-ink/10 p-6 sm:p-7 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-green/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-glg-green bg-glg-paper px-2.5 py-1 rounded">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-glg-muted">
                    {service.category === 'software' ? 'Engineering' : 'Creative'}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-glg-ink mb-2.5">
                  {service.title}
                </h3>
                <p className="text-xs text-glg-ink/70 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-glg-muted mb-2 font-semibold">
                  Core Deliverables
                </div>
                <div className="space-y-1.5 pt-2 border-t border-glg-ink/5">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-glg-ink/80">
                      <Check className="w-3.5 h-3.5 text-glg-green shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-8 rounded-2xl bg-glg-ink text-glg-paper flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl font-bold text-white mb-1">
              Have a tailored project requirement?
            </h4>
            <p className="text-xs text-glg-paper/70">
              We provide architectural assessments for software and concept treatments for media.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-glg-gold text-glg-ink hover:bg-glg-gold-light transition-colors shrink-0 shadow-sm"
          >
            Request Quotation
          </a>
        </div>
      </div>
    </section>
  );
}
