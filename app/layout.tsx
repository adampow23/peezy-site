import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import SmoothScroll from '@/components/layout/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://peezymove.com'),
  title: 'Peezy — Moving just got a hell of a lot easier',
  description:
    'The only platform built to handle every part of your move. Vetted companies. Personalized plans. Built around accountability, not ad spend.',
  keywords: [
    'moving platform',
    'moving concierge',
    'moving assistant',
    'vetted movers',
    'personalized moving plan',
    'iOS moving app',
  ],
  authors: [{ name: 'Peezy Move LLC' }],
  creator: 'Peezy Move LLC',
  publisher: 'Peezy Move LLC',
  openGraph: {
    title: 'Peezy — Moving just got a hell of a lot easier',
    description:
      'The only platform built to handle every part of your move. Vetted companies. Personalized plans. Built around accountability, not ad spend.',
    url: 'https://peezymove.com',
    siteName: 'Peezy',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Peezy — Moving just got a hell of a lot easier.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Peezy — Moving just got a hell of a lot easier',
    description:
      'The only platform built to handle every part of your move. Vetted companies. Personalized plans.',
    images: ['/twitter-image.png'],
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
