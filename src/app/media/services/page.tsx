'use client';

import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import MediaBackground from '@/components/media/MediaBackground';
import MediaNavbar from '@/components/media/MediaNavbar';
import MediaServicesOnly from '@/components/media/MediaServicesOnly';
import MediaEnquiry from '@/components/media/MediaEnquiry';
import MediaFooter from '@/components/media/MediaFooter';
import { ArrowLeft, Film, Sparkles } from 'lucide-react';

export default function MediaServicesPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0c0a0e] text-[#fbf8f3] selection:bg-[#e8d5b5] selection:text-[#0c0a0e]">
        <MediaBackground />
        <MediaNavbar />

        <main className="relative z-10 pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Header */}
            <div className="mb-10">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#e8d5b5] hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Media Division Gallery</span>
              </Link>

              <div className="text-xs uppercase font-mono tracking-eyebrow text-[#e8d5b5] font-semibold mb-2 flex items-center gap-2">
                <Film className="w-4 h-4 text-[#e8d5b5]" />
                <span>Great Light Atelier · Production Packages</span>
              </div>
              <h1 className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.95] mb-4">
                Creative Production &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e8d5b5] via-[#f5e8d2] to-[#b89758] italic font-normal">
                  Studio Packages.
                </span>
              </h1>
              <p className="max-w-2xl text-sm text-[#d4c5b9] leading-relaxed">
                Full-scope visual creation for high-fashion bridal clients, cultural institutions, and commercial brands. From directional chiaroscuro capture to DaVinci Resolve color science.
              </p>
            </div>

            {/* 4 Creative Services Detailed Grid */}
            <MediaServicesOnly />

            {/* Direct Booking Consultation */}
            <div className="mt-20">
              <MediaEnquiry />
            </div>
          </div>
        </main>

        <MediaFooter />
      </div>
    </SmoothScroll>
  );
}
