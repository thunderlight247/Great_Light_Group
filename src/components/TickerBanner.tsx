'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Code2, Film, Terminal, Camera, ShieldCheck } from 'lucide-react';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TickerBanner() {
  const tickerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const items = [
    'FULL-STACK ARCHITECTURE',
    'CINEMATIC STORYTELLING',
    'GO 1.24 HIGH-CONCURRENCY BACKENDS',
    'EDITORIAL PORTRAITURE',
    'NEXT.JS 15 APP ROUTER',
    'DAVINCI RESOLVE COLOR GRADING',
    'GROUNDED AI DOCUMENT ENGINES',
    'TYPOGRAPHIC GRAPHIC POSTERS',
    'PRE-FILLED WHATSAPP WORKFLOWS',
  ];

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Modulate ticker velocity on scroll
      ScrollTrigger.create({
        trigger: tickerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = Math.abs(self.getVelocity() / 300);
          gsap.to('.marquee-track', {
            timeScale: 1 + velocity,
            duration: 0.3,
            overwrite: 'auto',
          });
        },
      });
    }, tickerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div
      ref={tickerRef}
      className="relative py-6 bg-glg-bg-elevated border-y border-glg-gold/20 overflow-hidden select-none z-10"
    >
      <div className="flex w-max animate-marquee space-x-12 marquee-track font-mono text-xs font-bold uppercase tracking-widest text-glg-gold-champagne">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-glg-emerald animate-pulse" />
            <span>{text}</span>
            <span className="text-glg-gold/40">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
