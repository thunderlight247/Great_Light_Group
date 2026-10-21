import type { Metadata } from 'next';
import SoftwareReviewsClient from '@/components/software/SoftwareReviewsClient';

export const metadata: Metadata = {
  title: 'Software Client Reviews & Engineering Feedback',
  description:
    'Verified client feedback, uptime performance, and engineering reviews from organizations that commissioned custom software solutions from Great Light Group.',
  alternates: {
    canonical: '/software/reviews',
  },
  openGraph: {
    title: 'Software Client Reviews | Great Light Group',
    description:
      'Verified engineering reviews and client commendations for Great Light Group software delivery.',
    url: 'https://greatlightgroup.com/software/reviews',
    type: 'website',
  },
};

export default function SoftwareReviewsPage() {
  return <SoftwareReviewsClient />;
}
