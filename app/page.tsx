import Script from 'next/script';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import HowItWorks from '@/components/sections/HowItWorks';
import WhyDifferent from '@/components/sections/WhyDifferent';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Peezy',
  description:
    'The only platform built to handle every part of your move. Vetted companies. Personalized plans. Built around accountability, not ad spend.',
  url: 'https://peezymove.com',
  image: 'https://peezymove.com/og-image.png',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS',
  publisher: {
    '@type': 'Organization',
    name: 'Peezy Move LLC',
    url: 'https://peezymove.com',
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main id="top">
        <Header />
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <WhyDifferent />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
