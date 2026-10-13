'use client';

import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import MediaBackground from '@/components/media/MediaBackground';
import MediaNavbar from '@/components/media/MediaNavbar';
import MediaServicesOnly from '@/components/media/MediaServicesOnly';
import MediaEnquiry from '@/components/media/MediaEnquiry';
import MediaFooter from '@/components/media/MediaFooter';
import { ArrowLeft, Film, Sparkles, Camera } from 'lucide-react';
import { MEDIA_SERVICES } from '@/data/portfolioData';

export default function MediaServicesPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0a080d] text-glg-text-primary selection:bg-glg-gold selection:text-black">
        <MediaBackground />
        <MediaNavbar />

        <main className="relative z-10 pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Header */}
            <div className="mb-10">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-xs font-mono text-glg-gold hover:text-white transition-colors mb-4"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Media Division Home</span>
              </Link>

              <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-gold font-semibold mb-2 flex items-center gap-2">
                <Film className="w-4 h-4" />
                <span>Creative Capabilities &amp; Production Packages</span>
              </div>
              <h1 className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.95] mb-4">
                Creative Services &amp; <br />
                <span className="text-glg-gold-champagne italic font-normal">Production Capabilities.</span>
              </h1>
              <p className="max-w-2xl text-sm text-glg-text-secondary leading-relaxed">
                Full-scope visual creation for commercial brands, fashion houses, institutions, and documentary stories. From directional aperture capture to DaVinci Resolve color science.
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
