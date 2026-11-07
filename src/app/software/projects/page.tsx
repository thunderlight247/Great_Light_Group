import type { Metadata } from 'next';
import SoftwareProjectsClient from '@/components/software/SoftwareProjectsClient';

export const metadata: Metadata = {
  title: 'Software Projects, Client Platforms & Production Systems',
  description:
    'Comprehensive engineering catalog of 16 production software systems, active client platforms, healthcare diagnostic systems, hospitality reservation engines, and Go distributed backends by Great Light Group.',
  alternates: {
    canonical: '/software/projects',
  },
  openGraph: {
    title: 'Software Projects & Production Systems | Great Light Group',
    description:
      'Authoritative engineering register: 16 verified software platforms across hospitality booking, clinical healthcare, financial ledgers, and cross-platform mobile apps.',
    url: 'https://greatlightgroup.com/software/projects',
    type: 'website',
    images: [
      {
        url: '/brand/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Great Light Group Software Projects Catalog',
      },
    ],
  },
  keywords: [
    'Great Light Group Projects',
    'Ghana Software Portfolio',
    'Country Lodge Nsawam Website',
    'Lovely Fobie Glam Web Portal',
    'Alba Medical Diagnostic Centre',
    'St Joseph Hospital Nkwanta Website',
    'SchoolHub Ghana',
    'Next.js Developers Ghana',
    'Go Backend Engineering',
    'Flutter Mobile Apps Ghana',
    'Hospitality Booking Systems Ghana',
    'Production Software Catalog',
  ],
};

export default function SoftwareProjectsPage() {
  return <SoftwareProjectsClient />;
}
