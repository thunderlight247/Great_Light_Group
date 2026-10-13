'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Sparkles, Eye, Palette } from 'lucide-react';
import { MEDIA_ITEMS, MediaItem } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MediaGalleryOnlyProps {
  onOpenLightbox: (item: MediaItem) => void;
}

export default function MediaGalleryOnly({ onOpenLightbox }: MediaGalleryOnlyProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const categories = ['All', 'Editorial Photography', 'Graphic Typography'];

  const filteredItems = MEDIA_ITEMS.filter((item) => {
    if (item.type === 'video') return false; // videos are featured in MediaVideoCinema
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.creative-card');
      if (!cards) return;

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (i % 3) * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredItems, prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="photography"
      className="py-24 md:py-36 relative border-b border-glg-gold/15 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4" />
              <span>Editorial Stills &amp; Typographic Layouts</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Curated Photography &amp; <br />
              <span className="font-normal italic text-glg-gold">
                Typographic Posters.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            High-fashion hair texture, architectural form, Chiaroscuro studio contrast, and editorial typography designed for cultural longevity.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-3 border-b border-glg-gold/15">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs font-mono font-semibold rounded-full transition-all ${
                activeCategory === cat
                  ? 'bg-glg-gold text-black font-bold shadow-gold-glow'
                  : 'bg-white/5 text-glg-text-muted hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="creative-card group relative cursor-pointer rounded-2xl overflow-hidden glass-panel shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-gold/60 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Media Container */}
              {item.type === 'poster' ? (
                <div
                  className={`min-h-[380px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02] ${
                    item.src === 'poster-1'
                      ? 'bg-gradient-to-br from-glg-emerald-dark to-black text-white'
                      : item.src === 'poster-2'
                      ? 'bg-gradient-to-br from-[#2a2215] to-[#120e09] text-glg-gold-light'
                      : 'bg-gradient-to-br from-glg-bg-elevated to-black text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase font-mono tracking-widest px-2.5 py-1 rounded bg-white/10">
                      Poster No. {item.id.replace('m', '')}
                    </span>
                    <Sparkles className="w-4 h-4 text-glg-gold" />
                  </div>

                  <div className="my-8">
                    <div className="text-4xl sm:text-5xl font-black font-sans tracking-tight uppercase leading-none">
                      {item.title}
                    </div>
                    <div className="text-xs font-mono opacity-80 mt-2">
                      Great Light Editorial Art Direction
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-glg-gold">
                    <span>Click to inspect</span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              ) : (
                <div className="relative h-80 sm:h-96 w-full bg-black overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] uppercase font-mono tracking-wider bg-black/75 text-glg-gold px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
                      {item.category}
                    </span>
                    {item.isReference && (
                      <span className="text-[10px] font-mono bg-white/15 text-white/80 px-2 py-0.5 rounded backdrop-blur-md">
                        Visual Reference
                      </span>
                    )}
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-serif font-bold text-xl leading-snug group-hover:text-glg-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-glg-text-muted line-clamp-1 mt-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Card Footer */}
              <div className="p-4 bg-glg-bg-elevated/90 border-t border-white/5 flex items-center justify-between text-xs font-mono text-glg-text-muted">
                <span>{item.client || 'Great Light Collection'}</span>
                <span className="text-glg-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <Eye className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
