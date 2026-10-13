'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Sparkles, Eye, MessageSquare, Aperture, Sliders } from 'lucide-react';
import { MEDIA_ITEMS, MediaItem } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MediaGalleryOnlyProps {
  onOpenLightbox: (item: MediaItem, allItems: MediaItem[]) => void;
}

export default function MediaGalleryOnly({ onOpenLightbox }: MediaGalleryOnlyProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  // Photography images only (videos are in MediaVideoCinema)
  const photographyItems = useMemo(
    () => MEDIA_ITEMS.filter((item) => item.type === 'image'),
    []
  );

  const categories = useMemo(() => {
    return [
      { id: 'All', label: 'All Works', count: photographyItems.length },
      {
        id: 'Bridal & Nuptials',
        label: 'Bridal & Nuptials',
        count: photographyItems.filter((i) => i.category === 'Bridal & Nuptials').length,
      },
      {
        id: 'Ceremony & Cultural',
        label: 'Ceremony & Cultural',
        count: photographyItems.filter((i) => i.category === 'Ceremony & Cultural').length,
      },
      {
        id: 'Editorial & Portraiture',
        label: 'Editorial & Portraiture',
        count: photographyItems.filter((i) => i.category === 'Editorial & Portraiture').length,
      },
      {
        id: 'Cinema & Equipment',
        label: 'Cinema & Equipment',
        count: photographyItems.filter((i) => i.category === 'Cinema & Equipment').length,
      },
    ];
  }, [photographyItems]);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return photographyItems;
    return photographyItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, photographyItems]);

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll('.exhibition-frame');
      if (!cards) return;

      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: (i % 3) * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
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
      className="py-24 md:py-36 relative border-b border-[#e8decb] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-[#9e7526] font-semibold mb-3 flex items-center gap-2">
              <Camera className="w-4 h-4 text-[#b89047]" />
              <span>Great LENS · Studio Archive &amp; Lookbook</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-[#121115] tracking-tight leading-[1.05]">
              Curated Photography &amp; <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#b89047] via-[#c59b3f] to-[#9e7526]">
                Editorial Stills.
              </span>
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-sm text-[#4b4754] leading-relaxed font-sans">
              Every frame is an authentic commission captured by Great Light Creative. From regal Aso-Oke bridal couture and church solemnities to cinema camera rigs and directional chiaroscuro portraiture.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#9e7526] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#b89047] animate-pulse" />
              <span>22 Original Works In Current Exhibition</span>
            </div>
          </div>
        </div>

        {/* Exhibition Category Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-[#e8decb]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#b89047] text-white font-bold shadow-[0_4px_16px_rgba(184,144,71,0.25)] scale-105'
                  : 'bg-white text-[#4b4754] hover:text-[#121115] hover:bg-[#faf8f5] border border-[#e8decb]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-[#faf8f5] text-[#787280] border border-[#e8decb]/60'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Editorial Contact Sheet Gallery Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0 || item.id === 'glg-media-01' || item.id === 'glg-media-15';
            const whatsappQuickMessage = encodeURIComponent(
              `Hello Great Light Creative, I love this photograph: "${item.title}" (${item.frameNumber} - ${item.category}). I would like to book a shoot in this style.`
            );

            return (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item, filteredItems)}
                className={`exhibition-frame group relative cursor-pointer rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-[#e8decb] hover:border-[#b89047] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_45px_rgba(184,144,71,0.15)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Top Film Stock Perforation & Metadata Strip */}
                <div className="px-4 py-2.5 bg-[#faf8f5] border-b border-[#e8decb] flex items-center justify-between text-[10px] font-mono text-[#787280] z-10">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#b89047] tracking-wider">
                      {item.frameNumber || `FRAME ${String(index + 1).padStart(2, '0')}`}
                    </span>
                    <span className="text-[#e8decb]">·</span>
                    <span className="uppercase tracking-widest text-[#4b4754]">
                      {item.category}
                    </span>
                  </div>

                  {item.lensInfo && (
                    <div className="hidden sm:flex items-center gap-1.5 text-[#9e7526] bg-[#b89047]/10 px-2 py-0.5 rounded border border-[#b89047]/20">
                      <Aperture className="w-3 h-3 text-[#b89047]" />
                      <span>{item.lensInfo.split('·')[0].trim()}</span>
                    </div>
                  )}
                </div>

                {/* High-Resolution Photo Viewport */}
                <div
                  className={`relative w-full overflow-hidden bg-black ${
                    isFeatured
                      ? 'h-80 sm:h-[450px]'
                      : item.aspectRatio === '2/3'
                      ? 'h-96 sm:h-[420px]'
                      : 'h-80 sm:h-96'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes={
                      isFeatured
                        ? '(max-width: 768px) 100vw, 66vw'
                        : '(max-width: 768px) 100vw, 33vw'
                    }
                  />

                  {/* Subtle Film Grain Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Overlaid Badge */}
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <span className="text-[10px] uppercase font-mono tracking-wider bg-black/75 text-white px-2.5 py-1 rounded-full backdrop-blur-md border border-white/20">
                      {item.badge || 'Great LENS'}
                    </span>
                  </div>

                  {/* Hover Inspect Pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-black/85 text-[#f5eedc] text-xs font-mono font-bold tracking-wider border border-white/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Artwork</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Atelier Caption & Actions */}
                <div className="p-5 sm:p-6 bg-white border-t border-[#e8decb] flex flex-col justify-between gap-3">
                  <div>
                    <div className="text-[11px] font-mono text-[#787280] mb-1">
                      {item.client || 'Great Light Collection'}
                    </div>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-[#121115] group-hover:text-[#b89047] transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4b4754] line-clamp-2 mt-1 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#e8decb]/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#787280] flex items-center gap-1.5 group-hover:text-[#b89047]">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Enlarge Frame</span>
                    </span>

                    <a
                      href={`https://wa.me/233594273358?text=${whatsappQuickMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#faf8f5] hover:bg-[#b89047] hover:text-white text-[#4b4754] text-[11px] transition-all border border-[#e8decb] hover:border-[#b89047]"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Book Style</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
