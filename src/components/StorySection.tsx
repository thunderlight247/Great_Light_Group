'use client';

import Image from 'next/image';
import { Github, Mail, ShieldCheck, Sparkles, Terminal } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-36 bg-glg-bg text-glg-text-primary border-b border-glg-gold/15 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Portrait & Brand Mark */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Profile Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-glg-gold/30 shadow-2xl bg-black">
                <Image
                  src={BRAND_DATA.founder.image}
                  alt={BRAND_DATA.founder.name}
                  fill
                  className="object-cover object-top opacity-90"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glg-bg via-transparent to-transparent opacity-90" />

                {/* Overlaid Founder Name & Role */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-[11px] uppercase font-mono tracking-widest text-glg-gold mb-1 font-bold">
                    {BRAND_DATA.founder.role}
                  </div>
                  <div className="font-serif text-2xl font-bold">
                    {BRAND_DATA.name}
                  </div>
                </div>
              </div>

              {/* Decorative Brand Logo Inset */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl overflow-hidden border-2 border-glg-gold/50 shadow-gold-glow bg-glg-bg-elevated p-1.5 hidden sm:block">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={BRAND_DATA.logo}
                    alt={BRAND_DATA.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-3">
                Ethos &amp; Leadership
              </div>
              <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
                Two Disciplines. <br />
                <span className="font-normal italic text-glg-emerald-accent">
                  One Unified Mission.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm text-glg-text-secondary leading-relaxed">
              <p>
                Great Light Group was established on the conviction that high-value enterprises require both <strong className="font-semibold text-white">bulletproof software infrastructure</strong> and <strong className="font-semibold text-white">commanding visual narratives</strong> to command marketplace authority.
              </p>
              <p>
                Rather than treating technology and media as disparate pursuits, we approach both through the lens of relentless craftsmanship:
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-xl glass-panel">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-white mb-2">
                  <ShieldCheck className="w-5 h-5 text-glg-emerald" />
                  <span>Engineered Rigor</span>
                </div>
                <p className="text-xs text-glg-text-muted leading-relaxed">
                  Clean state management, strict transactional safety, sub-second TTFB, and interfaces that load instantly across all devices.
                </p>
              </div>

              <div className="p-5 rounded-xl glass-panel">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-white mb-2">
                  <Sparkles className="w-5 h-5 text-glg-gold" />
                  <span>Cinematic Intent</span>
                </div>
                <p className="text-xs text-glg-text-muted leading-relaxed">
                  Art-directed lighting, deliberate camera movement, and nuanced color grading that honors real stories and organic beauty.
                </p>
              </div>
            </div>

            {/* Public Links & Motto Quote */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="font-serif italic text-sm text-glg-gold font-medium">
                &ldquo;{BRAND_DATA.motto}&rdquo;
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={BRAND_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-white/5 text-glg-text-secondary hover:text-white transition-colors border border-white/10"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>thunderlight247</span>
                </a>
                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-4 py-2 rounded-lg bg-white/5 text-glg-text-secondary hover:text-glg-gold transition-colors border border-white/10"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{BRAND_DATA.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
