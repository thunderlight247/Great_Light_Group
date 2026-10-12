'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Sparkles, Code2, Film } from 'lucide-react';
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
        scrolled
          ? 'bg-glg-paper/90 backdrop-blur-md shadow-sm border-b border-glg-ink/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark & Title */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-glg-gold rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-glg-gold/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src={BRAND_DATA.logo}
                alt={BRAND_DATA.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-tight tracking-tight text-glg-ink group-hover:text-glg-green transition-colors">
                {BRAND_DATA.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-glg-gold-dark font-medium">
                {BRAND_DATA.motto}
              </span>
            </div>
          </Link>

          {/* Desktop Discipline Switcher Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-glg-ink/5 rounded-full border border-glg-ink/5">
            <button
              onClick={() => onSelectDiscipline('all')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeDiscipline === 'all'
                  ? 'bg-glg-ink text-glg-paper shadow-sm'
                  : 'text-glg-ink/70 hover:text-glg-ink hover:bg-glg-ink/5'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => onSelectDiscipline('software')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeDiscipline === 'software'
                  ? 'bg-glg-green text-glg-paper shadow-sm'
                  : 'text-glg-ink/70 hover:text-glg-green hover:bg-glg-ink/5'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Software & Tech
            </button>
            <button
              onClick={() => onSelectDiscipline('media')}
              className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeDiscipline === 'media'
                  ? 'bg-glg-gold text-glg-ink shadow-sm'
                  : 'text-glg-ink/70 hover:text-glg-gold-dark hover:bg-glg-ink/5'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              Media & Creative
            </button>
          </nav>

          {/* Desktop Right Links & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="#services"
              className="text-xs font-medium uppercase tracking-wider text-glg-ink/80 hover:text-glg-green transition-colors"
            >
              Services
            </a>
            <a
              href="#story"
              className="text-xs font-medium uppercase tracking-wider text-glg-ink/80 hover:text-glg-green transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-glg-green text-glg-paper hover:bg-glg-green-light transition-all shadow-sm hover:shadow"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-glg-ink hover:bg-glg-ink/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-glg-paper border-b border-glg-ink/10 px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-2 pt-2 pb-4 border-b border-glg-ink/10">
            <div className="text-[11px] uppercase tracking-wider text-glg-muted px-2 font-semibold">
              Filter Portfolio
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => {
                  onSelectDiscipline('all');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs font-semibold rounded-lg text-center ${
                  activeDiscipline === 'all'
                    ? 'bg-glg-ink text-white'
                    : 'bg-glg-ink/5 text-glg-ink'
                }`}
              >
                All
              </button>
              <button
                onClick={() => {
                  onSelectDiscipline('software');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1 ${
                  activeDiscipline === 'software'
                    ? 'bg-glg-green text-white'
                    : 'bg-glg-ink/5 text-glg-ink'
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
                className={`py-2 text-xs font-semibold rounded-lg text-center flex items-center justify-center gap-1 ${
                  activeDiscipline === 'media'
                    ? 'bg-glg-gold text-glg-ink'
                    : 'bg-glg-ink/5 text-glg-ink'
                }`}
              >
                <Film className="w-3 h-3" />
                Media
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <a
              href="#software"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium py-1.5 px-2 text-glg-ink hover:text-glg-green"
            >
              Software Projects
            </a>
            <a
              href="#media"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium py-1.5 px-2 text-glg-ink hover:text-glg-green"
            >
              Media & Creative Gallery
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium py-1.5 px-2 text-glg-ink hover:text-glg-green"
            >
              Core Services (12 Tech + 4 Media)
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium py-1.5 px-2 text-glg-ink hover:text-glg-green"
            >
              About Great Light Group
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-glg-green text-glg-paper"
            >
              Initiate Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
