'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Terminal,
  Laptop,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search,
  Layers,
  ShieldCheck,
  Building2,
  MapPin,
  ArrowUpRight,
  Filter,
} from 'lucide-react';
import InteractiveBackground from '@/components/InteractiveBackground';
import SoftwareNavbar from '@/components/software/SoftwareNavbar';
import SoftwareFooter from '@/components/software/SoftwareFooter';
import LivePreviewModal from '@/components/LivePreviewModal';
import { SOFTWARE_PROJECTS, SoftwareProject, ProjectGroup } from '@/data/portfolioData';

export default function SoftwareProjectsClient() {
  const [activeGroup, setActiveGroup] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [previewProject, setPreviewProject] = useState<SoftwareProject | null>(null);

  const groupTabs: Array<{ id: string; label: string; count: number }> = [
    { id: 'All', label: 'All Projects', count: SOFTWARE_PROJECTS.length },
    {
      id: 'For Clients',
      label: 'For Clients',
      count: SOFTWARE_PROJECTS.filter((p) => p.groups.includes('For Clients')).length,
    },
    {
      id: 'Real World Systems',
      label: 'Real World Systems',
      count: SOFTWARE_PROJECTS.filter((p) => p.groups.includes('Real World Systems')).length,
    },
    {
      id: 'Complete',
      label: 'Complete',
      count: SOFTWARE_PROJECTS.filter((p) => p.groups.includes('Complete')).length,
    },
    {
      id: 'Still in Development',
      label: 'Still in Development',
      count: SOFTWARE_PROJECTS.filter((p) => p.groups.includes('Still in Development')).length,
    },
  ];

  const categories = [
    'All',
    'Hospitality & Booking',
    'Healthcare & Clinical',
    'Commercial & Lifestyle',
    'Legal & Enterprise',
    'Full-Stack Architecture',
    'AI & Systems',
    'Mobile Engineering',
    'Commercial & Utility',
  ];

  const filteredProjects = useMemo(() => {
    return SOFTWARE_PROJECTS.filter((project) => {
      // Group filter
      if (activeGroup !== 'All' && !project.groups.includes(activeGroup as ProjectGroup)) {
        return false;
      }

      // Category filter
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesSubtitle = project.subtitle.toLowerCase().includes(query);
        const matchesDesc = project.description.toLowerCase().includes(query);
        const matchesClient = project.client?.toLowerCase().includes(query);
        const matchesTech = project.techStack.some((t) => t.toLowerCase().includes(query));
        return matchesTitle || matchesSubtitle || matchesDesc || matchesClient || matchesTech;
      }

      return true;
    });
  }, [activeGroup, selectedCategory, searchQuery]);

  return (
    <div className="relative min-h-screen bg-glg-bg text-glg-text-primary selection:bg-glg-gold selection:text-black">
      {/* Interactive particle canvas */}
      <InteractiveBackground />

      {/* Navigation */}
      <SoftwareNavbar />

      <main className="relative z-10 pt-32 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Header */}
          <div className="mb-10">
            <Link
              href="/software"
              className="inline-flex items-center gap-2 text-xs font-mono text-glg-emerald hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Software Division Home</span>
            </Link>

            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-2 flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Complete Engineering Register &amp; Production Deployments</span>
            </div>
            <h1 className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.95] mb-4">
              Production Systems &amp; <br />
              <span className="text-glg-gold italic font-normal">
                Client Software Catalog.
              </span>
            </h1>
            <p className="max-w-3xl text-xs sm:text-sm text-glg-text-secondary leading-relaxed font-sans">
              Authoritative register of full-stack web platforms, distributed Go backends, mobile Flutter applications, and clinical/hospitality booking engines engineered and shipped by Great Light Group. Grouped by client deliverables, real-world utility, and development status.
            </p>
          </div>

          {/* Metrics Quick Summary Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
            <div className="p-4 rounded-2xl glass-panel border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-glg-emerald block mb-1">
                Total Systems
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-white">16</span>
              <span className="text-[10px] font-mono text-glg-text-muted block mt-0.5">
                Verified Codebases
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-glg-gold block mb-1">
                Client Platforms
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-white">10</span>
              <span className="text-[10px] font-mono text-glg-text-muted block mt-0.5">
                Active Organizations
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-glg-emerald-accent block mb-1">
                Real-World Systems
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-white">12</span>
              <span className="text-[10px] font-mono text-glg-text-muted block mt-0.5">
                Operational Utility
              </span>
            </div>

            <div className="p-4 rounded-2xl glass-panel border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-1">
                Active Engineering
              </span>
              <span className="font-serif text-2xl sm:text-3xl font-black text-white">3</span>
              <span className="text-[10px] font-mono text-glg-text-muted block mt-0.5">
                Go &amp; AI Backends
              </span>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="mb-8 space-y-4">
            {/* Search Input Bar */}
            <div className="relative">
              <Search className="w-4 h-4 text-glg-text-muted absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, client, tech stack (e.g. Next.js, Go, Flutter, Hospital, Booking)..."
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-black/60 border border-white/15 focus:border-glg-emerald text-xs font-mono text-white placeholder:text-zinc-500 focus:outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-glg-text-muted hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Primary Group Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1 pb-2 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-wider text-glg-text-muted flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5 text-glg-emerald" />
                <span className="hidden sm:inline">Group:</span>
              </span>
              {groupTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveGroup(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 ${
                    activeGroup === tab.id
                      ? 'bg-glg-emerald text-glg-bg shadow-emerald-glow'
                      : 'bg-white/5 text-glg-text-muted border border-white/10 hover:border-glg-emerald/40 hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeGroup === tab.id ? 'bg-black/20 text-black font-bold' : 'bg-white/10 text-glg-gold'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Sub-category Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-glg-text-muted mr-1.5">
                Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                    selectedCategory === cat
                      ? 'bg-white/20 text-white font-bold border border-white/30'
                      : 'bg-white/5 text-glg-text-secondary hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-xs font-mono text-glg-text-muted pt-2 flex items-center justify-between">
              <span>
                Showing {filteredProjects.length} of {SOFTWARE_PROJECTS.length} engineering projects
              </span>
              {(activeGroup !== 'All' || selectedCategory !== 'All' || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveGroup('All');
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                  className="text-xs font-mono text-glg-gold hover:underline"
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>

          {/* Projects Cards Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex flex-col justify-between rounded-2xl glass-panel overflow-hidden border border-white/10 hover:border-glg-emerald/50 transition-all duration-300 shadow-editorial hover:-translate-y-1"
                >
                  {/* Top Image Preview */}
                  <div className="relative h-52 sm:h-56 w-full bg-black overflow-hidden border-b border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-85"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glg-bg-elevated via-transparent to-transparent opacity-90" />

                    {/* Status & Category Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span
                        className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
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
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-black/80 text-glg-gold px-2 py-0.5 rounded backdrop-blur-md border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Group Badges */}
                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1">
                      {project.groups.map((grp) => (
                        <span
                          key={grp}
                          className="text-[9px] font-mono uppercase tracking-wider bg-black/70 text-zinc-300 px-2 py-0.5 rounded backdrop-blur-md border border-white/10"
                        >
                          {grp}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Client if present */}
                      {project.client && (
                        <div className="text-[10px] font-mono text-glg-emerald font-semibold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                          <Building2 className="w-3 h-3" />
                          <span className="truncate">{project.client}</span>
                          {project.clientLocation && (
                            <span className="text-zinc-500 font-normal truncate">
                              · {project.clientLocation}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <Link href={`/software/projects/${project.id}`}>
                        <h2 className="font-serif font-bold text-xl tracking-tight text-white group-hover:text-glg-emerald transition-colors leading-tight">
                          {project.title}
                        </h2>
                      </Link>
                      <p className="text-xs text-glg-gold font-medium mt-0.5 mb-3 line-clamp-1">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-glg-text-secondary leading-relaxed line-clamp-3 mb-4 font-sans">
                        {project.description}
                      </p>

                      {/* Key highlights */}
                      <div className="space-y-1.5 mb-4">
                        {project.highlights.slice(0, 2).map((hl, i) => (
                          <div key={i} className="flex items-start gap-2 text-[11px] text-glg-text-secondary">
                            <CheckCircle2 className="w-3 h-3 text-glg-emerald shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-glg-text-secondary border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-glg-gold">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <Link
                        href={`/software/projects/${project.id}`}
                        className="inline-flex items-center gap-1 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors border border-white/10"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>

                      <div className="flex items-center gap-1.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-glg-emerald text-black hover:bg-glg-emerald-accent transition-colors shadow-emerald-glow"
                            title="Visit production website"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <button
                            onClick={() => setPreviewProject(project)}
                            className="p-1.5 rounded-lg bg-white/5 text-glg-text-secondary hover:text-white hover:bg-white/10 transition-colors border border-white/10"
                            title="Interactive sandbox preview"
                          >
                            <Laptop className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-white/5 text-glg-text-secondary hover:text-glg-gold hover:bg-white/10 transition-colors border border-white/10"
                            title="Inspect GitHub repository"
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl p-12 text-center border border-white/10 bg-black/40">
              <Search className="w-10 h-10 text-glg-text-muted mx-auto mb-3" />
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                No matching systems found
              </h3>
              <p className="text-xs text-glg-text-secondary mb-4">
                Try clearing your search query or switching to another group tab.
              </p>
              <button
                onClick={() => {
                  setActiveGroup('All');
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full text-xs font-mono font-bold uppercase bg-glg-emerald text-black"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Commission Callout Banner */}
          <div className="mt-20 rounded-3xl p-8 sm:p-12 border border-glg-gold/30 bg-gradient-to-br from-[#070b09] to-[#0f1712] relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-glg-gold font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-glg-emerald" />
                <span>Deterministic Technical Scoping</span>
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Ready to Commission a Tailored Software System?
              </h3>
              <p className="text-xs sm:text-sm text-glg-text-secondary leading-relaxed">
                Whether deploying high-traffic booking platforms, hospital directories, enterprise school management, or low-latency Go transactional backends, Great Light Group delivers mathematical rigor and production reliability.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/233594273358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shadow-gold-glow hover:scale-105"
                >
                  Direct WhatsApp Scoping (+233 59 427 3358)
                </a>
                <Link
                  href="/software#contact"
                  className="px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white hover:bg-white/20 transition-all border border-white/15"
                >
                  Technical Enquiry Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SoftwareFooter />

      {/* Live Preview Modal */}
      <LivePreviewModal
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </div>
  );
}
