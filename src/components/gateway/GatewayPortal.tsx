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
  Phone,
  Mail,
  Github,
  CheckCircle2,
  Star,
  Layers,
  Camera,
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
        { opacity: 0, scale: 0.85, y: -20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'back.out(1.6)' }
      )
        .fromTo(
          titleRef.current?.querySelectorAll('.intro-line') || [],
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.85, stagger: 0.12 },
          '-=0.4'
        )
        .fromTo(
          cardsRef.current?.children || [],
          { opacity: 0, y: 45, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          footerRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-[#faf8f5] text-[#1c1917] flex flex-col justify-between selection:bg-[#e5b56d] selection:text-white overflow-x-hidden font-sans"
    >
      {/* Natural Sunlit Logo-Inspired Ambient Background Glows */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[85vw] h-[55vw] max-w-5xl rounded-full bg-gradient-to-b from-[#fbeed7] via-[#f5e1bf]/40 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-[35%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#f4e6ce]/30 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-[#edd8b7]/40 blur-[160px] pointer-events-none" />

      {/* Subtle Natural Grid / Paper Grain Accent */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1c1917 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Top Header Bar */}
      <header className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#e5b56d] shadow-[0_4px_16px_rgba(229,181,109,0.3)] bg-white p-0.5">
            <Image
              src={BRAND_DATA.logo}
              alt={BRAND_DATA.name}
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-lg text-[#1c1917] tracking-tight leading-tight">
              {BRAND_DATA.name}
            </span>
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#a87932] font-bold">
              {BRAND_DATA.motto}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/233594273358"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-white text-[#292524] hover:text-[#a87932] border border-[#e7decb] shadow-sm hover:shadow-md transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="hidden sm:inline">Direct Desk:</span>
            <span>0594273358</span>
          </a>
        </div>
      </header>

      {/* Central Welcoming Gateway Section */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-16 my-auto">
        {/* Intro Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div
            ref={logoRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f4e8d3] border border-[#e5b56d]/60 text-[#8a5d1b] text-xs font-mono font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#a87932]" />
            <span>Dual-Discipline Commercial Studio</span>
          </div>

          <h1
            ref={titleRef}
            className="font-serif font-black text-4xl sm:text-6xl md:text-7xl text-[#1c1917] tracking-tight leading-[1.04] mb-5"
          >
            <span className="intro-line block">Two Creative Worlds.</span>
            <span className="intro-line block text-[#a87932] italic font-normal">
              One Considered Standard.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#57534e] leading-relaxed max-w-2xl mx-auto font-sans">
            Welcome to Great Light Group. We build high-throughput software systems with mathematical rigor and produce cinematic visual media with deep human truth. Choose a division below to step into its dedicated space:
          </p>
        </div>

        {/* Dual Division Gateways (Side-by-Side Natural Cards) */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 max-w-5xl mx-auto"
        >
          {/* DIVISION 01: SOFTWARE & TECHNOLOGY */}
          <Link
            href="/software"
            className="group relative rounded-3xl bg-white p-8 sm:p-10 flex flex-col justify-between border border-[#e7decb] hover:border-[#10b981] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-5px_rgba(16,185,129,0.15)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Subtle Top Sage/Emerald Ambient Wash */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#10b981]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#10b981]/10 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#064e3b]/10 border border-[#10b981]/30 text-[#047857] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#047857] group-hover:text-white">
                  <Code2 className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#065f46] bg-[#10b981]/10 border border-[#10b981]/25 px-3.5 py-1 rounded-full font-bold">
                  Division 01
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-[#047857] font-semibold mb-1.5">
                Engineering &amp; Production Systems
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mb-3 group-hover:text-[#047857] transition-colors">
                Technology &amp; Software
              </h2>

              <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mb-6 font-sans">
                High-throughput Go financial exchange backends, full-stack Next.js web applications, school administrative portals, and offline Flutter mobile readers engineered for determinism and zero downtime.
              </p>

              {/* Badges / Tech Proof */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  Go 1.25 &amp; PostgreSQL
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  Next.js 14 &amp; React
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  Flutter &amp; Dart
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  12 Core Offerings
                </span>
              </div>

              {/* Highlights & Verified Reviews Link */}
              <div className="space-y-2 py-4 border-y border-[#f0e8d9] text-xs text-[#57534e] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                  <span>Featured: SchoolHub · LightEx · Dagbani Hymn</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#065f46] font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                  <span>5.0 / 5.0 Rating · Verified Client Endorsements</span>
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="pt-6 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#065f46]">
              <span className="group-hover:translate-x-1 transition-transform">
                Enter Software Division
              </span>
              <div className="w-10 h-10 rounded-full bg-[#064e3b] text-white flex items-center justify-center transition-transform group-hover:translate-x-2 group-hover:scale-105 shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>

          {/* DIVISION 02: MEDIA & CREATIVE */}
          <Link
            href="/media"
            className="group relative rounded-3xl bg-white p-8 sm:p-10 flex flex-col justify-between border border-[#e7decb] hover:border-[#b89047] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_-5px_rgba(184,144,71,0.15)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Subtle Top Gold/Amber Ambient Wash */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[#e5b56d]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#e5b56d]/15 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#b89047]/10 border border-[#b89047]/30 text-[#9e7526] flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:bg-[#b89047] group-hover:text-white">
                  <Film className="w-7 h-7" />
                </div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9e7526] bg-[#b89047]/10 border border-[#b89047]/25 px-3.5 py-1 rounded-full font-bold">
                  Division 02
                </span>
              </div>

              <div className="text-xs font-mono uppercase tracking-wider text-[#9e7526] font-semibold mb-1.5">
                Cinematography &amp; Visual Direction
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1c1917] mb-3 group-hover:text-[#9e7526] transition-colors">
                Media &amp; Creative
              </h2>

              <p className="text-xs sm:text-sm text-[#57534e] leading-relaxed mb-6 font-sans">
                High-fashion bridal couture, sacred ceremonial documentaries, DaVinci Resolve 10-bit log color science, and 4K cinema motion reels captured with directional chiaroscuro lighting.
              </p>

              {/* Badges / Media Proof */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  4K DCI Motion Reels
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  DaVinci Resolve Studio
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  22 Permanent Works
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-[#faf8f5] text-[#44403c] border border-[#e7decb]">
                  Bridal &amp; Nuptials
                </span>
              </div>

              {/* Highlights & Verified Reviews Link */}
              <div className="space-y-2 py-4 border-y border-[#f0e8d9] text-xs text-[#57534e] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#b89047]" />
                  <span>Featured: Motion Reel 01 &amp; Visual Story Reel 02</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#8a5d1b] font-semibold">
                  <Star className="w-3.5 h-3.5 fill-current text-amber-500" />
                  <span>5.0 / 5.0 Rating · Verified Client Commendations</span>
                </div>
              </div>
            </div>

            {/* Bottom Action CTA */}
            <div className="pt-6 flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#8a5d1b]">
              <span className="group-hover:translate-x-1 transition-transform">
                Enter Media Division
              </span>
              <div className="w-10 h-10 rounded-full bg-[#8a5d1b] text-white flex items-center justify-center transition-transform group-hover:translate-x-2 group-hover:scale-105 shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Natural Warm Footer Info Strip */}
      <footer
        ref={footerRef}
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-[#e7decb] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#78716c]"
      >
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} {BRAND_DATA.name}.</span>
          <span className="text-[#a87932] font-serif italic">{BRAND_DATA.motto}</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://wa.me/233594273358"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#a87932] transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#10b981]" />
            <span>0594273358</span>
          </a>
          <a
            href={`mailto:${BRAND_DATA.email}`}
            className="hover:text-[#a87932] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#a87932]" />
            <span>{BRAND_DATA.email}</span>
          </a>
          <a
            href={BRAND_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1c1917] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-[#1c1917]" />
            <span>github.com/thunderlight247</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
