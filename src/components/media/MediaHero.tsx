'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Film, Camera, Play, ArrowRight, Aperture } from 'lucide-react';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

const HERO_STILLS = [
  {
    src: '/media/photography/glg-media-01.jpeg',
    label: 'Heritage Aso-Oke Couture',
    badge: 'Bridal',
  },
  {
    src: '/media/photography/glg-media-15.jpeg',
    label: 'Crown of Pearls Bridal',
    badge: 'Nuptials',
  },
  {
    src: '/media/photography/glg-media-08.jpeg',
    label: 'Imperial Violet Nuptials',
    badge: 'Great LENS',
  },
  {
    src: '/media/photography/glg-media-18.jpeg',
    label: '4K Cinema Build Rig',
    badge: 'Cinema Rig',
  },
];

export default function MediaHero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const filmStripRef = useRef<HTMLDivElement | null>(null);
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
        )
        .fromTo(
          filmStripRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={heroRef}
      className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden border-b border-[#e8d5b5]/15"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Analog Camera Aperture & Film Metadata Strip */}
        <div ref={badgeRef} className="flex flex-wrap items-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8d5b5]/10 border border-[#e8d5b5]/30 text-[#e8d5b5] text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(232,213,181,0.15)]">
            <Film className="w-3.5 h-3.5 text-[#e8d5b5]" />
            <span>Great Light Creative &amp; Great LENS Atelier</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 text-[#d4c5b9] text-[11px] font-mono">
            <span>[ 35MM · 4K DCI · 10-BIT LOG · DAVINCI RESOLVE · GHANA ]</span>
          </div>
        </div>

        {/* Cinematic Typographic Headline */}
        <div className="max-w-5xl mb-10">
          <h1
            ref={titleRef}
            className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.93] mb-6"
          >
            <span className="media-line block">Light, Paced Motion</span>
            <span className="media-line block text-transparent bg-clip-text bg-gradient-to-r from-[#e8d5b5] via-[#f5e8d2] to-[#b89758] italic font-normal">
              &amp; Human Truth.
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="clamp-body text-[#d4c5b9] max-w-2xl leading-relaxed"
          >
            We curate imagery that endures. Specializing in high-fashion bridal couture, sacred ceremonial documentaries, and 4K cinema motion reels with directional chiaroscuro lighting.
          </p>
        </div>

        {/* Action Buttons Row */}
        <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#photography"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#e8d5b5] text-[#0c0a0e] hover:bg-[#f5e8d2] transition-all shadow-[0_0_25px_rgba(232,213,181,0.3)] hover:scale-105"
          >
            <Camera className="w-4 h-4 fill-current" />
            <span>Explore 22 Curated Works</span>
          </a>

          <a
            href="#reels"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-mono font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#e8d5b5]/50 transition-all"
          >
            <Play className="w-4 h-4 text-[#e8d5b5] fill-current" />
            <span>Watch 4K Motion Reels</span>
          </a>

          <Link
            href="/media/services"
            className="inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-xs font-mono text-[#e8d5b5] hover:text-white transition-colors"
          >
            <span>View 4 Production Packages</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Hero Film Strip Teaser: 4 Authentic Works */}
        <div ref={filmStripRef} className="mt-14 pt-8 border-t border-[#e8d5b5]/15">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#e8d5b5] font-bold flex items-center gap-2">
              <Aperture className="w-3.5 h-3.5 text-[#e8d5b5]" />
              <span>Permanent Exhibition Selection</span>
            </span>
            <a
              href="#photography"
              className="text-xs font-mono text-zinc-400 hover:text-[#e8d5b5] transition-colors flex items-center gap-1"
            >
              <span>View All 22 Works</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HERO_STILLS.map((still, idx) => (
              <a
                key={idx}
                href="#photography"
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-[#e8d5b5]/20 hover:border-[#e8d5b5]/80 shadow-[0_10px_25px_rgba(0,0,0,0.6)] transition-all hover:-translate-y-1"
              >
                <Image
                  src={still.src}
                  alt={still.label}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[9px] font-mono uppercase tracking-wider bg-black/80 text-[#e8d5b5] px-2 py-0.5 rounded-full border border-[#e8d5b5]/30">
                    {still.badge}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="text-xs font-serif font-bold group-hover:text-[#e8d5b5] transition-colors line-clamp-1">
                    {still.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Creative Production Benchmark Strip */}
        <div className="mt-12 pt-8 border-t border-[#e8d5b5]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs font-mono text-zinc-400">
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#e8d5b5] mb-1">
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
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#f5e8d2] mb-1">
              DaVinci
            </div>
            <div className="text-[10px] uppercase tracking-wider">Color Studio Science</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              Chiaroscuro
            </div>
            <div className="text-[10px] uppercase tracking-wider">Sculpted Lighting</div>
          </div>
        </div>
      </div>
    </section>
  );
}
