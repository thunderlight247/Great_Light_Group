import type { Metadata } from 'next';
import MediaPageClient from '@/components/media/MediaPageClient';

export const metadata: Metadata = {
  title: 'Media & Cinematic Atelier',
  description:
    'Cinematic wedding films, cultural documentaries, master color grading, and editorial photography by Great Light Atelier in Ghana and across the globe.',
  alternates: {
    canonical: '/media',
  },
  openGraph: {
    title: 'Media & Cinematic Atelier | Great Light Group',
    description:
      'Cinematic wedding films, cultural documentaries, master color grading, and editorial photography by Great Light Atelier.',
    url: 'https://greatlightgroup.com/media',
    type: 'website',
    images: [
      {
        url: '/brand/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Great Light Group Media Atelier',
      },
    ],
  },
};

export default function MediaPage() {
  return <MediaPageClient />;
}
