'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, Github, Mail, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-glg-bg text-glg-text-primary border-t border-glg-gold/20 py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-glg-gold/50 shadow-gold-glow">
                <Image
                  src={BRAND_DATA.logo}
                  alt={BRAND_DATA.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-black text-2xl text-white">
                {BRAND_DATA.name}
              </span>
            </div>

            <p className="font-serif italic text-sm text-glg-gold">
              &ldquo;{BRAND_DATA.motto}&rdquo;
            </p>

            <p className="text-xs text-glg-text-secondary leading-relaxed max-w-sm">
              An authoritative dual-discipline studio dedicated strictly to high-standard Software &amp; Systems Engineering and Cinematic Creative Media.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-glg-text-secondary hover:text-glg-gold hover:border-glg-gold transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_DATA.email}`}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-glg-text-secondary hover:text-glg-gold hover:border-glg-gold transition-colors"
                aria-label="Email Great Light Group"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Software Links */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-glg-gold font-bold">
              Software Disciplines
            </div>
            <ul className="space-y-2.5 text-xs text-glg-text-secondary font-mono">
              <li>
                <a href="#software" className="hover:text-glg-emerald transition-colors">
                  01 Baduwa Locs &amp; Naturals
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-glg-emerald transition-colors">
                  02 Elgyboat Enterprise
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-glg-emerald transition-colors">
                  03 3 Swami Stars Limited
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-glg-emerald transition-colors">
                  04 LearnMate AI Study Assistant
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-glg-emerald transition-colors">
                  05 Double-Entry Bank Ledger (Go)
                </a>
              </li>
            </ul>
          </div>

          {/* Media Links */}
          <div className="md:col-span-2 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-glg-gold font-bold">
              Creative Media
            </div>
            <ul className="space-y-2.5 text-xs text-glg-text-secondary font-mono">
              <li>
                <a href="#media" className="hover:text-glg-gold transition-colors">
                  Cinematography Reels
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-glg-gold transition-colors">
                  Editorial Photography
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-glg-gold transition-colors">
                  Graphic Typographic Posters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-glg-gold transition-colors">
                  DaVinci Color Grading
                </a>
              </li>
            </ul>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-white/5 border border-glg-gold/30 text-glg-gold hover:bg-glg-gold hover:text-black transition-all shadow-gold-glow"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] font-mono text-glg-text-muted mt-8 md:mt-0 text-left md:text-right">
              Powered by Next.js 14, Lenis &amp; GSAP ScrollTrigger
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-glg-text-muted">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Verified Dual-Discipline Portfolio</span>
            <span className="text-glg-gold">WhatsApp: 0594273358</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
