'use client';

import Image from 'next/image';
import { Camera, Film, Sparkles, MessageSquare, Aperture, Award } from 'lucide-react';
import { BRAND_DATA } from '@/data/portfolioData';

export default function MediaEthos() {
  const whatsappUrl = `https://wa.me/233256287121?text=${encodeURIComponent(
    'Hello Great Light Creative Director, I would like to consult on creative direction and booking for an upcoming shoot.'
  )}`;

  return (
    <section
      id="ethos"
      className="py-24 md:py-36 relative border-b border-[#e8decb] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Director Portrait with Atelier Film Frame */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Outer Gallery Porcelain Frame */}
              <div className="relative rounded-3xl overflow-hidden p-2 sm:p-3 bg-white border border-[#e8decb] shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black">
                  <Image
                    src="/media/photography/glg-media-22.jpeg"
                    alt="Great Light Creative Visual Director"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-85" />

                  {/* Frame Stamp Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#f5eedc] pointer-events-none">
                    <span className="bg-black/75 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                      FRAME 22 · DIRECTOR
                    </span>
                    <span className="bg-black/75 px-2 py-1 rounded-full border border-white/20 backdrop-blur-md">
                      GREAT LENS
                    </span>
                  </div>

                  {/* Overlaid Title */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="text-[11px] uppercase font-mono tracking-widest text-[#b89047] font-bold mb-1">
                      Visual Direction &amp; Camera Craft
                    </div>
                    <div className="font-serif text-2xl font-bold">
                      The Great Light Atelier
                    </div>
                    <p className="text-xs text-white/80 mt-1">
                      Lead Photographer &amp; Cinematographer
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Brand Logo Inset */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl overflow-hidden border-2 border-[#b89047] shadow-[0_4px_20px_rgba(184,144,71,0.25)] bg-white p-1 hidden sm:block">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black">
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
              <div className="text-xs uppercase font-mono tracking-eyebrow text-[#9e7526] font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#b89047]" />
                <span>The Creative Manifesto</span>
              </div>
              <h2 className="clamp-h2 font-serif font-bold text-[#121115] tracking-tight leading-[1.05]">
                Light, Pacing &amp; <br />
                <span className="font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#b89047] via-[#c59b3f] to-[#9e7526]">
                  Uncompromised Truth.
                </span>
              </h2>
            </div>

            <div className="space-y-4 text-sm text-[#4b4754] leading-relaxed font-sans">
              <p>
                In an era of fleeting visual noise and automated filters, Great Light Creative treats visual media as an enduring archive. Whether framing a sacred matrimonial ceremony, an intimate bridal portrait in heritage Aso-Oke, or a high-framerate commercial cinema reel, we operate with singular devotion to <strong className="text-[#121115] font-semibold">intentional lighting and human dignity</strong>.
              </p>
              <p>
                Our work is defined by unposed honesty: capturing the quiet breath before a vow, the geometry of authentic African textiles, and the cinematic cadence of motion that commands respect.
              </p>
            </div>

            {/* Atelier Craft Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#e8decb] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 font-serif font-bold text-[#121115] mb-2 text-base">
                  <Aperture className="w-4 h-4 text-[#b89047]" />
                  <span>Directional Light</span>
                </div>
                <p className="text-xs text-[#4b4754] leading-relaxed">
                  Sculpted chiaroscuro and natural illumination honoring rich skin tones and textiles.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#e8decb] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 font-serif font-bold text-[#121115] mb-2 text-base">
                  <Camera className="w-4 h-4 text-[#b89047]" />
                  <span>Authentic Story</span>
                </div>
                <p className="text-xs text-[#4b4754] leading-relaxed">
                  Unstaged emotional truth in weddings, cultural moments, and ecclesiastical ceremonies.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#e8decb] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 font-serif font-bold text-[#121115] mb-2 text-base">
                  <Film className="w-4 h-4 text-[#b89047]" />
                  <span>Color Science</span>
                </div>
                <p className="text-xs text-[#4b4754] leading-relaxed">
                  DaVinci Resolve 10-bit log curve grading calibrated for theatrical longevity.
                </p>
              </div>
            </div>

            {/* Bottom Quote & Direct WhatsApp CTA */}
            <div className="pt-6 border-t border-[#e8decb] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="font-serif italic text-sm text-[#b89047] font-semibold">
                &ldquo;In him we have light · Captured with reverence.&rdquo;
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#b89047] text-white hover:bg-[#9e7526] transition-all shadow-[0_10px_25px_rgba(184,144,71,0.25)] hover:scale-105"
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
