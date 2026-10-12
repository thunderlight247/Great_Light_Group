'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code2, Film, Sparkles, Terminal, Camera, ShieldCheck, ChevronDown } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

interface HeroProps {
  onSelectDiscipline: (discipline: 'all' | 'software' | 'media') => void;
}

export default function Hero({ onSelectDiscipline }: HeroProps) {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }
      )
        .fromTo(
          titleRef.current?.querySelectorAll('.hero-line') || [],
          { opacity: 0, y: 70, rotationX: 30, transformOrigin: 'top center' },
          { opacity: 1, y: 0, rotationX: 0, duration: 1.1, stagger: 0.14 },
          '-=0.4'
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          cardsRef.current?.children || [],
          { opacity: 0, y: 50, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.0, stagger: 0.18, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );

      // Subtle ambient breathing float on cards
      gsap.to('.hero-float-1', {
        y: -6,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
      gsap.to('.hero-float-2', {
        y: 6,
        duration: 4.0,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      className="relative pt-36 pb-24 md:pt-44 md:pb-36 overflow-hidden border-b border-glg-gold/15"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Brand Motto Badge */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-glg-emerald-dark/30 border border-glg-emerald/30 text-glg-emerald text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-glg-emerald animate-ping" />
            <span>Dual-Discipline Practice</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glg-gold/10 border border-glg-gold/30 text-glg-gold text-xs font-serif italic tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>&ldquo;{BRAND_DATA.motto}&rdquo;</span>
          </div>
        </div>

        {/* Massive Confident Typographic Headline */}
        <div className="max-w-5xl mb-10">
          <h1
            ref={titleRef}
            className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.93] mb-6 perspective-1000"
          >
            <span className="hero-line block">Engineered Rigor.</span>
            <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-r from-glg-emerald via-glg-gold to-glg-gold-champagne italic font-normal">
              Cinematic Purity.
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="clamp-body text-glg-text-secondary max-w-2xl leading-relaxed"
          >
            Great Light Group unifies high-concurrency software engineering with bespoke cinematography and editorial photography. We engineer systems that endure and craft visuals that command immediate respect.
          </p>
        </div>

        {/* Primary Interactive Discipline Fork (Cards) */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {/* Card 1: Technology & Software */}
          <div
            onClick={() => onSelectDiscipline('software')}
            className="hero-float-1 group relative cursor-pointer rounded-2xl glass-panel p-6 sm:p-8 md:p-10 shadow-editorial transition-all duration-300 hover:shadow-editorial-hover hover:border-glg-emerald/50 hover:-translate-y-2"
          >
            {/* Top Tag & Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-glg-emerald-dark/40 border border-glg-emerald/40 text-glg-emerald flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-glg-emerald group-hover:text-black shadow-emerald-glow">
                <Code2 className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-glg-emerald bg-glg-emerald/10 px-3.5 py-1 rounded-full border border-glg-emerald/30">
                Full-Stack &amp; Systems
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-glg-emerald transition-colors">
              Technology &amp; Software
            </h3>
            <p className="text-sm text-glg-text-muted leading-relaxed mb-8">
              Production web applications, Go financial backends, mobile booking engines, and zero-hallucination AI study platforms.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                Go 1.25
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                Next.js 14/15
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                React 19
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                PostgreSQL
              </span>
            </div>

            <div className="flex items-center text-xs font-mono font-bold text-glg-emerald uppercase tracking-wider gap-2">
              <span>Explore Software Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </div>
          </div>

          {/* Card 2: Media & Creative */}
          <div
            onClick={() => onSelectDiscipline('media')}
            className="hero-float-2 group relative cursor-pointer rounded-2xl glass-panel p-6 sm:p-8 md:p-10 shadow-editorial transition-all duration-300 hover:shadow-editorial-hover hover:border-glg-gold/60 hover:-translate-y-2"
          >
            {/* Top Tag & Icon */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-glg-gold/20 border border-glg-gold/40 text-glg-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-glg-gold group-hover:text-black shadow-gold-glow">
                <Film className="w-7 h-7" />
              </div>
              <span className="text-[11px] uppercase font-mono tracking-wider text-glg-gold bg-glg-gold/10 px-3.5 py-1 rounded-full border border-glg-gold/30">
                Cinematography &amp; Stills
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white mb-3 group-hover:text-glg-gold transition-colors">
              Media &amp; Creative
            </h3>
            <p className="text-sm text-glg-text-muted leading-relaxed mb-8">
              Cinematic brand storytelling, high-fashion portraiture, precision color grading in DaVinci Resolve, and editorial typographic posters.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                4K Cinematography
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                Studio Stills
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                Color Grading
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10">
                Posters
              </span>
            </div>

            <div className="flex items-center text-xs font-mono font-bold text-glg-gold uppercase tracking-wider gap-2">
              <span>View Media Exhibition</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </div>
          </div>
        </div>

        {/* Live Credibility Bar */}
        <div
          ref={statsRef}
          className="mt-14 pt-8 border-t border-glg-gold/15 flex flex-wrap items-center justify-between gap-6 text-xs font-mono text-glg-text-muted"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-glg-emerald" />
            <span className="text-glg-text-secondary">12 Verified Software Offerings</span>
          </div>
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-glg-gold" />
            <span className="text-glg-text-secondary">4K Video Reels &amp; Editorial Stills</span>
          </div>
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-white" />
            <span className="text-glg-text-secondary">GitHub: thunderlight247 · johnseidu</span>
          </div>
        </div>
      </div>
    </section>
  );
}
