'use client';

import Image from 'next/image';
import { Github, Mail, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function StorySection() {
  return (
    <section id="story" className="py-24 md:py-32 bg-white border-b border-glg-ink/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Founder Portrait & Brand Mark */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Profile Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-glg-ink/10 shadow-editorial bg-glg-paper">
                <Image
                  src={BRAND_DATA.founder.image}
                  alt={BRAND_DATA.founder.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glg-ink/70 via-transparent to-transparent" />

                {/* Overlaid Founder Name & Role */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="text-xs uppercase font-mono tracking-widest text-glg-gold-light mb-1">
                    {BRAND_DATA.founder.role}
                  </div>
                  <div className="font-serif text-2xl font-bold">
                    {BRAND_DATA.name}
                  </div>
                </div>
              </div>

              {/* Decorative Brand Logo Inset */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white p-1 hidden sm:block">
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
              <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-green font-semibold mb-2">
                Ethos & Leadership
              </div>
              <h2 className="clamp-h2 font-serif font-bold text-glg-ink tracking-tight">
                Two Disciplines. <br />
                <span className="font-normal italic text-glg-green">One Cohesive Mission.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm text-glg-ink/80 leading-relaxed">
              <p>
                Great Light Group was established on the conviction that modern enterprises require both <strong className="font-semibold text-glg-ink">bulletproof software infrastructure</strong> and <strong className="font-semibold text-glg-ink">commanding visual narratives</strong> to earn trust.
              </p>
              <p>
                Rather than treating technology and media as disparate pursuits, we approach both through the lens of craftsmanship:
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-glg-paper border border-glg-ink/5">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-glg-ink mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-glg-green" />
                  <span>Engineered Rigor</span>
                </div>
                <p className="text-xs text-glg-ink/70 leading-relaxed">
                  Clean state management, strict transactional safety, and responsive interfaces that load instantly across all devices.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-glg-paper border border-glg-ink/5">
                <div className="flex items-center gap-2 font-serif font-bold text-base text-glg-ink mb-1.5">
                  <Sparkles className="w-4 h-4 text-glg-gold-dark" />
                  <span>Cinematic Intent</span>
                </div>
                <p className="text-xs text-glg-ink/70 leading-relaxed">
                  Art-directed lighting, deliberate camera movement, and nuanced color grading that honors real stories and organic beauty.
                </p>
              </div>
            </div>

            {/* Public Links & Motto Quote */}
            <div className="pt-6 border-t border-glg-ink/10 flex flex-wrap items-center justify-between gap-4">
              <div className="font-serif italic text-sm text-glg-gold-dark">
                &ldquo;{BRAND_DATA.motto}&rdquo;
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={BRAND_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-glg-paper text-glg-ink hover:text-glg-green transition-colors border border-glg-ink/5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub: thunderlight247</span>
                </a>
                <a
                  href={`mailto:${BRAND_DATA.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-glg-paper text-glg-ink hover:text-glg-green transition-colors border border-glg-ink/5"
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
