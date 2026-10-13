'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import {
  Code2,
  Film,
  Sparkles,
  ArrowRight,
  Cpu,
  Camera,
  ShieldCheck,
  Terminal,
  ExternalLink,
  Phone,
  Mail,
  Github,
} from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

export default function GatewayPortal() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.8, y: -25 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'back.out(1.8)' }
      )
        .fromTo(
          titleRef.current?.querySelectorAll('.intro-line') || [],
          { opacity: 0, y: 40, rotationX: 25 },
          { opacity: 1, y: 0, rotationX: 0, duration: 0.9, stagger: 0.12 },
          '-=0.5'
        )
        .fromTo(
          cardsRef.current?.children || [],
          { opacity: 0, y: 60, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.18, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          footerRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-glg-bg text-glg-text-primary flex flex-col justify-between selection:bg-glg-gold selection:text-black overflow-x-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[45vw] h-[45vw] rounded-full bg-glg-emerald-dark/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[45vw] h-[45vw] rounded-full bg-glg-gold/15 blur-[160px] pointer-events-none" />

      {/* Top Header Bar */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-glg-gold/50 shadow-gold-glow">
            <Image
              src={BRAND_DATA.logo}
              alt={BRAND_DATA.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-base text-white tracking-tight">
              {BRAND_DATA.name}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-glg-gold font-bold">
              {BRAND_DATA.motto}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/233594273358"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold bg-white/5 text-glg-text-secondary hover:text-white border border-white/10 hover:border-glg-gold/40 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-glg-emerald animate-pulse" />
            <span>WhatsApp: 0594273358</span>
          </a>
        </div>
      </header>

      {/* Central Hero Gateway Section */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 my-auto">
        {/* Intro Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div
            ref={logoRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-glg-gold/10 border border-glg-gold/30 text-glg-gold text-xs font-mono font-semibold uppercase tracking-wider mb-6 shadow-gold-glow"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual-Discipline Commercial Studio</span>
          </div>

          <h1
            ref={titleRef}
            className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05] mb-5"
          >
            <span className="intro-line block">Two Disciplines.</span>
            <span className="intro-line block text-transparent bg-clip-text bg-gradient-to-r from-glg-emerald via-glg-gold to-glg-gold-champagne italic font-normal">
              One Uncompromising Standard.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-glg-text-secondary leading-relaxed max-w-2xl mx-auto">
            Great Light Group exists at the exact intersection of software engineering and cinematic visual art. Select a division below to enter its dedicated portfolio:
          </p>
        </div>

        {/* Dual Division Gateways (Side-by-Side Cards) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto"
        >
          {/* DIVISION 01: SOFTWARE & TECHNOLOGY */}
          <Link
            href="/software"
            className="group relative rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between border border-glg-emerald/30 hover:border-glg-emerald shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Top Emerald Ambient Gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-glg-emerald-glow/15 rounded-full blur-3xl pointer-events-none group-hover:bg-glg-emerald-glow/25 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-glg-emerald-dark/50 border border-glg-emerald/40 text-glg-emerald flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-glg-emerald group-hover:text-black shadow-emerald-glow">
                  <Code2 className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-glg-emerald bg-glg-emerald/10 border border-glg-emerald/30 px-3.5 py-1 rounded-full font-bold">
                  Division 01
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-glg-emerald font-semibold mb-2">
                Engineering &amp; Production Systems
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-glg-emerald transition-colors">
                Technology &amp; Software
              </h2>

              <p className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed mb-6">
                High-throughput Go financial exchange backends, full-stack Next.js web applications, cross-platform Flutter readers, and deterministic database architecture.
              </p>

              {/* Badges / Tech Proof */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-emerald/30">
                  Go 1.25 / PostgreSQL 16
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-emerald/30">
                  Next.js 14 / React 19
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-emerald/30">
                  Flutter &amp; Dart
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-emerald/30">
                  12 Core Offerings
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pb-6 border-b border-white/10 text-xs text-glg-text-muted font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glg-emerald" />
                  <span>Featured: LightEx · SchoolHub · Dagbani Hymn</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glg-emerald" />
                  <span>Interactive Code Terminal &amp; Architecture Demos</span>
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="pt-6 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-glg-emerald">
              <span className="group-hover:translate-x-1 transition-transform">
                Enter Software Division
              </span>
              <div className="w-10 h-10 rounded-full bg-glg-emerald text-black flex items-center justify-center shadow-emerald-glow transition-transform group-hover:translate-x-2 group-hover:scale-105">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* DIVISION 02: MEDIA & CREATIVE */}
          <Link
            href="/media"
            className="group relative rounded-3xl glass-panel p-8 sm:p-10 flex flex-col justify-between border border-glg-gold/30 hover:border-glg-gold shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-gradient-to-b from-[#100d14]/70 to-[#0c0a0f]/90"
          >
            {/* Top Gold/Amber Ambient Gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-glg-gold/15 rounded-full blur-3xl pointer-events-none group-hover:bg-glg-gold/25 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-14 h-14 rounded-2xl bg-glg-gold/20 border border-glg-gold/40 text-glg-gold flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-glg-gold group-hover:text-black shadow-gold-glow">
                  <Film className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-glg-gold bg-glg-gold/10 border border-glg-gold/30 px-3.5 py-1 rounded-full font-bold">
                  Division 02
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-glg-gold font-semibold mb-2">
                Cinematography &amp; Visual Direction
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-glg-gold transition-colors">
                Media &amp; Creative
              </h2>

              <p className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed mb-6">
                4K commercial cinematography, editorial studio portraiture, rhythmic video pacing, precision color grading in DaVinci Resolve, and typographic design.
              </p>

              {/* Badges / Media Proof */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-gold/30">
                  4K DCI Motion Reels
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-gold/30">
                  DaVinci Resolve Studio
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-gold/30">
                  Editorial Photography
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-white/5 text-glg-text-secondary border border-white/10 group-hover:border-glg-gold/30">
                  Typographic Posters
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pb-6 border-b border-white/10 text-xs text-glg-text-muted font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glg-gold" />
                  <span>Featured: Motion Reel 01 &amp; Visual Story Reel 02</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-glg-gold" />
                  <span>Interactive Cinema Player &amp; Editorial Exhibition</span>
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="pt-6 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-glg-gold">
              <span className="group-hover:translate-x-1 transition-transform">
                Enter Media Division
              </span>
              <div className="w-10 h-10 rounded-full bg-glg-gold text-black flex items-center justify-center shadow-gold-glow transition-transform group-hover:translate-x-2 group-hover:scale-105">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer Info Strip */}
      <footer
        ref={footerRef}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-glg-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-glg-text-muted"
      >
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} {BRAND_DATA.name}.</span>
          <span className="text-glg-gold font-serif italic">{BRAND_DATA.motto}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://wa.me/233594273358"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-glg-gold transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-glg-emerald" />
            <span>0594273358</span>
          </a>
          <a
            href={`mailto:${BRAND_DATA.email}`}
            className="hover:text-glg-gold transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-glg-gold" />
            <span>{BRAND_DATA.email}</span>
          </a>
          <a
            href={BRAND_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-white" />
            <span>github.com/thunderlight247</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
