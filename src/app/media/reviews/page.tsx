import type { Metadata } from 'next';
import MediaReviewsClient from '@/components/media/MediaReviewsClient';

export const metadata: Metadata = {
  title: 'Media Client Reviews & Testimonials',
  description:
    'Read verified client feedback and editorial reviews from couples, brands, and institutions who commissioned Great Light Atelier for cinematography and photography.',
  alternates: {
    canonical: '/media/reviews',
  },
  openGraph: {
    title: 'Media Client Reviews | Great Light Group',
    description:
      'Verified client feedback and reviews for Great Light Atelier cinematography and photography.',
    url: 'https://greatlightgroup.com/media/reviews',
    type: 'website',
  },
};

export default function MediaReviewsPage() {
  return <MediaReviewsClient />;
}
