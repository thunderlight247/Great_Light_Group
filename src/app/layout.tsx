import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://greatlightgroup.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Great Light Group — Software Engineering & Cinematic Media',
    template: '%s | Great Light Group',
  },
  description:
    'In him we have light. An authoritative dual-discipline studio in Ghana delivering full-stack engineered software solutions, enterprise web/mobile applications, and cinematic creative media production.',
  applicationName: 'Great Light Group',
  authors: [{ name: 'Great Light Group', url: siteUrl }],
  generator: 'Next.js',
  keywords: [
    'Great Light Group',
    'Ghana Software Company',
    'Software Engineering Ghana',
    'Full-Stack Web Development',
    'Mobile App Development Accra',
    'Next.js Developers Ghana',
    'Cinematography Accra',
    'Wedding Cinema Ghana',
    'Editorial Photography Ghana',
    'DaVinci Resolve Color Grading',
    'Commercial Video Production',
    'Enterprise ERP Solutions',
    'Fintech Software Ghana',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Great Light Group',
  publisher: 'Great Light Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Great Light Group — Software Engineering & Cinematic Media',
    description:
      'Two Disciplines. One Considered Standard. Authoritative software engineering and cinematic visual media crafted in Ghana and delivered globally.',
    url: siteUrl,
    siteName: 'Great Light Group',
    images: [
      {
        url: '/brand/logo.jpeg',
        width: 1024,
        height: 1024,
        alt: 'Great Light Group Official Brand Mark',
      },
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Great Light Group Crest',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Great Light Group — Software Engineering & Cinematic Media',
    description:
      'Authoritative dual-discipline studio in Ghana delivering full-stack software solutions and cinematic creative media.',
    images: ['/brand/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#070b09',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// Rich Structured Data (JSON-LD) for Google Search Console & Knowledge Graph
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'Corporation'],
      '@id': 'https://greatlightgroup.com/#organization',
      name: 'Great Light Group',
      url: 'https://greatlightgroup.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://greatlightgroup.com/#logo',
        url: 'https://greatlightgroup.com/android-chrome-512x512.png',
        contentUrl: 'https://greatlightgroup.com/android-chrome-512x512.png',
        caption: 'Great Light Group Logo',
        width: 512,
        height: 512,
      },
      image: 'https://greatlightgroup.com/brand/logo.jpeg',
      description:
        'Authoritative dual-discipline enterprise providing full-stack software engineering and cinematic visual media production.',
      slogan: 'In him we have light. Two Disciplines. One Considered Standard.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Accra',
        addressCountry: 'GH',
      },
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+233-59-427-3358',
          contactType: 'technical support and software commissions',
          areaServed: 'Worldwide',
          availableLanguage: ['English'],
        },
        {
          '@type': 'ContactPoint',
          telephone: '+233-25-628-7121',
          contactType: 'media production and cinematography bookings',
          areaServed: 'Worldwide',
          availableLanguage: ['English'],
        },
      ],
      sameAs: [
        'https://github.com/thunderlight247',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://greatlightgroup.com/#website',
      url: 'https://greatlightgroup.com',
      name: 'Great Light Group',
      description: 'Software Engineering & Cinematic Creative Media',
      publisher: {
        '@id': 'https://greatlightgroup.com/#organization',
      },
      inLanguage: 'en-US',
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-glg-bg text-glg-text-primary font-sans antialiased selection:bg-glg-gold selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
