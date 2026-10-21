'use client';

import { useState } from 'react';
import SmoothScroll from '@/components/SmoothScroll';
import MediaBackground from '@/components/media/MediaBackground';
import MediaNavbar from '@/components/media/MediaNavbar';
import MediaHero from '@/components/media/MediaHero';
import MediaVideoCinema from '@/components/media/MediaVideoCinema';
import MediaGalleryOnly from '@/components/media/MediaGalleryOnly';
import MediaServicesOnly from '@/components/media/MediaServicesOnly';
import MediaEthos from '@/components/media/MediaEthos';
import MediaEnquiry from '@/components/media/MediaEnquiry';
import MediaFooter from '@/components/media/MediaFooter';
import PhotoLightboxModal from '@/components/PhotoLightboxModal';
import { MediaItem, MEDIA_ITEMS } from '@/data/portfolioData';

export default function MediaPageClient() {
  const [lightboxItem, setLightboxItem] = useState<MediaItem | null>(null);
  const [activeGalleryItems, setActiveGalleryItems] = useState<MediaItem[]>(
    MEDIA_ITEMS.filter((i) => i.type === 'image')
  );

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#faf8f5] text-[#121115] selection:bg-[#b89047] selection:text-white">
        {/* Luminous Warm Alabaster Canvas Atmosphere */}
        <MediaBackground />

        {/* Dedicated Media Navigation */}
        <MediaNavbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1">
          {/* Cinematic Hero with Curated Film Strip */}
          <MediaHero />

          {/* 4K Motion Cinema Player (Reel 01 & Reel 02) */}
          <MediaVideoCinema />

          {/* Curated Photography Exhibition (22 Authentic Works from WhatsApp Media) */}
          <MediaGalleryOnly
            onOpenLightbox={(item, allItems) => {
              setLightboxItem(item);
              if (allItems && allItems.length > 0) {
                setActiveGalleryItems(allItems);
              }
            }}
          />

          {/* 4 Creative Production Packages */}
          <MediaServicesOnly />

          {/* Studio Ethos & Dual Philosophy */}
          <MediaEthos />

          {/* Commission Booking & Production Enquiry */}
          <MediaEnquiry />
        </main>

        {/* Dedicated Media Footer */}
        <MediaFooter />

        {/* High-Resolution Photo Lightbox */}
        <PhotoLightboxModal
          item={lightboxItem}
          items={activeGalleryItems}
          onNavigate={(item) => setLightboxItem(item)}
          onClose={() => setLightboxItem(null)}
        />
      </div>
    </SmoothScroll>
  );
}
