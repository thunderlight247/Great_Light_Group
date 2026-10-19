'use client';

import Link from 'next/link';
import SmoothScroll from '@/components/SmoothScroll';
import InteractiveBackground from '@/components/InteractiveBackground';
import SoftwareNavbar from '@/components/software/SoftwareNavbar';
import ReviewsManager from '@/components/reviews/ReviewsManager';
import SoftwareEnquiry from '@/components/software/SoftwareEnquiry';
import SoftwareFooter from '@/components/software/SoftwareFooter';
import { ArrowLeft, Code2, ShieldCheck } from 'lucide-react';

export default function SoftwareReviewsPage() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-glg-bg text-glg-text-primary selection:bg-glg-gold selection:text-black">
        <InteractiveBackground />
        <SoftwareNavbar />

        <main className="relative z-10 pt-36 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Header */}
            <div className="mb-12">
              <Link
                href="/software"
                className="inline-flex items-center gap-2 text-xs font-mono text-glg-emerald hover:text-white transition-colors mb-4 font-semibold"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Software Division Home</span>
              </Link>

              <div className="text-xs uppercase font-mono tracking-eyebrow text-glg-emerald font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-glg-emerald" />
                <span>Verified Client Commission Feedback</span>
              </div>
              <h1 className="clamp-h1 font-serif font-black text-white tracking-tight leading-[0.95] mb-4">
                Software Reviews &amp; <br />
                <span className="text-glg-emerald italic font-normal">
                  Client Endorsements.
                </span>
              </h1>
              <p className="max-w-2xl text-sm text-glg-text-secondary leading-relaxed font-sans">
                Real feedback from organizations, institutions, and founders who trust Great Light Group for high-concurrency backends, school administration portals, mobile applications, and resilient databases.
              </p>
            </div>

            {/* Interactive Reviews Feed & Submission System */}
            <ReviewsManager division="software" />

            {/* Direct Consultation / Commission Section */}
            <div className="mt-24 pt-16 border-t border-white/10">
              <SoftwareEnquiry />
            </div>
          </div>
        </main>

        <SoftwareFooter />
      </div>
    </SmoothScroll>
  );
}
