'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Laptop,
  Building2,
  MapPin,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  Maximize2,
  Minimize2,
  Share2,
} from 'lucide-react';
import InteractiveBackground from '@/components/InteractiveBackground';
import SoftwareNavbar from '@/components/software/SoftwareNavbar';
import SoftwareFooter from '@/components/software/SoftwareFooter';
import LivePreviewModal from '@/components/LivePreviewModal';
import { SoftwareProject } from '@/data/portfolioData';

interface Props {
  project: SoftwareProject;
  allProjects: SoftwareProject[];
}

export default function SoftwareProjectDetailClient({ project, allProjects }: Props) {
  const [showSandbox, setShowSandbox] = useState<boolean>(false);
  const [previewModalOpen, setPreviewModalOpen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Find index for next/prev navigation
  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="relative min-h-screen bg-glg-bg text-glg-text-primary selection:bg-glg-gold selection:text-black">
      <InteractiveBackground />
      <SoftwareNavbar />

      <main className="relative z-10 pt-32 sm:pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-mono text-glg-text-muted mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Gateway
            </Link>
            <span>/</span>
            <Link href="/software" className="hover:text-white transition-colors">
              Software Division
            </Link>
            <span>/</span>
            <Link href="/software/projects" className="text-glg-emerald hover:underline">
              Projects Catalog
            </Link>
            <span>/</span>
            <span className="text-white truncate max-w-[200px]">{project.title}</span>
          </nav>

          {/* Project Title Block Header */}
          <div className="mb-10 pb-8 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`text-[11px] font-mono font-semibold px-3 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
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

              <span className="text-[11px] font-mono uppercase tracking-wider bg-black/70 text-glg-gold px-3 py-0.5 rounded-full border border-white/15">
                {project.category}
              </span>

              {project.groups.map((grp) => (
                <span
                  key={grp}
                  className="text-[10px] font-mono uppercase tracking-wider bg-white/5 text-zinc-300 px-2.5 py-0.5 rounded-full border border-white/10"
                >
                  {grp}
                </span>
              ))}
            </div>

            <h1 className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.98] mb-3">
              {project.title}
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-glg-gold font-normal mb-6">
              {project.subtitle}
            </p>

            {/* Client & Metadata Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-glg-text-secondary">
                {project.client && (
                  <div className="flex items-center gap-1.5 text-glg-emerald font-semibold">
                    <Building2 className="w-4 h-4" />
                    <span>Client: {project.client}</span>
                  </div>
                )}
                {project.clientLocation && (
                  <div className="flex items-center gap-1.5 text-zinc-400">
                    <MapPin className="w-4 h-4" />
                    <span>{project.clientLocation}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all shadow-emerald-glow hover:scale-105"
                  >
                    <span>Visit Live Production</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.liveUrl && (
                  <button
                    onClick={() => setShowSandbox(!showSandbox)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-white/10 text-white hover:bg-white/20 transition-all border border-white/15"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>{showSandbox ? 'Hide Embedded Sandbox' : 'Run Interactive Sandbox'}</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-white/5 text-glg-text-secondary hover:text-white hover:bg-white/10 transition-all border border-white/10"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}

                <button
                  onClick={handleShare}
                  className="p-2.5 rounded-xl bg-white/5 text-glg-text-secondary hover:text-white hover:bg-white/10 transition-all border border-white/10"
                  title="Copy link to clipboard"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copiedLink && (
                  <span className="text-[11px] font-mono text-glg-emerald">Link copied!</span>
                )}
              </div>
            </div>
          </div>

          {/* Embedded Sandbox Viewer (Toggled on button click) */}
          {showSandbox && project.liveUrl && (
            <div className="mb-12 rounded-3xl overflow-hidden border border-glg-emerald/40 bg-black shadow-2xl animate-fadeIn">
              <div className="px-4 py-3 bg-zinc-900 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs font-mono text-zinc-400 ml-2 truncate max-w-sm">
                    {project.liveUrl}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-glg-emerald hover:underline flex items-center gap-1"
                  >
                    <span>Full Tab</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => setShowSandbox(false)}
                    className="text-xs font-mono text-zinc-400 hover:text-white ml-2"
                  >
                    Close
                  </button>
                </div>
              </div>
              <div className="relative w-full h-[620px] bg-white">
                <iframe
                  src={project.liveUrl}
                  title={`${project.title} Sandbox`}
                  className="w-full h-full border-0"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  loading="lazy"
                />
              </div>
            </div>
          )}

          {/* Project Featured Image Banner */}
          <div className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-3xl overflow-hidden border border-glg-gold/20 mb-12 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-glg-bg via-transparent to-transparent opacity-80" />
          </div>

          {/* Architectural Metrics Strip */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl glass-panel border border-glg-emerald/20 flex flex-col justify-between"
                >
                  <span className="text-xs font-mono uppercase tracking-wider text-glg-emerald font-semibold mb-2">
                    {metric.label}
                  </span>
                  <span className="font-serif text-3xl sm:text-4xl font-black text-white">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Case Study Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 mb-16">
            {/* Left 8 Cols: Problem, Solution & Highlights */}
            <div className="lg:col-span-7 space-y-10">
              {/* Overview */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Engineering Brief &amp; Overview</span>
                </h3>
                <p className="text-sm sm:text-base text-glg-text-secondary leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* The Problem Solved */}
              <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-red-500/20">
                <div className="text-xs uppercase font-mono tracking-wider text-red-400 font-bold mb-2">
                  01 · The Operational Challenge &amp; Bottleneck
                </div>
                <h4 className="font-serif font-bold text-xl text-white mb-3">
                  Why this system needed to be built
                </h4>
                <p className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed font-sans">
                  {project.problem}
                </p>
              </div>

              {/* The Engineered Solution */}
              <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border border-glg-emerald/30">
                <div className="text-xs uppercase font-mono tracking-wider text-glg-emerald font-bold mb-2">
                  02 · The Engineered Architectural Solution
                </div>
                <h4 className="font-serif font-bold text-xl text-white mb-3">
                  How Great Light Group engineered the delivery
                </h4>
                <p className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed font-sans">
                  {project.solution}
                </p>
              </div>

              {/* Highlights List */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-glg-emerald" />
                  <span>Core Implementation Benchmarks</span>
                </h3>
                <div className="space-y-3">
                  {project.highlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl glass-panel border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-glg-emerald shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed font-sans">
                        {hl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Architecture, Tech Stack & Deliverables */}
            <div className="lg:col-span-5 space-y-6">
              {/* Architecture Blueprint Card */}
              <div className="p-6 rounded-2xl glass-panel border border-glg-gold/25 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-glg-gold font-semibold">
                  <Terminal className="w-4 h-4 text-glg-emerald" />
                  <span>Architecture Blueprint</span>
                </div>
                <p className="text-xs font-mono text-zinc-400">
                  Engineered topology and runtime dependencies:
                </p>
                <div className="p-4 rounded-xl bg-black border border-white/10 font-mono text-xs text-glg-emerald leading-relaxed">
                  {project.architecture}
                </div>
              </div>

              {/* Technology Stack Register */}
              <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-semibold">
                  <Cpu className="w-4 h-4 text-glg-emerald" />
                  <span>Technology Stack Register</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 text-glg-text-secondary border border-white/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Produced */}
              {project.deliverables && project.deliverables.length > 0 && (
                <div className="p-6 rounded-2xl glass-panel border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-glg-emerald-accent font-semibold">
                    <Layers className="w-4 h-4" />
                    <span>Deliverables &amp; Artifacts</span>
                  </div>
                  <ul className="space-y-2 text-xs font-mono text-glg-text-secondary">
                    {project.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-glg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Direct Actions Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0d1410] to-black border border-glg-emerald/30 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-glg-emerald font-bold block">
                  Commission Similar Architecture
                </span>
                <p className="text-xs text-glg-text-secondary leading-relaxed">
                  Require a custom system matching the specifications of {project.title}? Our engineering practice delivers tailored, production-grade solutions.
                </p>
                <a
                  href={`https://wa.me/233594273358?text=Hello%20Great%20Light%20Group,%20I%20am%20interested%20in%20commissioning%20a%20system%20similar%20to%20${encodeURIComponent(
                    project.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-all flex items-center justify-center gap-2 shadow-emerald-glow"
                >
                  <span>Discuss Scoping on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Next / Prev Project Pagination */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/software/projects/${prevProject.id}`}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-glg-emerald/40 transition-all flex items-center gap-4 group"
            >
              <ArrowLeft className="w-5 h-5 text-glg-text-muted group-hover:text-glg-emerald transition-colors" />
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-glg-text-muted block">
                  Previous System
                </span>
                <span className="font-serif font-bold text-base text-white group-hover:text-glg-emerald transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              href={`/software/projects/${nextProject.id}`}
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-glg-emerald/40 transition-all flex items-center justify-between group text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-glg-text-muted block">
                  Next System
                </span>
                <span className="font-serif font-bold text-base text-white group-hover:text-glg-emerald transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-glg-text-muted group-hover:text-glg-emerald transition-colors" />
            </Link>
          </div>
        </div>
      </main>

      <SoftwareFooter />

      {/* Live Preview Modal */}
      <LivePreviewModal
        project={previewModalOpen ? project : null}
        onClose={() => setPreviewModalOpen(false)}
      />
    </div>
  );
}
