import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

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
  themeColor: '#15251d',
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
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${mono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-glg-paper text-glg-ink font-sans selection:bg-glg-green selection:text-glg-paper">
        {children}
      </body>
    </html>
  );
}
