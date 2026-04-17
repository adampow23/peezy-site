import type { Metadata } from 'next';
import { inter } from '@/lib/fonts';
import SmoothScroll from '@/components/layout/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://peezymove.com'),
  title: 'Peezy | Moving just got a hell of a lot easier.',
  description:
    'The first moving app that actually does the work for you. Tell us about your move — we build the plan, coordinate the vendors, and handle what we can on your behalf.',
  keywords: [
    'moving app',
    'moving concierge',
    'moving checklist',
    'iOS moving app',
    'move planning',
    'moving assistant',
  ],
  authors: [{ name: 'Peezy Move LLC' }],
  creator: 'Peezy Move LLC',
  publisher: 'Peezy Move LLC',
  openGraph: {
    title: 'Peezy | Moving just got a hell of a lot easier.',
    description:
      'The first moving app that actually does the work for you. Tell us about your move — we build the plan, coordinate the vendors, and handle what we can on your behalf.',
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
    title: 'Peezy | Moving just got a hell of a lot easier.',
    description:
      'The first moving app that actually does the work for you.',
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
