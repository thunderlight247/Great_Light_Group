import type { Metadata } from 'next';
import GatewayPortal from '@/components/gateway/GatewayPortal';

export const metadata: Metadata = {
  title: 'Great Light Group — Gateway Portal',
  description:
    'Choose your discipline: Software Engineering & Enterprise Architecture or Atelier Media & Cinematic Production.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <GatewayPortal />;
}
