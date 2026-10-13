'use client';

import Image from 'next/image';
import { Camera, Film, Sparkles, MessageSquare, Aperture, Award } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function MediaEthos() {
  const whatsappUrl = `https://wa.me/233594273358?text=${encodeURIComponent(
    'Hello Great Light Creative Director, I would like to consult on creative direction and booking for an upcoming shoot.'
  )}`;

  return (
    <section
      id="ethos"
      className="py-24 md:py-36 relative border-b border-[#e8d5b5]/15 scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Director Portrait with Atelier Film Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer Film Frame */}
              <div className="relative rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-[#e8d5b5]/25 via-white/5 to-transparent border border-[#e8d5b5]/30 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black">
                  <Image
                    src="/media/photography/glg-media-22.jpeg"
                    alt="Great Light Creative Visual Director"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0e] via-transparent to-transparent opacity-80" />

                  {/* Frame Stamp Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#e8d5b5] pointer-events-none">
                    <span className="bg-black/80 px-2.5 py-1 rounded-full border border-[#e8d5b5]/30 backdrop-blur-md">
                      FRAME 22 · DIRECTOR
                    </span>
                    <span className="bg-black/80 px-2 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      GREAT LENS
                    </span>
                  </div>

                  {/* Overlaid Title */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[11px] uppercase font-mono tracking-widest text-[#e8d5b5] font-bold mb-1">
                      Visual Direction &amp; Camera Craft
                    </div>
                    <div className="font-serif text-2xl font-bold">
                      The Great Light Atelier
                    </div>
                    <p className="text-xs text-[#d4c5b9] mt-1">
                      Lead Photographer &amp; Cinematographer
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Logo Inset */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#e8d5b5]/50 shadow-[0_0_25px_rgba(232,213,181,0.25)] bg-black p-1 hidden sm:block">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={BRAND_DATA.logo}
                    alt={BRAND_DATA.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Creative Manifesto & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="text-xs uppercase font-mono tracking-eyebrow text-[#e8d5b5] font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#e8d5b5]" />
                <span>The Creative Manifesto</span>
              </div>
              <h2 className="clamp-h2 font-serif font-bold text-white tracking-tight leading-[1.05]">
                Light, Pacing &amp; <br />
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#e8d5b5] via-[#f5e8d2] to-[#b89758]">
                  Uncompromised Truth.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#d4c5b9] leading-relaxed">
              <p>
                In an era of fleeting visual noise and automated filters, Great Light Creative treats visual media as an enduring archive. Whether framing a sacred matrimonial ceremony, an intimate bridal portrait in heritage Aso-Oke, or a high-framerate commercial cinema reel, we operate with singular devotion to <strong className="text-[#f5e8d2] font-semibold">intentional lighting and human dignity</strong>.
              </p>
              <p>
                Our work is defined by unposed honesty: capturing the quiet breath before a vow, the geometry of authentic African textiles, and the cinematic cadence of motion that commands respect.
              </p>
            </div>

            {/* Atelier Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#131017] border border-[#e8d5b5]/15">
                <div className="flex items-center gap-2 font-serif font-bold text-white mb-2 text-base">
                  <Aperture className="w-4 h-4 text-[#e8d5b5]" />
                  <span>Directional Light</span>
                </div>
                <p className="text-xs text-[#a39ea8] leading-relaxed">
                  Sculpted chiaroscuro and natural illumination honoring rich skin tones and textiles.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#131017] border border-[#e8d5b5]/15">
                <div className="flex items-center gap-2 font-serif font-bold text-white mb-2 text-base">
                  <Camera className="w-4 h-4 text-[#e8d5b5]" />
                  <span>Authentic Story</span>
                </div>
                <p className="text-xs text-[#a39ea8] leading-relaxed">
                  Unstaged emotional truth in weddings, cultural moments, and ecclesiastical ceremonies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#131017] border border-[#e8d5b5]/15">
                <div className="flex items-center gap-2 font-serif font-bold text-white mb-2 text-base">
                  <Film className="w-4 h-4 text-[#e8d5b5]" />
                  <span>Color Science</span>
                </div>
                <p className="text-xs text-[#a39ea8] leading-relaxed">
                  DaVinci Resolve 10-bit log curve grading calibrated for theatrical longevity.
                </p>
              </div>
            </div>

            {/* Bottom Quote & Direct WhatsApp CTA */}
            <div className="pt-6 border-t border-[#e8d5b5]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="font-serif italic text-sm text-[#e8d5b5] font-medium">
                &ldquo;In him we have light · Captured with reverence.&rdquo;
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#e8d5b5] text-[#0c0a0e] hover:bg-[#f5e8d2] transition-all shadow-[0_0_20px_rgba(232,213,181,0.25)] hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Consult with Director</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
