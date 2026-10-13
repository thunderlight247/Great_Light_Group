'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Film, Camera, Code2, ArrowLeft } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function MediaNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#faf8f5]/92 backdrop-blur-xl py-3.5 border-b border-[#b89047]/20 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark & Title */}
          <div className="flex items-center gap-3.5">
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none rounded-xl"
              title="Return to Gateway"
            >
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#b89047]/50 shadow-[0_0_15px_rgba(184,144,71,0.2)] transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={BRAND_DATA.logo}
                  alt={BRAND_DATA.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-black text-lg sm:text-xl leading-tight tracking-tight text-[#121115] group-hover:text-[#b89047] transition-colors">
                  {BRAND_DATA.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#b89047] font-bold flex items-center gap-1.5">
                  <Film className="w-2.5 h-2.5 text-[#b89047]" />
                  <span>Media &amp; Creative Atelier</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[#4b4754]">
            <a href="#reels" className="hover:text-[#b89047] transition-colors">
              01 Motion Reels
            </a>
            <a href="#photography" className="hover:text-[#b89047] transition-colors">
              02 Photography
            </a>
            <Link href="/media/services" className="hover:text-[#b89047] transition-colors">
              03 Production Services
            </Link>
            <a href="#ethos" className="hover:text-[#b89047] transition-colors">
              04 Creative Ethos
            </a>
          </nav>

          {/* Desktop Right Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono text-[#787280] hover:text-[#121115] hover:bg-black/5 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Gateway</span>
            </Link>

            <Link
              href="/software"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-[#10b981]/10 text-[#065f46] hover:text-white hover:bg-[#10b981] border border-[#10b981]/30 transition-all"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Software Division ↗</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#b89047] text-white hover:bg-[#9e7526] transition-all shadow-[0_4px_16px_rgba(184,144,71,0.25)] hover:scale-105"
            >
              <span>Book Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#121115] hover:bg-black/5 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5]/98 backdrop-blur-xl border-b border-[#b89047]/20 px-4 pt-3 pb-8 shadow-2xl animate-fadeIn max-h-[calc(100vh-75px)] overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-2 pt-2 pb-4 border-b border-black/10">
            <div className="text-[11px] uppercase font-mono tracking-wider text-[#b89047] font-bold px-1">
              Cross-Division Switch
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs font-mono font-bold rounded-lg text-center bg-black/5 text-[#4b4754] hover:text-[#121115] flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Portal Gate</span>
              </Link>
              <Link
                href="/software"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs font-mono font-bold rounded-lg text-center bg-[#10b981]/10 text-[#065f46] border border-[#10b981]/30 flex items-center justify-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Software</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 font-mono text-sm">
            <a
              href="#reels"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-[#4b4754] hover:text-[#b89047]"
            >
              01 4K Motion Reels
            </a>
            <a
              href="#photography"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-[#4b4754] hover:text-[#b89047]"
            >
              02 Editorial Photography
            </a>
            <Link
              href="/media/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-[#4b4754] hover:text-[#b89047]"
            >
              03 Production Services
            </Link>
            <a
              href="#ethos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-[#4b4754] hover:text-[#b89047]"
            >
              04 Creative Ethos
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#b89047] text-white shadow-[0_4px_16px_rgba(184,144,71,0.25)]"
            >
              Book Production Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
