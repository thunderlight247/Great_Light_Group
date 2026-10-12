'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import InteractiveBackground from '@/components/InteractiveBackground';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TickerBanner from '@/components/TickerBanner';
import PinnedShowcase from '@/components/PinnedShowcase';
import SoftwareSection from '@/components/SoftwareSection';
import MediaSection from '@/components/MediaSection';
import ServicesSection from '@/components/ServicesSection';
import StorySection from '@/components/StorySection';
import EnquirySection from '@/components/EnquirySection';
import Footer from '@/components/Footer';
import LivePreviewModal from '@/components/LivePreviewModal';
import PhotoLightboxModal from '@/components/PhotoLightboxModal';
import { SoftwareProject, MediaItem } from '@/data/portfolioData';

export default function Home() {
  const [activeDiscipline, setActiveDiscipline] = useState<'all' | 'software' | 'media'>('all');
  const [previewProject, setPreviewProject] = useState<SoftwareProject | null>(null);
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  const handleSelectDiscipline = (discipline: 'all' | 'software' | 'media') => {
    setActiveDiscipline(discipline);
    if (discipline === 'software') {
      const el = document.getElementById('software');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (discipline === 'media') {
      const el = document.getElementById('media');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-glg-bg text-glg-text-primary selection:bg-glg-gold selection:text-black">
        {/* Interactive Background (React Bits Canvas) */}
        <InteractiveBackground />

        {/* Navigation Header */}
        <Navbar
          activeDiscipline={activeDiscipline}
          onSelectDiscipline={handleSelectDiscipline}
        />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1">
          {/* Hero Section with GSAP Entrance Sequence */}
          <Hero onSelectDiscipline={handleSelectDiscipline} />

          {/* Velocity-Responsive Capabilities Ticker */}
          <TickerBanner />

          {/* GSAP ScrollTrigger Pinned Dual-Discipline Benchmark */}
          <div id="showcase">
            <PinnedShowcase />
          </div>

          {/* Software Section with Parallax Cards */}
          {(activeDiscipline === 'all' || activeDiscipline === 'software') && (
            <SoftwareSection onOpenLivePreview={(proj) => setPreviewProject(proj)} />
          )}

          {/* Media & Creative Section with 4K Video Reels & Lightbox */}
          {(activeDiscipline === 'all' || activeDiscipline === 'media') && (
            <MediaSection onOpenLightbox={(item) => setLightboxItem(item)} />
          )}

          {/* Core Services Matrix (12 Software Offerings + 4 Media Offerings) */}
          <ServicesSection />

          {/* About Great Light Group & Founder Ethos */}
          <StorySection />

          {/* Dual-Channel Project Enquiry & WhatsApp (0594273358) */}
          <EnquirySection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Interactive Modals */}
        <LivePreviewModal
          project={previewProject}
          onClose={() => setPreviewProject(null)}
        />
        <PhotoLightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      </div>
    </SmoothScroll>
  );
}
