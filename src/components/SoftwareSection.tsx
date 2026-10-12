'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, CheckCircle2, Terminal, Laptop } from 'lucide-react';
import { SOFTWARE_PROJECTS, SoftwareProject } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SoftwareSectionProps {
  onOpenLivePreview: (project: SoftwareProject) => void;
}

export default function SoftwareSection({ onOpenLivePreview }: SoftwareSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const categories = ['All', 'Full-Stack', 'E-commerce', 'AI & Systems'];

  const filteredProjects =
    activeCategory === 'All'
      ? SOFTWARE_PROJECTS
      : SOFTWARE_PROJECTS.filter((p) => p.category === activeCategory);

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.software-card');
      if (!cards) return;

      cards.forEach((card) => {
        // Scroll reveal on card
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Inner image parallax scrub
        const img = card.querySelector('.card-parallax-img');
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="software"
      className="py-24 md:py-36 bg-glg-bg text-glg-text-primary border-b border-glg-gold/15 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3">
              Software Architecture &amp; Production Apps
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Software Solutions <br />
              <span className="font-normal italic text-glg-emerald-accent">
                Engineered for Scale.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            Real software systems engineered to solve tangible operational bottlenecks. Every codebase prioritizes clean isolation, high concurrency, and rapid mobile response.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-3 border-b border-glg-gold/15">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-glg-emerald text-glg-bg shadow-emerald-glow'
                  : 'bg-white/5 text-glg-text-muted border border-white/10 hover:border-glg-emerald/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid with ScrollTrigger reveals */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="software-card group flex flex-col justify-between rounded-2xl glass-panel overflow-hidden shadow-editorial hover:shadow-editorial-hover transition-all duration-300"
            >
              {/* Card Top Media with Parallax Frame */}
              <div className="relative h-64 sm:h-72 w-full bg-black overflow-hidden border-b border-glg-gold/15">
                <div className="card-parallax-img absolute inset-[-10%] w-[120%] h-[120%]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-80"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-glg-bg-elevated via-transparent to-transparent opacity-90" />

                {/* Status & Category Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span
                    className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
                      project.status === 'Live'
                        ? 'bg-glg-emerald/90 text-black border border-glg-emerald'
                        : project.status === 'Completed'
                        ? 'bg-glg-gold/90 text-black border border-glg-gold'
                        : 'bg-white/15 text-white border border-white/20'
                    }`}
                  >
                    ● {project.status}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-black/70 text-glg-gold-champagne px-2.5 py-0.5 rounded backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Overlaid Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-2xl tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-glg-gold-bright font-medium tracking-wide">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body & Technical Narrative */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-glg-emerald font-bold block mb-1">
                        Problem Solved
                      </span>
                      <p className="text-xs text-glg-text-secondary leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-glg-gold font-bold block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-glg-text-secondary leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-glg-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-glg-emerald shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Strip */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/10 mb-6">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-glg-text-muted mb-1">
                      <Terminal className="w-3.5 h-3.5 text-glg-emerald" />
                      <span>Architecture</span>
                    </div>
                    <code className="text-xs font-mono text-white font-medium block">
                      {project.architecture}
                    </code>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/5 text-glg-text-secondary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-colors shadow-emerald-glow"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <button
                        onClick={() => onOpenLivePreview(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10"
                      >
                        <Laptop className="w-3.5 h-3.5 text-glg-text-muted" />
                        <span>Preview</span>
                      </button>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-glg-text-secondary hover:text-glg-gold transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
