'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Layers, CheckCircle2, ChevronRight, Terminal, Laptop } from 'lucide-react';
import { SOFTWARE_PROJECTS, SoftwareProject } from '@/data/portfolioData';

interface SoftwareSectionProps {
  onOpenLivePreview: (project: SoftwareProject) => void;
}

export default function SoftwareSection({ onOpenLivePreview }: SoftwareSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full-Stack', 'E-commerce', 'AI & Systems'];

  const filteredProjects =
    activeCategory === 'All'
      ? SOFTWARE_PROJECTS
      : SOFTWARE_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="software" className="py-24 md:py-32 bg-glg-paper border-b border-glg-ink/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-green font-semibold mb-2">
              Engineering & Systems Showcase
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-glg-ink tracking-tight">
              Software Solutions <br />
              <span className="font-normal italic text-glg-green">Engineered for Scale.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-ink/70 leading-relaxed">
            Real software systems built to solve concrete operational problems. Every architecture emphasizes reliability, clean separation of concerns, and fluid micro-interactions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-glg-ink/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-glg-ink text-white shadow-sm'
                  : 'bg-white text-glg-ink/70 border border-glg-ink/10 hover:border-glg-ink/30 hover:text-glg-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-glg-ink/10 overflow-hidden shadow-editorial hover:shadow-editorial-hover transition-all duration-300"
            >
              {/* Card Top Media / Image Preview */}
              <div className="relative h-64 sm:h-72 w-full bg-glg-slate overflow-hidden border-b border-glg-ink/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-glg-ink/80 via-transparent to-transparent opacity-80" />

                {/* Status Badge & Category */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span
                    className={`text-[11px] font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
                      project.status === 'Live'
                        ? 'bg-glg-green/90 text-white border border-glg-green-light/40'
                        : project.status === 'Completed'
                        ? 'bg-glg-ink/90 text-glg-gold-light border border-glg-gold/30'
                        : 'bg-glg-sand/90 text-glg-ink border border-glg-ink/20'
                    }`}
                  >
                    ● {project.status}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider bg-white/90 text-glg-ink px-2.5 py-0.5 rounded backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Overlaid Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif font-bold text-2xl tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-glg-gold-light font-medium tracking-wide">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              {/* Card Body & Technical Narrative */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-glg-green font-bold block mb-1">
                        Problem Addressed
                      </span>
                      <p className="text-xs text-glg-ink/80 leading-relaxed">{project.problem}</p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-glg-gold-dark font-bold block mb-1">
                        Engineered Solution
                      </span>
                      <p className="text-xs text-glg-ink/80 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mb-6 space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-glg-ink/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-glg-green shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture Strip */}
                  <div className="p-3 rounded-lg bg-glg-paper border border-glg-ink/5 mb-6">
                    <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase text-glg-muted mb-1">
                      <Terminal className="w-3.5 h-3.5 text-glg-green" />
                      <span>Architecture</span>
                    </div>
                    <code className="text-xs font-mono text-glg-ink font-medium block">
                      {project.architecture}
                    </code>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded bg-glg-paper text-glg-ink/90 border border-glg-ink/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-glg-ink/10">
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-glg-green text-white hover:bg-glg-green-light transition-colors"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <button
                        onClick={() => onOpenLivePreview(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg bg-glg-paper text-glg-ink hover:bg-glg-ink/10 transition-colors border border-glg-ink/10"
                      >
                        <Laptop className="w-3.5 h-3.5 text-glg-muted" />
                        <span>Test Preview</span>
                      </button>
                    )}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-glg-ink hover:text-glg-green transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Repo</span>
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
