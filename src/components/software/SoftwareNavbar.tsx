'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Code2, Film, ArrowLeft } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function SoftwareNavbar() {
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
        scrolled ? 'glass-nav py-3.5 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark & Title */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none rounded-xl"
            title="Return to Gateway"
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-glg-gold/50 shadow-gold-glow transition-transform duration-300 group-hover:scale-105">
              <Image
                src={BRAND_DATA.logo}
                alt={BRAND_DATA.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-black text-lg sm:text-xl leading-tight tracking-tight text-white group-hover:text-glg-emerald transition-colors">
                {BRAND_DATA.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-glg-emerald font-bold flex items-center gap-1.5">
                <Code2 className="w-2.5 h-2.5" />
                <span>Technology &amp; Software</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-glg-text-secondary">
            <Link href="/software#projects" className="hover:text-glg-emerald transition-colors">
              01 Projects
            </Link>
            <Link href="/software/services" className="hover:text-glg-emerald transition-colors">
              02 Services
            </Link>
            <Link href="/software/reviews" className="hover:text-glg-emerald transition-colors text-glg-emerald font-semibold">
              03 Reviews
            </Link>
            <Link href="/software#skills" className="hover:text-glg-emerald transition-colors">
              04 Tech Stack
            </Link>
            <Link href="/software#story" className="hover:text-glg-emerald transition-colors">
              05 About
            </Link>
          </nav>

          {/* Desktop Right Switcher & CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono text-glg-text-muted hover:text-white hover:bg-white/5 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Gateway</span>
            </Link>

            <Link
              href="/media"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono font-semibold bg-white/5 text-glg-gold hover:text-white hover:bg-glg-gold/20 border border-glg-gold/30 transition-all"
            >
              <Film className="w-3.5 h-3.5" />
              <span>Media Division ↗</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-black hover:bg-glg-gold-bright transition-all shadow-gold-glow hover:scale-105"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/15 focus:outline-none min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-glg-bg/95 backdrop-blur-xl border-b border-glg-gold/20 px-4 pt-3 pb-8 shadow-2xl animate-fadeIn max-h-[calc(100vh-75px)] overflow-y-auto overscroll-contain">
          <div className="flex flex-col gap-2 pt-2 pb-4 border-b border-white/10">
            <div className="text-[11px] uppercase font-mono tracking-wider text-glg-emerald font-bold px-1">
              Cross-Division Switch
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs font-mono font-bold rounded-lg text-center bg-white/5 text-glg-text-secondary hover:text-white flex items-center justify-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Portal Gate</span>
              </Link>
              <Link
                href="/media"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-xs font-mono font-bold rounded-lg text-center bg-glg-gold/10 text-glg-gold border border-glg-gold/30 flex items-center justify-center gap-1.5"
              >
                <Film className="w-3.5 h-3.5" />
                <span>Media</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 font-mono text-sm">
            <Link
              href="/software#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              01 Software Projects
            </Link>
            <Link
              href="/software/services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              02 Services (12 Offerings)
            </Link>
            <Link
              href="/software/reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-emerald font-semibold hover:text-white"
            >
              03 Client Reviews
            </Link>
            <Link
              href="/software#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              04 Tech Skills &amp; Stack
            </Link>
            <Link
              href="/software#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              05 Engineering Ethos
            </Link>
            <Link
              href="/software#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-glg-gold text-black shadow-gold-glow"
            >
              Initiate Software Project
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
