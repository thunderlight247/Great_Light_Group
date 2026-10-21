'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import InteractiveBackground from '@/components/InteractiveBackground';
import SoftwareNavbar from '@/components/software/SoftwareNavbar';
import SoftwareHero from '@/components/software/SoftwareHero';
import TickerBanner from '@/components/TickerBanner';
import PinnedShowcase from '@/components/PinnedShowcase';
import SoftwareSection from '@/components/SoftwareSection';
import TechSkillsSection from '@/components/TechSkillsSection';
import SoftwareServicesOnly from '@/components/software/SoftwareServicesOnly';
import StorySection from '@/components/StorySection';
import SoftwareEnquiry from '@/components/software/SoftwareEnquiry';
import SoftwareFooter from '@/components/software/SoftwareFooter';
import LivePreviewModal from '@/components/LivePreviewModal';
import { SoftwareProject } from '@/data/portfolioData';

export default function SoftwarePageClient() {
  const [previewProject, setPreviewProject] = useState<SoftwareProject | null>(null);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-glg-bg text-glg-text-primary selection:bg-glg-gold selection:text-black">
        {/* Interactive React Bits particle constellation */}
        <InteractiveBackground />

        {/* Dedicated Software Navigation */}
        <SoftwareNavbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1">
          {/* Hero Section */}
          <SoftwareHero />

          {/* Capabilities Ticker */}
          <TickerBanner />

          {/* GSAP ScrollTrigger Pinned Benchmark */}
          <div id="showcase">
            <PinnedShowcase />
          </div>

          {/* Software Section with Parallax Cards */}
          <SoftwareSection onOpenLivePreview={(proj) => setPreviewProject(proj)} />

          {/* Technical Skills & Language Stack */}
          <TechSkillsSection />

          {/* 12 Software Services Matrix */}
          <SoftwareServicesOnly />

          {/* Dual Discipline Story */}
          <StorySection />

          {/* Commission Scoping & Technical Enquiry */}
          <SoftwareEnquiry />
        </main>

        {/* Dedicated Software Footer */}
        <SoftwareFooter />

        {/* Live Project Interactive Sandbox Modal */}
        <LivePreviewModal
          project={previewProject}
          onClose={() => setPreviewProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
