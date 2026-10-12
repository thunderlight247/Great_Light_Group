'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
      <div className="min-h-screen flex flex-col bg-glg-paper text-glg-ink">
        {/* Navigation Header */}
        <Navbar
          activeDiscipline={activeDiscipline}
          onSelectDiscipline={handleSelectDiscipline}
        />

        {/* Hero Section with Dual-Discipline Choice Fork */}
        <main className="flex-1">
          <Hero onSelectDiscipline={handleSelectDiscipline} />

          {/* Software Section */}
          {(activeDiscipline === 'all' || activeDiscipline === 'software') && (
            <SoftwareSection onOpenLivePreview={(proj) => setPreviewProject(proj)} />
          )}

          {/* Media & Creative Section */}
          {(activeDiscipline === 'all' || activeDiscipline === 'media') && (
            <MediaSection onOpenLightbox={(item) => setLightboxItem(item)} />
          )}

          {/* Core Services Matrix (12 Tech + 4 Media) */}
          <ServicesSection />

          {/* About Great Light Group & Founder Ethos */}
          <StorySection />

          {/* Dual-Channel Project Enquiry & WhatsApp Generator */}
          <EnquirySection />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Modals */}
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
