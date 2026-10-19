'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Code2, Film, Phone, Mail, Terminal, Github } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function SoftwareFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-glg-bg-elevated border-t border-glg-gold/15 pt-16 pb-12 text-glg-text-secondary text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-glg-gold/50 shadow-gold-glow">
                <Image
                  src={BRAND_DATA.logo}
                  alt={BRAND_DATA.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-lg text-white">
                  {BRAND_DATA.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-glg-emerald font-bold">
                  Technology &amp; Software Division
                </span>
              </div>
            </div>

            <p className="text-xs text-glg-text-muted leading-relaxed max-w-sm">
              High-concurrency Go exchange backends, full-stack Next.js web applications, Flutter mobile readers, and deterministic database architecture.
            </p>

            <div className="font-serif italic text-glg-gold text-sm pt-2">
              &ldquo;{BRAND_DATA.motto}&rdquo;
            </div>
          </div>

          {/* Software Links Col */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <div className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Software Showcase
            </div>
            <ul className="space-y-2.5">
              <li>
                <Link href="/software#projects" className="hover:text-glg-emerald transition-colors">
                  01 Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/software#skills" className="hover:text-glg-emerald transition-colors">
                  02 Tech Stack &amp; Languages
                </Link>
              </li>
              <li>
                <Link href="/software/services" className="hover:text-glg-emerald transition-colors">
                  03 12 Software Services
                </Link>
              </li>
              <li>
                <Link href="/software/reviews" className="hover:text-glg-emerald transition-colors text-glg-emerald font-semibold">
                  04 Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/software#story" className="hover:text-glg-emerald transition-colors">
                  05 Engineering Ethos
                </Link>
              </li>
              <li>
                <Link href="/software#contact" className="hover:text-glg-emerald transition-colors">
                  06 Scoping &amp; Quotation
                </Link>
              </li>
            </ul>
          </div>

          {/* Cross Division Switcher Card */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-bold mb-2">
              Creative Division
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-glg-gold/30 space-y-3">
              <div className="flex items-center gap-2 text-glg-gold font-mono text-xs font-bold">
                <Film className="w-4 h-4" />
                <span>Looking for commercial cinematography &amp; stills?</span>
              </div>
              <p className="text-xs text-glg-text-muted leading-relaxed">
                Explore our 4K motion reels, editorial studio photography, and color grading in our dedicated Media portfolio.
              </p>
              <Link
                href="/media"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-glg-gold hover:text-white transition-colors"
              >
                <span>Enter Media Division</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-glg-text-muted">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_DATA.name} · All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Gateway
            </Link>
            <Link href="/software" className="text-glg-emerald hover:text-white transition-colors">
              Software
            </Link>
            <Link href="/media" className="hover:text-glg-gold transition-colors">
              Media
            </Link>
            <a
              href="https://github.com/thunderlight247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors ml-4"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
