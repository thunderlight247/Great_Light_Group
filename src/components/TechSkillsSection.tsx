'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Cpu, Terminal, Database, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { TECH_SKILL_GROUPS } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TechSkillsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const prefersReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const skillCards = cardsRef.current?.querySelectorAll('.skill-card');
      if (!skillCards) return;

      gsap.fromTo(
        skillCards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-24 md:py-36 bg-glg-bg text-glg-text-primary border-b border-glg-gold/15 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3">
              Engineering Competencies &amp; Language Stacks
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Technologies &amp; <br />
              <span className="font-normal italic text-glg-gold">
                Engineering Depth.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            From high-concurrency Go backends and multi-threaded financial ledgers to React 19 App Router interfaces, Flutter cross-platform mobile apps, and Python AI automation.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-3 border-b border-glg-gold/15">
          {TECH_SKILL_GROUPS.map((group, index) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(index)}
              className={`px-5 py-2.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-glg-gold text-black shadow-gold-glow'
                  : 'bg-white/5 text-glg-text-muted border border-white/10 hover:border-glg-gold/40 hover:text-white'
              }`}
            >
              <span>{group.category}</span>
              <span className="text-[10px] opacity-75 font-normal">({group.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TECH_SKILL_GROUPS[activeTab].skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="skill-card group rounded-2xl glass-panel p-6 sm:p-7 shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-gold/50 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-glg-emerald font-bold bg-glg-emerald/10 border border-glg-emerald/30 px-2.5 py-1 rounded-md">
                    {skill.level}
                  </span>
                  <span className="text-xs font-mono text-glg-text-muted">
                    #0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white mb-2 group-hover:text-glg-gold transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-glg-text-secondary leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-glg-gold">
                <span>Verified in Production</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-glg-emerald" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Polyglot Verification Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-2xl glass-panel border border-glg-gold/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-editorial">
          <div className="space-y-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono uppercase text-glg-emerald">
              <Terminal className="w-4 h-4" />
              <span>Full Source Code Accountability</span>
            </div>
            <h4 className="font-serif text-2xl font-bold text-white">
              Every technology is proven across public GitHub repositories.
            </h4>
            <p className="text-xs text-glg-text-muted">
              Inspect our commits in Go, Next.js, Flutter, PostgreSQL, and Python without gatekeeping.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/thunderlight247"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shadow-gold-glow hover:scale-105"
            >
              github.com/thunderlight247
            </a>
            <a
              href="https://github.com/johnseidu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
            >
              github.com/johnseidu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
