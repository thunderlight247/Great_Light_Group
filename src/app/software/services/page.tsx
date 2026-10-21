import type { Metadata } from 'next';
import SoftwareServicesClient from '@/components/software/SoftwareServicesClient';

export const metadata: Metadata = {
  title: 'Software Services & Architecture Matrix',
  description:
    'Comprehensive technical register of our 12 engineering offerings in Next.js, Go backend, Flutter, distributed databases, DevOps, and ERP systems.',
  alternates: {
    canonical: '/software/services',
  },
  openGraph: {
    title: 'Software Services & Architecture Matrix | Great Light Group',
    description:
      'Explore 12 specialized software engineering offerings bounded by deterministic specifications and zero downtime.',
    url: 'https://greatlightgroup.com/software/services',
    type: 'website',
  },
};

export default function SoftwareServicesPage() {
  return <SoftwareServicesClient />;
}
