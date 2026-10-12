'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Play, Pause, Maximize2, Sparkles, Film, Camera, Palette, Info } from 'lucide-react';
import { MEDIA_ITEMS, MediaItem } from '@/data/portfolioData';

interface MediaSectionProps {
  onOpenLightbox: (item: MediaItem) => void;
}

export default function MediaSection({ onOpenLightbox }: MediaSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All Work');
  const [selectedVideo, setSelectedVideo] = useState<'potone' | 'silent'>('potone');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return (
    <section id="media" className="py-24 md:py-32 bg-glg-ink text-glg-paper border-b border-glg-gold/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-2">
              Visual Direction & Craft
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight">
              Cinematic Media & <br />
              <span className="font-normal italic text-glg-gold-light">Creative Storytelling.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-glg-paper/70 leading-relaxed">
            Curated visual exhibition celebrating human texture, directional light, deliberate pacing, and typographic clarity. Designed like a gallery, not a template.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12 pb-2 border-b border-glg-paper/10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-glg-gold text-glg-ink shadow-sm'
                  : 'bg-white/5 text-glg-paper/70 border border-white/10 hover:border-glg-gold/40 hover:text-white'
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
                <span className="text-xs uppercase tracking-wider font-mono text-glg-gold">
                  Featured Motion Reel
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedVideo('potone');
                    setIsPlaying(false);
                  }}
                  className={`px-3 py-1 text-xs rounded-full font-mono transition-colors ${
                    selectedVideo === 'potone'
                      ? 'bg-glg-gold text-glg-ink font-bold'
                      : 'bg-white/5 text-glg-paper/70 hover:text-white'
                  }`}
                >
                  01 UI Motion Reel
                </button>
                <button
                  onClick={() => {
                    setSelectedVideo('silent');
                    setIsPlaying(false);
                  }}
                  className={`px-3 py-1 text-xs rounded-full font-mono transition-colors ${
                    selectedVideo === 'silent'
                      ? 'bg-glg-gold text-glg-ink font-bold'
                      : 'bg-white/5 text-glg-paper/70 hover:text-white'
                  }`}
                >
                  02 Cinematic Study
                </button>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-glg-gold/20 shadow-2xl group">
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
                className={`absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity duration-300 ${
                  isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                }`}
              >
                <button
                  className="w-16 h-16 rounded-full bg-glg-gold text-glg-ink flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                </button>
              </div>

              {/* Caption Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-glg-paper/90 pointer-events-none">
                <div>
                  <span className="font-semibold text-white block">
                    {selectedVideo === 'potone'
                      ? 'Potone Interaction Motion Reel · Choreographed App UI'
                      : 'Atmospheric Cinematography & Grading Study · Natural Lighting'}
                  </span>
                  <span className="text-[11px] text-glg-gold">
                    Paced framerate · DaVinci Resolve color grading · Zero compression artifacting
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Editorial Media & Poster Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems
            .filter((item) => item.type !== 'video')
            .map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-editorial transition-all duration-300 hover:shadow-editorial-hover hover:border-glg-gold/50 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Poster or Photography Display */}
                {item.type === 'poster' ? (
                  <div
                    className={`min-h-[360px] p-8 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02] ${
                      item.src === 'poster-1'
                        ? 'bg-glg-green text-white'
                        : item.src === 'poster-2'
                        ? 'bg-glg-sand text-glg-ink'
                        : 'bg-glg-slate text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-widest font-mono font-bold">
                        Great Light Design
                      </span>
                      <Palette className="w-4 h-4 opacity-80" />
                    </div>

                    <div className="my-auto py-6">
                      <div className="text-4xl sm:text-5xl font-black font-sans tracking-tight uppercase leading-[0.92]">
                        {item.title}
                      </div>
                      <div className="h-1 w-12 bg-glg-gold mt-4" />
                    </div>

                    <div className="text-xs font-mono tracking-wider opacity-80">
                      Editorial Typographic Study · Brand Identity
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/20">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-glg-ink via-transparent to-transparent opacity-60" />

                    {/* Attribution / Reference Tag */}
                    {item.isReference && (
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-glg-gold uppercase tracking-wider flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        <span>Visual Reference</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Card Caption Bar */}
                <div className="p-5 bg-white/5 border-t border-white/10">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-glg-gold mb-1">
                    {item.client || item.category}
                  </div>
                  <h4 className="font-serif font-bold text-lg text-white mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-glg-paper/70 line-clamp-2 leading-relaxed">
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
