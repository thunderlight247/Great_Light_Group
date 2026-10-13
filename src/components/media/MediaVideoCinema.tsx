'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film, Sparkles } from 'lucide-react';

export default function MediaVideoCinema() {
  const [selectedVideo, setSelectedVideo] = useState<'reel-01' | 'reel-02'>('reel-01');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="reels" className="py-24 md:py-36 relative border-b border-[#e8decb] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs uppercase font-mono tracking-eyebrow text-[#9e7526] font-semibold mb-3 flex items-center gap-2">
              <Film className="w-4 h-4 text-[#b89047]" />
              <span>Original Motion Production</span>
            </div>
            <h2 className="clamp-h2 font-serif font-bold text-[#121115] tracking-tight leading-[1.05]">
              Cinematic Reels &amp; <br />
              <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#b89047] via-[#c59b3f] to-[#9e7526]">
                Motion Studies.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4b4754] leading-relaxed font-sans">
            Experience our original camera work, pacing, and color science. Switch between our dynamic commercial studio reel and our mobile-first visual narrative.
          </p>
        </div>

        {/* Video Reel Selector Tabs */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-4 border-b border-[#e8decb]">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => {
                setSelectedVideo('reel-01');
                setIsPlaying(false);
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                selectedVideo === 'reel-01'
                  ? 'bg-[#b89047] text-white shadow-[0_4px_16px_rgba(184,144,71,0.25)]'
                  : 'bg-white text-[#4b4754] hover:text-[#121115] hover:bg-[#faf8f5] border border-[#e8decb]'
              }`}
            >
              01 Motion Reel (Dynamic Studio)
            </button>
            <button
              onClick={() => {
                setSelectedVideo('reel-02');
                setIsPlaying(false);
              }}
              className={`px-5 py-2 rounded-full text-xs font-mono font-bold transition-all ${
                selectedVideo === 'reel-02'
                  ? 'bg-[#b89047] text-white shadow-[0_4px_16px_rgba(184,144,71,0.25)]'
                  : 'bg-white text-[#4b4754] hover:text-[#121115] hover:bg-[#faf8f5] border border-[#e8decb]'
              }`}
            >
              02 Visual Story Reel (Mobile-First)
            </button>
          </div>

          <div className="text-xs font-mono text-[#787280] hidden sm:block">
            <span>Verified 4K Master Asset</span>
          </div>
        </div>

        {/* Cinematic Theatre Frame on Pure Porcelain Gallery Card */}
        <div className="relative rounded-3xl overflow-hidden p-2 sm:p-3 bg-white border border-[#e8decb] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          {/* Subtle Ambient Video Glow */}
          <div className="absolute -inset-4 bg-[#b89047]/5 rounded-3xl blur-3xl pointer-events-none" />

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-black/10 shadow-lg flex items-center justify-center group">
            <video
              key={selectedVideo}
              ref={videoRef}
              src={selectedVideo === 'reel-01' ? '/media/video/reel-01.mp4' : '/media/video/reel-02.mp4'}
              className="w-full h-full object-contain bg-black"
              loop
              playsInline
              preload="metadata"
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Video Play/Pause Overlay */}
            <div
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300 ${
                isPlaying ? 'opacity-0 hover:opacity-100 active:opacity-100' : 'opacity-100'
              }`}
            >
              <button
                className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-[#b89047] text-white flex items-center justify-center shadow-[0_0_30px_rgba(184,144,71,0.4)] transition-transform duration-300 hover:scale-110 active:scale-95 focus:outline-none hover:bg-[#9e7526]"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 sm:w-10 sm:h-10 fill-current" />
                ) : (
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-current" />
                )}
              </button>
            </div>

            {/* Top Right Mini Controls (Audio Mute & Fullscreen) */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
              <button
                onClick={toggleMute}
                className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white/80 hover:text-white border border-white/10 hover:border-[#b89047]/60 transition-all"
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                title={isMuted ? 'Unmute audio' : 'Mute audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-[#b89047]" /> : <Volume2 className="w-4 h-4 text-[#f5eedc]" />}
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white/80 hover:text-white border border-white/10 hover:border-[#b89047]/60 transition-all hidden sm:flex"
                aria-label="View fullscreen"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/85 to-transparent flex items-center justify-between pointer-events-none">
              <div>
                <span className="font-serif font-bold text-white text-sm sm:text-base block">
                  {selectedVideo === 'reel-01'
                    ? 'Reel 01 · Dynamic Pacing & Studio Composition'
                    : 'Reel 02 · Mobile-First Visual Storytelling & Fluid Motion'}
                </span>
                <span className="text-[10px] sm:text-xs font-mono text-[#b89047] block mt-0.5">
                  High-Definition Video · Directional Natural Lighting · Great Light Creative Division
                </span>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-white/70">
                <span className="px-2 py-0.5 rounded bg-white/15">1080p Web Master</span>
                <span className="px-2 py-0.5 rounded bg-white/15">H.264 / AAC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
