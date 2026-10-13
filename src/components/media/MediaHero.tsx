'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Film, Camera, Sparkles, ArrowDown, Play, ArrowRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

export default function MediaHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.6)' }
      )
        .fromTo(
          titleRef.current?.querySelectorAll('.media-line') || [],
          { opacity: 0, y: 60, rotationX: 25 },
          { opacity: 1, y: 0, rotationX: 0, duration: 1.1, stagger: 0.15 },
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
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
          '-=0.5'
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
        {/* Analog Camera Aperture & Film Metadata Strip */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-glg-gold/15 border border-glg-gold/30 text-glg-gold text-xs font-mono font-semibold uppercase tracking-wider shadow-gold-glow">
            <Film className="w-3.5 h-3.5" />
            <span>Creative Media &amp; Visual Studio</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-glg-text-muted text-[11px] font-mono">
            <span>[ 4K DCI · 10-BIT LOG · 24FPS CADENCE · DAVINCI RESOLVE ]</span>
          </div>
        </div>

        {/* Cinematic Typographic Headline */}
        <div className="max-w-5xl mb-10">
          <h1
            ref={titleRef}
            className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.95] mb-6"
          >
            <span className="media-line block">Light, Paced Motion</span>
            <span className="media-line block text-transparent bg-clip-text bg-gradient-to-r from-glg-gold via-glg-gold-champagne to-amber-200 italic font-normal">
              &amp; Human Truth.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="clamp-body text-glg-text-secondary max-w-2xl leading-relaxed"
          >
            We curate images that linger. Specializing in directional chiaroscuro cinematography, editorial salon and fashion portraiture, and precision color science.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#reels"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shadow-gold-glow hover:scale-105"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Watch 4K Motion Reels</span>
          </a>

          <a
            href="#photography"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-glg-gold/30 transition-all"
          >
            <Camera className="w-4 h-4 text-glg-gold" />
            <span>Editorial Stills</span>
          </a>

          <Link
            href="/media/services"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-mono text-glg-gold hover:text-white transition-colors"
          >
            <span>View 4 Creative Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Creative Production Benchmark Strip */}
        <div className="mt-16 pt-8 border-t border-glg-gold/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-glg-text-muted">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-glg-gold mb-1">
              4K DCI
            </div>
            <div className="text-[10px] uppercase tracking-wider">Master Resolution</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              10-Bit Log
            </div>
            <div className="text-[10px] uppercase tracking-wider">Dynamic Range</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-glg-gold-champagne mb-1">
              DaVinci
            </div>
            <div className="text-[10px] uppercase tracking-wider">Color Studio Grade</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              Natural
            </div>
            <div className="text-[10px] uppercase tracking-wider">Directional Light</div>
          </div>
        </div>
      </div>
    </section>
  );
}
