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
    <footer className="bg-glg-ink text-glg-paper border-t border-glg-gold/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-glg-gold/40">
                <Image
                  src={BRAND_DATA.logo}
                  alt={BRAND_DATA.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-serif font-bold text-xl text-white">
                {BRAND_DATA.name}
              </span>
            </div>

            <p className="font-serif italic text-sm text-glg-gold-light">
              &ldquo;{BRAND_DATA.motto}&rdquo;
            </p>

            <p className="text-xs text-glg-paper/70 leading-relaxed max-w-sm">
              An independent studio dedicated strictly to high-standard Software & Systems Engineering and Cinematic Creative Media.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-glg-paper hover:text-glg-gold hover:border-glg-gold transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_DATA.email}`}
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-glg-paper hover:text-glg-gold hover:border-glg-gold transition-colors"
                aria-label="Email Great Light Group"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Software Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-glg-gold font-bold">
              Software Disciplines
            </div>
            <ul className="space-y-2 text-xs text-glg-paper/75">
              <li>
                <a href="#software" className="hover:text-white transition-colors">
                  Baduwa Locs & Naturals
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-white transition-colors">
                  Elgyboat Enterprise
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-white transition-colors">
                  3 Swami Stars Limited
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-white transition-colors">
                  LearnMate AI Study Assistant
                </a>
              </li>
              <li>
                <a href="#software" className="hover:text-white transition-colors">
                  Double-Entry Bank Ledger (Go)
                </a>
              </li>
            </ul>
          </div>

          {/* Media Links */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-glg-gold font-bold">
              Creative Media
            </div>
            <ul className="space-y-2 text-xs text-glg-paper/75">
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  Cinematography Reels
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  Editorial Photography
                </a>
              </li>
              <li>
                <a href="#media" className="hover:text-white transition-colors">
                  Graphic Typographic Posters
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Post-Production Grading
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Enquire & Back to Top */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-glg-paper hover:text-glg-gold hover:border-glg-gold transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] font-mono text-glg-paper/50 mt-6 md:mt-0 text-left md:text-right">
              Built with Next.js 14, TypeScript &amp; Tailwind CSS
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-glg-paper/60">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_DATA.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Verified Dual-Discipline Portfolio</span>
            <span>Ghana &amp; Global Operations</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
