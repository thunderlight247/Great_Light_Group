'use client';

import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import MediaBackground from '@/components/media/MediaBackground';
import MediaNavbar from '@/components/media/MediaNavbar';
import ReviewsManager from '@/components/reviews/ReviewsManager';
import MediaFooter from '@/components/media/MediaFooter';
import { ArrowLeft, Film } from 'lucide-react';

export default function MediaReviewsClient() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#faf8f5] text-[#121115] selection:bg-[#b89047] selection:text-white">
        <MediaBackground />
        <MediaNavbar />

        <main className="relative z-10 pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Header */}
            <div className="mb-12">
              <Link
                href="/media"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#b89047] hover:text-[#121115] transition-colors mb-4 font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Media Division Gallery</span>
              </Link>

              <div className="text-xs uppercase font-mono tracking-eyebrow text-[#b89047] font-semibold mb-2 flex items-center gap-2">
                <Film className="w-4 h-4 text-[#b89047]" />
                <span>Great Light Atelier · Client Reviews</span>
              </div>
              <h1 className="clamp-h1 font-serif font-black text-[#121115] tracking-tight leading-[0.95] mb-4">
                Client Reviews &amp; <br />
                <span className="text-[#b89047] italic font-normal">
                  Editorial Commendations.
                </span>
              </h1>
              <p className="max-w-2xl text-sm text-[#4b4754] leading-relaxed font-sans">
                Authentic testimonials from couples, corporate brands, and cultural institutions who commissioned Great Light Creative for 4K matrimonial cinema, heritage portraiture, and commercial video production.
              </p>
            </div>

            {/* Interactive Reviews Feed & Submission System */}
            <ReviewsManager division="media" />
          </div>
        </main>

        <MediaFooter />
      </div>
    </SmoothScroll>
  );
}
