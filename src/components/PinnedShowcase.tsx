'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Sparkles, Terminal, Camera, Cpu, Layers, ArrowUpRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PinnedShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftPinRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.pinned-card');
      if (!cards || cards.length === 0) return;

      // Pin the entire showcase section for a choreographed scrub experience
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const step = Math.min(Math.floor(self.progress * 3), 2);
            setActiveStep(step);
          },
        },
      });

      // Animate card 1 to card 2 to card 3 transitions
      if (cards.length >= 3) {
        timeline
          .to(cards[0], {
            opacity: 0.15,
            scale: 0.92,
            y: -30,
            duration: 1,
            ease: 'power2.inOut',
          })
          .fromTo(
            cards[1],
            { opacity: 0, y: 80, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' },
            '-=0.6'
          )
          .to(cards[1], {
            opacity: 0.15,
            scale: 0.92,
            y: -30,
            duration: 1,
            ease: 'power2.inOut',
          })
          .fromTo(
            cards[2],
            { opacity: 0, y: 80, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power2.out' },
            '-=0.6'
          );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-glg-bg text-glg-text-primary py-20 flex items-center overflow-hidden border-b border-glg-gold/15"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-glg-emerald-glow/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-glg-gold/15 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Pinned Anchor with Interactive Timeline Indicators */}
          <div ref={leftPinRef} className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-glg-gold/15 border border-glg-gold/30 text-glg-gold text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GSAP Scroll-Linked Sequence</span>
              </div>
              <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight leading-none mb-4">
                The Standard <br />
                <span className="text-glg-gold italic font-normal">Of Execution.</span>
              </h2>
              <p className="text-sm text-glg-text-secondary leading-relaxed max-w-md">
                We reject superficial design and fragile code. Every project is built through a disciplined continuum of mathematical rigor and cinematic craft.
              </p>
            </div>

            {/* Interactive Timeline Stepper */}
            <div className="space-y-4 pt-2">
              <div
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 0
                    ? 'bg-glg-bg-elevated border-glg-gold/40 shadow-gold-glow'
                    : 'border-white/5 opacity-50'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-glg-emerald-dark text-glg-emerald flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  01
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">
                    Engineered Software Architecture
                  </h4>
                  <p className="text-xs text-glg-text-muted mt-0.5">
                    Serializable transactions, sub-second TTFB, and offline resilience.
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 1
                    ? 'bg-glg-bg-elevated border-glg-gold/40 shadow-gold-glow'
                    : 'border-white/5 opacity-50'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-glg-gold/20 text-glg-gold flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  02
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">
                    Cinematic Visual Direction
                  </h4>
                  <p className="text-xs text-glg-text-muted mt-0.5">
                    Natural lighting, high dynamic range, and authentic human texture.
                  </p>
                </div>
              </div>

              <div
                className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-300 ${
                  activeStep === 2
                    ? 'bg-glg-bg-elevated border-glg-gold/40 shadow-gold-glow'
                    : 'border-white/5 opacity-50'
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-glg-emerald-glow/20 text-glg-emerald-accent flex items-center justify-center shrink-0 font-mono text-xs font-bold">
                  03
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-white">
                    Dual-Discipline Commercial Dominance
                  </h4>
                  <p className="text-xs text-glg-text-muted mt-0.5">
                    Unified technical execution and brand storytelling under one roof.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs font-serif italic text-glg-gold-bright pt-2">
              &ldquo;In him we have light&rdquo; — Great Light Group
            </div>
          </div>

          {/* Right Column: Layered Pinned Scrub Cards */}
          <div ref={cardsRef} className="lg:col-span-7 relative min-h-[460px] flex items-center">
            {/* Card 1: Software Rigor */}
            <div className="pinned-card w-full rounded-2xl glass-panel p-6 sm:p-8 space-y-6 shadow-editorial transition-all duration-300">
              <div className="flex items-center justify-between border-b border-glg-gold/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <Cpu className="w-5 h-5 text-glg-emerald" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-glg-emerald">
                    Discipline 01 · Software &amp; Systems
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-glg-emerald/10 text-glg-emerald border border-glg-emerald/30">
                  Go 1.24 · Next.js 15
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-white">
                Deterministic Code. Zero Architectural Guesswork.
              </h3>

              {/* Terminal Code Preview */}
              <div className="rounded-xl bg-black/80 border border-white/10 p-4 font-mono text-xs space-y-1.5 overflow-x-auto text-glg-text-secondary">
                <div className="text-glg-text-muted flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[10px] uppercase tracking-wider ml-2">ledger_engine.go</span>
                </div>
                <p className="text-glg-emerald pt-2">// Strict serializable money movement retry loop</p>
                <p>tx, err := db.BeginTx(ctx, &amp;sql.TxOptions&#123;Isolation: sql.LevelSerializable&#125;)</p>
                <p>if err != nil &#123; return fmt.Errorf(&quot;tx init failed: %w&quot;, err) &#125;</p>
                <p className="text-glg-gold">// Double-entry zero-drift balance validation</p>
                <p>return ledger.ValidateAndCommit(tx, sourceAcc, destAcc, amount)</p>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-base text-glg-emerald">99.9%</div>
                  <div className="text-[10px] uppercase font-mono text-glg-text-muted">Uptime Target</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-base text-glg-gold">&lt; 180ms</div>
                  <div className="text-[10px] uppercase font-mono text-glg-text-muted">Global TTFB</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-base text-white">100%</div>
                  <div className="text-[10px] uppercase font-mono text-glg-text-muted">Type-Safe</div>
                </div>
              </div>
            </div>

            {/* Card 2: Cinematic Visual Craft */}
            <div className="pinned-card absolute inset-0 w-full rounded-2xl glass-panel p-6 sm:p-8 space-y-6 shadow-editorial opacity-0 pointer-events-none transition-all duration-300">
              <div className="flex items-center justify-between border-b border-glg-gold/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <Camera className="w-5 h-5 text-glg-gold" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-glg-gold">
                    Discipline 02 · Media &amp; Storytelling
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-glg-gold/10 text-glg-gold border border-glg-gold/30">
                  4K DCI · DaVinci Resolve
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-white">
                Cinematography That Commands Total Attention.
              </h3>

              {/* Visual Showcase Graphic */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-glg-gold/30 bg-black">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
                  alt="Cinematic lighting reference"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div className="text-xs font-mono text-glg-gold">
                    Directional Aperture Study · Chiaroscuro Natural Lighting
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 pt-2 text-center">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-base text-glg-gold">10-Bit</div>
                  <div className="text-[10px] uppercase font-mono text-glg-text-muted">Log Capture</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-base text-glg-emerald">60 FPS</div>
                  <div className="text-[10px] uppercase font-mono text-glg-text-muted">High-Rate Motion</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="font-mono font-bold text-base text-white">Editorial</div>
                  <div className="text-[10px] uppercase font-mono text-glg-text-muted">Paced Cuts</div>
                </div>
              </div>
            </div>

            {/* Card 3: Dual Synergy */}
            <div className="pinned-card absolute inset-0 w-full rounded-2xl glass-panel p-6 sm:p-8 space-y-6 shadow-editorial opacity-0 pointer-events-none transition-all duration-300">
              <div className="flex items-center justify-between border-b border-glg-gold/15 pb-4">
                <div className="flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-glg-emerald-accent" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-glg-emerald-accent">
                    Dual Discipline Synergy
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/10 text-glg-gold border border-white/20">
                  One Partner
                </span>
              </div>

              <h3 className="font-serif font-bold text-2xl text-white">
                Why Settle for Broken Hand-Offs?
              </h3>

              <p className="text-sm text-glg-text-secondary leading-relaxed">
                Most businesses hire one agency to design and shoot media, and another to write code. The result is bloated websites, broken handoffs, and diluted vision. Great Light Group unifies both from day one.
              </p>

              <div className="p-5 rounded-xl bg-glg-bg-elevated border border-glg-gold/30 space-y-3">
                <div className="flex items-center gap-3 text-xs text-white">
                  <div className="w-2 h-2 rounded-full bg-glg-emerald" />
                  <span>Software that mirrors high-end art direction</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white">
                  <div className="w-2 h-2 rounded-full bg-glg-gold" />
                  <span>Media that integrates seamlessly into digital applications</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white">
                  <div className="w-2 h-2 rounded-full bg-glg-emerald-accent" />
                  <span>Single point of executive contact and rapid execution</span>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-glg-gold text-glg-bg font-semibold text-xs uppercase tracking-wider hover:bg-glg-gold-bright transition-colors"
              >
                <span>Initiate Your Dual-Discipline Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
