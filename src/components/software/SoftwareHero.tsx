'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowDown, Code2, Cpu, ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

export default function SoftwareHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
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
          titleRef.current?.querySelectorAll('.software-hero-line') || [],
          { opacity: 0, y: 70, rotationX: 25 },
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
          ctaRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=0.5'
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-glg-gold/15"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow & Division Motto */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-glg-emerald-dark/40 border border-glg-emerald/30 text-glg-emerald text-xs font-mono font-semibold uppercase tracking-wider shadow-emerald-glow">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technology &amp; Software Division</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glg-gold/10 border border-glg-gold/30 text-glg-gold text-xs font-serif italic tracking-wide">
            <span>&ldquo;{BRAND_DATA.motto}&rdquo;</span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-5xl mb-10">
          <h1
            ref={titleRef}
            className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.94] mb-6"
          >
            <span className="software-hero-line block">Engineered Rigor.</span>
            <span className="software-hero-line block text-transparent bg-clip-text bg-gradient-to-r from-glg-emerald via-glg-gold to-glg-emerald-accent italic font-normal">
              Deterministic Scale.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="clamp-body text-glg-text-secondary max-w-2xl leading-relaxed"
          >
            We build software with mathematical rigor. From high-concurrency Go exchange ledgers and full-stack Next.js web applications to cross-platform mobile readers and grounded AI engines.
          </p>
        </div>

        {/* Action Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all shadow-emerald-glow hover:scale-105"
          >
            <Cpu className="w-4 h-4" />
            <span>Explore Software Projects</span>
          </a>

          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-glg-emerald/40 transition-all"
          >
            <Terminal className="w-4 h-4 text-glg-emerald" />
            <span>Inspect Tech Stack</span>
          </a>

          <Link
            href="/software/services"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-mono text-glg-gold hover:text-white transition-colors"
          >
            <span>View 12 Core Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Live Credibility Bar */}
        <div
          ref={statsRef}
          className="mt-16 pt-8 border-t border-glg-gold/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-glg-text-muted"
        >
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-glg-emerald mb-1">
              Go 1.25
            </div>
            <div className="text-[10px] uppercase tracking-wider">Production Ledger Engine</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              Next.js 14/15
            </div>
            <div className="text-[10px] uppercase tracking-wider">App Router Architecture</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-glg-gold mb-1">
              PostgreSQL 16
            </div>
            <div className="text-[10px] uppercase tracking-wider">ACID Compliant Ledgers</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              12 Services
            </div>
            <div className="text-[10px] uppercase tracking-wider">Full-Stack Capabilities</div>
          </div>
        </div>
      </div>
    </section>
  );
}
