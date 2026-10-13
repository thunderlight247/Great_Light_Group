'use client';

import Link from 'next/link';
import { Code2, Check, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { SOFTWARE_SERVICES } from '@/data/portfolioData';

export default function SoftwareServicesOnly() {
  return (
    <section id="services" className="py-24 md:py-36 relative border-b border-glg-gold/15 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Full-Stack Engineering &amp; Architecture Capabilities</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              12 Software Services <br />
              <span className="font-normal italic text-glg-gold">
                Engineered for Scale.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            Delivering transparent, measurable engineering outcomes. No unsupported claims; every service is backed by production codebases and automated CI/CD pipelines.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOFTWARE_SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-2xl glass-panel p-7 sm:p-8 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-emerald/50 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs font-bold text-glg-emerald bg-glg-emerald/15 border border-glg-emerald/30 px-3 py-1 rounded-md shadow-emerald-glow">
                    {service.number}
                  </span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-glg-text-muted">
                    Software Engineering
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white mb-3 group-hover:text-glg-emerald transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-glg-text-secondary leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-glg-gold mb-2 font-semibold">
                  Key Deliverables
                </div>
                <div className="space-y-2 pt-2 border-t border-white/10">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-glg-text-secondary">
                      <Check className="w-3.5 h-3.5 text-glg-emerald shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-glg-emerald hover:text-white transition-colors"
                  >
                    <span>Request Scoping</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
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
              <span>Tailored Technical Architecture</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white mb-1">
              Have an urgent engineering deadline or bespoke architecture requirement?
            </h4>
            <p className="text-xs text-glg-text-muted">
              We provide architectural assessments, data model audits, and scoped quotes within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all shrink-0 shadow-emerald-glow hover:scale-105"
          >
            Initiate Architecture Review
          </a>
        </div>
      </div>
    </section>
  );
}
