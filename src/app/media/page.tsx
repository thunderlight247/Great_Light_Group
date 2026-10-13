'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import MediaBackground from '@/components/media/MediaBackground';
import MediaNavbar from '@/components/media/MediaNavbar';
import MediaHero from '@/components/media/MediaHero';
import MediaVideoCinema from '@/components/media/MediaVideoCinema';
import MediaGalleryOnly from '@/components/media/MediaGalleryOnly';
import MediaServicesOnly from '@/components/media/MediaServicesOnly';
import StorySection from '@/components/StorySection';
import MediaEnquiry from '@/components/media/MediaEnquiry';
import MediaFooter from '@/components/media/MediaFooter';
import PhotoLightboxModal from '@/components/PhotoLightboxModal';
import { MediaItem } from '@/data/portfolioData';

export default function MediaPage() {
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0a080d] text-glg-text-primary selection:bg-glg-gold selection:text-black">
        {/* Warm Cinematic Celluloid Atmosphere & Light Leaks */}
        <MediaBackground />

        {/* Dedicated Media Navigation */}
        <MediaNavbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1">
          {/* Cinematic Hero */}
          <MediaHero />

          {/* 4K Motion Cinema Player (Reel 01 & Reel 02) */}
          <MediaVideoCinema />

          {/* Curated Editorial Photography & Typographic Posters */}
          <MediaGalleryOnly onOpenLightbox={(item) => setLightboxItem(item)} />

          {/* 4 Creative Media Services */}
          <MediaServicesOnly />

          {/* Creative Ethos & Philosophy */}
          <StorySection />

          {/* Commission Production Brief (WhatsApp: 0594273358) */}
          <MediaEnquiry />
        </main>

        {/* Media Footer */}
        <MediaFooter />

        {/* Interactive Photo & Poster Lightbox Modal */}
        <PhotoLightboxModal
          item={lightboxItem}
          onClose={() => setLightboxItem(null)}
        />
      </div>
    </SmoothScroll>
  );
}
