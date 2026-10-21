import type { Metadata } from 'next';
import SoftwarePageClient from '@/components/software/SoftwarePageClient';

export const metadata: Metadata = {
  title: 'Software & Technology Division',
  description:
    'Full-stack engineering, reactive systems in Go and Next.js, cross-platform mobile apps in Flutter, and enterprise database architecture delivered with zero downtime.',
  alternates: {
    canonical: '/software',
  },
  openGraph: {
    title: 'Software & Technology Division | Great Light Group',
    description:
      'Engineered software solutions, distributed Go backends, Next.js web applications, and mobile engineering.',
    url: 'https://greatlightgroup.com/software',
    type: 'website',
    images: [
      {
        url: '/brand/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Great Light Group Software Division',
      },
    ],
  },
};

export default function SoftwarePage() {
  return <SoftwarePageClient />;
}
