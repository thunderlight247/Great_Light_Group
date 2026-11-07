'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Laptop,
  ArrowRight,
  Sparkles,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { SOFTWARE_PROJECTS, SoftwareProject, ProjectGroup } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface SoftwareSectionProps {
  onOpenLivePreview: (project: SoftwareProject) => void;
}

export default function SoftwareSection({ onOpenLivePreview }: SoftwareSectionProps) {
  const [activeGroup, setActiveGroup] = useState<string>('All Flagships');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const filterTabs = [
    'All Flagships',
    'For Clients',
    'Real World Systems',
    'Complete',
    'Still in Development',
  ];

  // Homepage curated selection (flagship representative works)
  const curatedProjects = SOFTWARE_PROJECTS.filter((p) => {
    if (activeGroup === 'All Flagships') {
      return p.featured;
    }
    return p.groups.includes(activeGroup as ProjectGroup);
  }).slice(0, 6);

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.software-card');
      if (!cards) return;

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );

        const img = card.querySelector('.card-parallax-img');
        if (img) {
          gsap.fromTo(
            img,
            { yPercent: -6 },
            {
              yPercent: 6,
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
  }, [curatedProjects, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-24 md:py-36 bg-glg-bg text-glg-text-primary border-b border-glg-gold/15 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Flagship Software Architecture &amp; Production Deployments</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Software Solutions <br />
              <span className="font-normal italic text-glg-emerald-accent">
                Engineered for Scale.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="max-w-md text-xs sm:text-sm text-glg-text-secondary leading-relaxed">
              Curated architectural systems solving tangible operational bottlenecks. Showing 6 flagship productions — visit our full catalog to explore all 16 client &amp; internal platforms.
            </p>
            <Link
              href="/software/projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all shadow-emerald-glow shrink-0 hover:scale-105"
            >
              <span>View All 16 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Group Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-glg-gold/15">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveGroup(tab)}
              className={`px-4 sm:px-5 py-2 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                activeGroup === tab
                  ? 'bg-glg-emerald text-glg-bg shadow-emerald-glow'
                  : 'bg-white/5 text-glg-text-muted border border-white/10 hover:border-glg-emerald/40 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {curatedProjects.map((project) => (
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
                        : project.status === 'In Development'
                        ? 'bg-amber-400/90 text-black border border-amber-300'
                        : 'bg-white/15 text-white border border-white/20'
                    }`}
                  >
                    ● {project.status}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-black/75 text-glg-gold px-2.5 py-0.5 rounded backdrop-blur-md border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Overlaid Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <Link href={`/software/projects/${project.id}`} className="hover:underline">
                    <h3 className="font-serif font-bold text-2xl tracking-tight leading-tight group-hover:text-glg-emerald transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-glg-gold-bright font-medium tracking-wide mt-0.5">
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
                        Operational Problem
                      </span>
                      <p className="text-xs text-glg-text-secondary leading-relaxed line-clamp-2">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-glg-gold font-bold block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-glg-text-secondary leading-relaxed line-clamp-2">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-glg-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-glg-emerald shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Strip */}
                  <div className="p-3 rounded-xl bg-black/50 border border-white/10 mb-5">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-glg-text-muted mb-0.5">
                      <Terminal className="w-3 h-3 text-glg-emerald" />
                      <span>Architecture</span>
                    </div>
                    <code className="text-[11px] font-mono text-white font-medium block truncate">
                      {project.architecture}
                    </code>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-glg-text-secondary border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-glg-gold">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/software/projects/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-lg bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-colors shadow-emerald-glow"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <button
                        onClick={() => onOpenLivePreview(project)}
                        className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-white/5 text-glg-text-secondary hover:text-white hover:bg-white/10 transition-colors border border-white/10"
                        title="Open interactive sandbox preview"
                      >
                        <Laptop className="w-3 h-3 text-glg-text-muted" />
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
                      title="Inspect source code"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Source</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {/* Catalog CTA Card */}
          <div className="lg:col-span-2 rounded-2xl p-8 sm:p-12 border border-glg-emerald/30 bg-gradient-to-br from-[#0d1410] to-black flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.85)]">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-glg-gold font-bold">
                <Layers className="w-4 h-4 text-glg-emerald" />
                <span>Full Engineering Portfolio</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Explore All 16 Production Systems &amp; Client Deployments
              </h3>
              <p className="text-xs sm:text-sm text-glg-text-secondary max-w-xl">
                Browse our complete catalog categorized by active client platforms, healthcare systems, hospitality booking engines, Go financial ledgers, and AI document engines.
              </p>
            </div>

            <Link
              href="/software/projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all shadow-emerald-glow hover:scale-105 shrink-0"
            >
              <span>Open Master Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
