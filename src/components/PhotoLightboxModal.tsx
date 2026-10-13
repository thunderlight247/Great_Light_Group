'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, MessageSquare, Camera, Sparkles, ExternalLink } from 'lucide-react';
import { MediaItem, BRAND_DATA } from '@/data/portfolioData';

interface PhotoLightboxModalProps {
  item: MediaItem | null;
  items?: MediaItem[];
  onClose: () => void;
  onNavigate?: (item: MediaItem) => void;
}

export default function PhotoLightboxModal({
  item,
  items = [],
  onClose,
  onNavigate,
}: PhotoLightboxModalProps) {
  const currentIndex = item && items.length > 0 ? items.findIndex((i) => i.id === item.id) : -1;
  const hasMultiple = items.length > 1 && currentIndex !== -1;

  const handlePrev = useCallback(() => {
    if (!hasMultiple || !onNavigate) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  }, [currentIndex, hasMultiple, items, onNavigate]);

  const handleNext = useCallback(() => {
    if (!hasMultiple || !onNavigate) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  }, [currentIndex, hasMultiple, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, handlePrev, handleNext]);

  if (!item) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Great Light Group (Creative Division),\n\nI am viewing your media portfolio piece *"${item.title}"* (${item.frameNumber || 'Frame'} - ${item.category}).\n\nI would love to book or inquire about photography/cinematography in this exact creative style.\n\nCould we discuss availability and rates?`
  );
  const whatsappUrl = `https://wa.me/233594273358?text=${whatsappMessage}`;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/95 backdrop-blur-xl animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Ambient Warm Golden Film Glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] rounded-full bg-amber-600/10 blur-[140px]" />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[96vh] bg-[#0c0910] text-white rounded-2xl md:rounded-3xl overflow-hidden border border-amber-500/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col"
      >
        {/* Top Marquee Bar */}
        <div className="px-5 py-3.5 bg-black/80 border-b border-amber-500/20 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
              {item.frameNumber || 'FRAME'}
            </span>
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
              Great LENS · Studio Archive
            </span>
            {hasMultiple && (
              <span className="text-xs font-mono text-amber-200/80 bg-white/5 px-2.5 py-0.5 rounded">
                {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-amber-500 text-black hover:bg-amber-400 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Inquire on WhatsApp</span>
              <span className="sm:hidden">Book Style</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Center Presentation Viewport */}
        <div className="relative flex-1 min-h-[50vh] max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          {item.type === 'video' ? (
            <video
              src={item.src}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] w-auto max-w-full object-contain"
            />
          ) : (
            <div className="relative w-full h-full max-h-[70vh] flex items-center justify-center p-2 sm:p-4">
              <Image
                src={item.src}
                alt={item.title}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          )}

          {/* Navigation Arrows */}
          {hasMultiple && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-amber-400 border border-amber-500/30 transition-all hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Previous artwork"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-black/90 text-amber-400 border border-amber-500/30 transition-all hover:scale-110 active:scale-95 focus:outline-none"
                aria-label="Next artwork"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Editorial Callout & Metadata */}
        <div className="p-5 sm:p-7 bg-[#100c16] border-t border-amber-500/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                {item.category}
              </span>
              <span className="text-zinc-600">·</span>
              <span className="text-[11px] font-mono text-zinc-400">
                {item.client || 'Great Light Collection'}
              </span>
              {item.lensInfo && (
                <>
                  <span className="text-zinc-600 hidden sm:inline">·</span>
                  <span className="text-[11px] font-mono text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded hidden sm:inline">
                    {item.lensInfo}
                  </span>
                </>
              )}
            </div>

            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white tracking-tight">
              {item.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {item.caption}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Book This Style on WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
