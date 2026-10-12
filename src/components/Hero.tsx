'use client';

import { ArrowRight, Code2, Film, Sparkles, Terminal, Camera, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BRAND_DATA } from '@/data/portfolioData';

interface HeroProps {
  onSelectDiscipline: (discipline: 'all' | 'software' | 'media') => void;
}

export default function Hero({ onSelectDiscipline }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-glg-ink/5">
      {/* Subtle architectural grid lines in background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#15251d_1px,transparent_1px),linear-gradient(to_bottom,#15251d_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Motto */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glg-green/10 border border-glg-green/20 text-glg-green text-xs font-semibold uppercase tracking-eyebrow">
            <span className="w-2 h-2 rounded-full bg-glg-green animate-pulse" />
            <span>Dual-Discipline Studio</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-glg-gold/15 border border-glg-gold/30 text-glg-ink text-xs font-serif italic">
            <span>&ldquo;{BRAND_DATA.motto}&rdquo;</span>
          </div>
        </div>

        {/* Confident Typographic Headline */}
        <div className="max-w-4xl mb-8">
          <h1 className="clamp-h1 font-serif font-bold text-glg-ink tracking-tight mb-6">
            Two Disciplines. <br />
            <span className="text-glg-green italic font-normal">One Considered</span> Standard.
          </h1>
          <p className="clamp-body text-glg-ink/75 max-w-2xl leading-relaxed">
            Great Light Group operates at the convergence of <strong className="font-semibold text-glg-ink">resilient software engineering</strong> and <strong className="font-semibold text-glg-ink">cinematic visual craft</strong>. We build systems that perform under load and produce imagery with editorial conviction.
          </p>
        </div>

        {/* Primary Interactive Discipline Fork (Visitor Choice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {/* Card 1: Software & Engineering */}
          <div
            onClick={() => onSelectDiscipline('software')}
            className="group relative cursor-pointer rounded-2xl bg-white border border-glg-ink/10 p-6 md:p-8 shadow-editorial transition-all duration-300 hover:shadow-editorial-hover hover:border-glg-green/40 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-glg-green/10 text-glg-green flex items-center justify-center transition-colors group-hover:bg-glg-green group-hover:text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-glg-muted bg-glg-paper px-3 py-1 rounded-full border border-glg-ink/5">
                Full-Stack & Systems
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-glg-ink mb-2 group-hover:text-glg-green transition-colors">
              Technology & Software
            </h3>
            <p className="text-sm text-glg-ink/70 leading-relaxed mb-6">
              Production web applications, high-concurrency financial backends, mobile booking flows, and grounded AI study engines.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                Next.js 15
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                Go 1.24
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                React 19
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                PostgreSQL
              </span>
            </div>

            <div className="flex items-center text-xs font-semibold text-glg-green uppercase tracking-wider gap-2">
              <span>Inspect Software Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          {/* Card 2: Media & Creative */}
          <div
            onClick={() => onSelectDiscipline('media')}
            className="group relative cursor-pointer rounded-2xl bg-white border border-glg-ink/10 p-6 md:p-8 shadow-editorial transition-all duration-300 hover:shadow-editorial-hover hover:border-glg-gold/60 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-glg-gold/20 text-glg-gold-dark flex items-center justify-center transition-colors group-hover:bg-glg-gold group-hover:text-glg-ink">
                <Film className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-mono tracking-wider text-glg-muted bg-glg-paper px-3 py-1 rounded-full border border-glg-ink/5">
                Film & Photography
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-glg-ink mb-2 group-hover:text-glg-gold-dark transition-colors">
              Media & Creative
            </h3>
            <p className="text-sm text-glg-ink/70 leading-relaxed mb-6">
              Cinematic brand storytelling, high-fashion loc & hair portraiture, precision post-production grading, and typographic design.
            </p>

            <div className="flex flex-wrap gap-1.5 mb-6">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                Cinematography
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                Editorial Stills
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                Color Grading
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/80 border border-glg-ink/5">
                Posters
              </span>
            </div>

            <div className="flex items-center text-xs font-semibold text-glg-gold-dark uppercase tracking-wider gap-2">
              <span>View Media Exhibition</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-12 pt-8 border-t border-glg-ink/10 flex flex-wrap items-center justify-between gap-6 text-xs text-glg-muted">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-glg-green" />
            <span>12 Verified Technology Services</span>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-glg-gold-dark" />
            <span>Original Client Media Assets</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-glg-ink" />
            <span>Clean Architecture & Public Repositories</span>
          </div>
        </div>
      </div>
    </section>
  );
}
