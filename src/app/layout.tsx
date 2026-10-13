import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://greatlightgroup.com'),
  title: 'Great Light Group — Software Engineering & Cinematic Media',
  description:
    'In him we have light. An authoritative dual-discipline studio delivering engineered software solutions and cinematic creative media in Ghana and beyond.',
  authors: [{ name: 'Great Light Group' }],
  keywords: [
    'Software Development',
    'Mobile App Development',
    'Full-Stack Engineering',
    'Cinematography',
    'Editorial Photography',
    'Great Light Group',
    'Next.js',
    'Ghana Software',
  ],
  icons: {
    icon: '/brand/logo.jpeg',
    apple: '/brand/logo.jpeg',
  },
  openGraph: {
    title: 'Great Light Group — Software & Media Portfolio',
    description: 'Two Disciplines. One Considered Standard. In him we have light.',
    url: 'https://greatlightgroup.com',
    siteName: 'Great Light Group',
    images: [
      {
        url: '/brand/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Great Light Group Official Brand Mark',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#070b09',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-glg-bg text-glg-text-primary font-sans antialiased selection:bg-glg-gold selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
