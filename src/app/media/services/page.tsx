import type { Metadata } from 'next';
import MediaServicesClient from '@/components/media/MediaServicesClient';

export const metadata: Metadata = {
  title: 'Media Services & Packages',
  description:
    'Full-scope visual creation for high-fashion bridal clients, cultural institutions, and commercial brands. Explore our 4 bespoke creative production tiers.',
  alternates: {
    canonical: '/media/services',
  },
  openGraph: {
    title: 'Media Services & Packages | Great Light Group',
    description:
      'Explore cinematography and photography packages: Matrimonial Cinema, Heritage Portraiture, Brand Motion, and Color Grading.',
    url: 'https://greatlightgroup.com/media/services',
    type: 'website',
  },
};

export default function MediaServicesPage() {
  return <MediaServicesClient />;
}
