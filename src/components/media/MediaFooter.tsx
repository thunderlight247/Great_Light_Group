'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight, Film, Code2, Phone, Mail, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function MediaFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#09070c] border-t border-[#e8d5b5]/15 pt-16 pb-12 text-[#d4c5b9] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#e8d5b5]/50 shadow-[0_0_15px_rgba(232,213,181,0.2)]">
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
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#e8d5b5] font-bold">
                  Media &amp; Creative Atelier
                </span>
              </div>
            </div>

            <p className="text-xs text-[#a39ea8] leading-relaxed max-w-sm">
              Directional chiaroscuro lighting, natural human textures, rhythmic commercial editing, and precision color grading in DaVinci Resolve.
            </p>

            <div className="font-serif italic text-[#e8d5b5] text-sm pt-2">
              &ldquo;{BRAND_DATA.motto}&rdquo;
            </div>
          </div>

          {/* Media Links Col */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <div className="text-xs uppercase tracking-wider text-white font-bold mb-4">
              Creative Portfolio
            </div>
            <ul className="space-y-2.5">
              <li>
                <a href="#reels" className="hover:text-[#e8d5b5] transition-colors">
                  01 Motion Reels (4K)
                </a>
              </li>
              <li>
                <a href="#photography" className="hover:text-[#e8d5b5] transition-colors">
                  02 Editorial Photography
                </a>
              </li>
              <li>
                <Link href="/media/services" className="hover:text-[#e8d5b5] transition-colors">
                  03 Production Services
                </Link>
              </li>
              <li>
                <a href="#ethos" className="hover:text-[#e8d5b5] transition-colors">
                  04 Creative Ethos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#e8d5b5] transition-colors">
                  05 Book Production
                </a>
              </li>
            </ul>
          </div>

          {/* Cross Division Switcher Card */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs uppercase font-mono tracking-wider text-white font-bold mb-2">
              Technology Division
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-[#10b981]/30 space-y-3">
              <div className="flex items-center gap-2 text-[#10b981] font-mono text-xs font-bold">
                <Code2 className="w-4 h-4" />
                <span>Looking for software engineering?</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Explore our high-throughput Go backends, Next.js applications, and Flutter mobile readers in our dedicated Technology portfolio.
              </p>
              <Link
                href="/software"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#10b981] hover:text-white transition-colors"
              >
                <span>Enter Technology Division</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#a39ea8]">
          <div>
            &copy; {new Date().getFullYear()} {BRAND_DATA.name} · All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">
              Gateway
            </Link>
            <Link href="/software" className="hover:text-[#10b981] transition-colors">
              Software
            </Link>
            <Link href="/media" className="text-[#e8d5b5] hover:text-white transition-colors">
              Media
            </Link>
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
