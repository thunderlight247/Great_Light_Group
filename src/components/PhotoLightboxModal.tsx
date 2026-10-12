'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, Info, Sparkles } from 'lucide-react';
import { MediaItem } from '@/data/portfolioData';

interface PhotoLightboxModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

export default function PhotoLightboxModal({ item, onClose }: PhotoLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl max-h-[90vh] bg-glg-ink text-white rounded-2xl overflow-hidden border border-glg-gold/30 shadow-2xl flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Presentation Frame */}
        <div className="relative w-full max-h-[70vh] aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
          {item.type === 'poster' ? (
            <div
              className={`w-full h-full p-12 flex flex-col justify-between ${
                item.src === 'poster-1'
                  ? 'bg-glg-green text-white'
                  : item.src === 'poster-2'
                  ? 'bg-glg-sand text-glg-ink'
                  : 'bg-glg-slate text-white'
              }`}
            >
              <span className="text-xs uppercase tracking-widest font-mono font-bold">
                Great Light Creative Typography
              </span>
              <div className="text-5xl sm:text-6xl font-black font-sans tracking-tight uppercase leading-none">
                {item.title}
              </div>
              <div className="text-xs font-mono opacity-80">
                Editorial Typographic Study · Brand Art Direction
              </div>
            </div>
          ) : (
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 80vw"
            />
          )}
        </div>

        {/* Caption & Metadata Footer */}
        <div className="p-6 bg-glg-ink border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-glg-gold font-bold">
                {item.client || item.category}
              </span>
              {item.isReference && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-glg-gold-light">
                  Demonstration Reference
                </span>
              )}
            </div>
            <h3 className="font-serif font-bold text-xl text-white">
              {item.title}
            </h3>
            <p className="text-xs text-glg-paper/70 mt-1 leading-relaxed max-w-xl">
              {item.caption}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="text-[11px] font-mono text-glg-paper/50 block">
              Aspect Ratio: {item.aspectRatio}
            </span>
            <span className="text-[11px] font-mono text-glg-gold block">
              Great Light Media Collection
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
