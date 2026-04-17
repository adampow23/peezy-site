import Script from 'next/script';
import Hero from '@/components/sections/Hero';
import Agitation from '@/components/sections/Agitation';
import HowItWorks from '@/components/sections/HowItWorks';
import Spotlight from '@/components/sections/Spotlight';
import FounderLetter from '@/components/sections/FounderLetter';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/layout/Footer';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Peezy',
  description:
    'The first moving app that actually does the work for you.',
  operatingSystem: 'iOS',
  applicationCategory: 'LifestyleApplication',
  offers: {
    '@type': 'Offer',
    price: '49.99',
    priceCurrency: 'USD',
  },
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
      <main>
        <Hero />
        <Agitation />
        <HowItWorks />
        <Spotlight />
        <FounderLetter />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
