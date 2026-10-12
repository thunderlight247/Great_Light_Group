'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Code2, Film, Sparkles } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

interface NavbarProps {
  activeDiscipline: 'all' | 'software' | 'media';
  onSelectDiscipline: (discipline: 'all' | 'software' | 'media') => void;
}

export default function Navbar({ activeDiscipline, onSelectDiscipline }: NavbarProps) {
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
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-glg-gold rounded-xl p-1"
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
              <span className="font-serif font-black text-lg sm:text-xl leading-tight tracking-tight text-white group-hover:text-glg-gold transition-colors">
                {BRAND_DATA.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-glg-gold font-bold">
                {BRAND_DATA.motto}
              </span>
            </div>
          </Link>

          {/* Desktop Discipline Switcher Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 bg-glg-bg-elevated/80 rounded-full border border-glg-gold/20 backdrop-blur-md shadow-lg">
            <button
              onClick={() => onSelectDiscipline('all')}
              className={`px-4 py-1.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                activeDiscipline === 'all'
                  ? 'bg-glg-gold text-glg-bg font-bold shadow-gold-glow'
                  : 'text-glg-text-secondary hover:text-white hover:bg-white/5'
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => onSelectDiscipline('software')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                activeDiscipline === 'software'
                  ? 'bg-glg-emerald text-glg-bg font-bold shadow-emerald-glow'
                  : 'text-glg-text-secondary hover:text-glg-emerald hover:bg-white/5'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Software &amp; Tech
            </button>
            <button
              onClick={() => onSelectDiscipline('media')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                activeDiscipline === 'media'
                  ? 'bg-glg-gold-champagne text-glg-bg font-bold shadow-gold-glow'
                  : 'text-glg-text-secondary hover:text-glg-gold hover:bg-white/5'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              Media &amp; Film
            </button>
          </nav>

          {/* Desktop Right Links & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#showcase"
              className="text-xs font-mono uppercase tracking-wider text-glg-text-secondary hover:text-glg-gold transition-colors"
            >
              Standard
            </a>
            <a
              href="#services"
              className="text-xs font-mono uppercase tracking-wider text-glg-text-secondary hover:text-glg-gold transition-colors"
            >
              Services
            </a>
            <a
              href="#story"
              className="text-xs font-mono uppercase tracking-wider text-glg-text-secondary hover:text-glg-gold transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-glg-gold text-glg-bg hover:bg-glg-gold-bright transition-all shadow-gold-glow hover:scale-105"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white hover:bg-white/15 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-glg-bg border-b border-glg-gold/20 px-4 pt-3 pb-8 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2 pt-2 pb-4 border-b border-white/10">
            <div className="text-[11px] uppercase font-mono tracking-wider text-glg-gold font-bold px-1">
              Select Discipline
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => {
                  onSelectDiscipline('all');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs font-mono font-bold rounded-lg text-center ${
                  activeDiscipline === 'all'
                    ? 'bg-glg-gold text-black'
                    : 'bg-white/5 text-glg-text-secondary'
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  onSelectDiscipline('software');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs font-mono font-bold rounded-lg text-center flex items-center justify-center gap-1 ${
                  activeDiscipline === 'software'
                    ? 'bg-glg-emerald text-black'
                    : 'bg-white/5 text-glg-text-secondary'
                }`}
              >
                <Code2 className="w-3 h-3" />
                Software
              </button>
              <button
                onClick={() => {
                  onSelectDiscipline('media');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs font-mono font-bold rounded-lg text-center flex items-center justify-center gap-1 ${
                  activeDiscipline === 'media'
                    ? 'bg-glg-gold-champagne text-black'
                    : 'bg-white/5 text-glg-text-secondary'
                }`}
              >
                <Film className="w-3 h-3" />
                Media
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4 font-mono text-sm">
            <a
              href="#software"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              01 Software Projects
            </a>
            <a
              href="#media"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              02 Media &amp; Creative Gallery
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              03 Services (12 Tech + 4 Media)
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 text-glg-text-secondary hover:text-white"
            >
              04 About Great Light Group
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-glg-gold text-black shadow-gold-glow"
            >
              Initiate Project Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
