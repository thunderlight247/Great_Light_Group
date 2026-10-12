'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Film, Camera, Palette, Info, Sparkles } from 'lucide-react';
import { MEDIA_ITEMS, MediaItem } from '@/data/portfolioData';
import { usePrefersReducedMotion } from '@/lib/motion/useMotion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface MediaSectionProps {
  onOpenLightbox: (item: MediaItem) => void;
}

export default function MediaSection({ onOpenLightbox }: MediaSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All Work');
  const [selectedVideo, setSelectedVideo] = useState<'potone' | 'silent'>('potone');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = usePrefersReducedMotion();

  const categories = ['All Work', 'Cinematography', 'Editorial Photography', 'Graphic Typography'];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const filteredItems =
    activeCategory === 'All Work'
      ? MEDIA_ITEMS
      : MEDIA_ITEMS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (prefersReduced || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const cards = galleryRef.current?.querySelectorAll('.media-gallery-card');
      if (!cards) return;

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: (index % 3) * 0.12,
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
      id="media"
      className="py-24 md:py-36 bg-glg-bg text-glg-text-primary border-b border-glg-gold/15 scroll-mt-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-3">
              Cinematography · Photography · Graphic Design
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Cinematic Media &amp; <br />
              <span className="font-normal italic text-glg-gold-champagne">
                Visual Curation.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-text-secondary leading-relaxed">
            Curated visual exhibition celebrating chiaroscuro directional light, organic human texture, deliberate pacing, and typographic clarity.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-3 border-b border-glg-gold/15">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-mono font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-glg-gold text-glg-bg shadow-gold-glow'
                  : 'bg-white/5 text-glg-text-muted border border-white/10 hover:border-glg-gold/40 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Video Player (Cinematography Showcase) */}
        {(activeCategory === 'All Work' || activeCategory === 'Cinematography') && (
          <div className="mb-16">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-glg-gold" />
                <span className="text-xs uppercase tracking-wider font-mono text-glg-gold font-bold">
                  Featured Motion Exhibition
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedVideo('potone');
                    setIsPlaying(false);
                  }}
                  className={`px-3.5 py-1 text-xs rounded-full font-mono transition-colors ${
                    selectedVideo === 'potone'
                      ? 'bg-glg-gold text-black font-bold shadow-gold-glow'
                      : 'bg-white/5 text-glg-text-muted hover:text-white border border-white/10'
                  }`}
                >
                  01 UI Motion Reel
                </button>
                <button
                  onClick={() => {
                    setSelectedVideo('silent');
                    setIsPlaying(false);
                  }}
                  className={`px-3.5 py-1 text-xs rounded-full font-mono transition-colors ${
                    selectedVideo === 'silent'
                      ? 'bg-glg-gold text-black font-bold shadow-gold-glow'
                      : 'bg-white/5 text-glg-text-muted hover:text-white border border-white/10'
                  }`}
                >
                  02 Cinematic Study
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-glg-gold/30 shadow-2xl group">
              <video
                ref={videoRef}
                src={selectedVideo === 'potone' ? '/media/video/potone.mp4' : '/media/video/silent.mp4'}
                className="w-full h-full object-cover"
                loop
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Video Overlay Play Trigger */}
              <div
                onClick={togglePlay}
                className={`absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}
              >
                <button
                  className="w-20 h-20 rounded-full bg-glg-gold text-black flex items-center justify-center shadow-gold-glow transition-transform duration-300 hover:scale-110 focus:outline-none"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                </button>
              </div>

              {/* Caption Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between text-xs pointer-events-none">
                <div>
                  <span className="font-semibold text-white block text-sm">
                    {selectedVideo === 'potone'
                      ? 'Potone Interaction Motion Reel · High-Framerate Micro-Interactions'
                      : 'Atmospheric Cinematography & Grading Study · Natural Lighting & Skin Tones'}
                  </span>
                  <span className="text-[11px] font-mono text-glg-gold">
                    Paced sequence · Color graded in DaVinci Resolve · 4K Master
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Media & Poster Grid */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems
            .filter((item) => item.type !== 'video')
            .map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="media-gallery-card group relative cursor-pointer rounded-2xl overflow-hidden glass-panel shadow-editorial hover:shadow-editorial-hover transition-all duration-300 hover:border-glg-gold/60 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Poster or Photography Display */}
                {item.type === 'poster' ? (
                  <div
                    className={`min-h-[380px] p-8 sm:p-10 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02] ${
                      item.src === 'poster-1'
                        ? 'bg-glg-emerald-dark text-white'
                        : item.src === 'poster-2'
                        ? 'bg-glg-gold-dark text-glg-bg'
                        : 'bg-glg-bg-elevated text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest font-mono font-bold">
                        Great Light Creative
                      </span>
                      <Palette className="w-4 h-4 opacity-80" />
                    </div>

                    <div className="my-auto py-8">
                      <div className="text-4xl sm:text-5xl font-black font-sans tracking-tight uppercase leading-[0.92]">
                        {item.title}
                      </div>
                      <div className="h-1 w-14 bg-glg-gold mt-4" />
                    </div>

                    <div className="text-xs font-mono tracking-wider opacity-80">
                      Editorial Typographic Study · Brand Art Direction
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glg-bg-elevated via-transparent to-transparent opacity-70" />

                    {/* Attribution Reference Tag */}
                    {item.isReference && (
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-mono text-glg-gold uppercase tracking-wider flex items-center gap-1 border border-glg-gold/30">
                        <Info className="w-3 h-3" />
                        <span>Visual Reference</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Caption Bar */}
                <div className="p-5 sm:p-6 bg-glg-bg-elevated border-t border-glg-gold/15">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-glg-gold mb-1">
                    {item.client || item.category}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-glg-text-secondary line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
