'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const paragraphs = [
  'Most platforms in this industry make their money by selling your information to companies that paid the most for ad placement. The companies you end up hiring weren’t recommended because they’re good — they were recommended because they bought the spot.',
  'Peezy doesn’t work that way. We vet companies before they’re ever on the platform, and they only get paid when the job goes well. That means every company you hire through Peezy has a real reason to take care of you — not just take your money.',
];

export default function WhyDifferent() {
  const reduced = useReducedMotion() ?? false;

  const titleMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: easing.soft },
      };

  const paragraphMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: easing.soft },
      };

  const pullQuoteMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: easing.soft },
      };

  return (
    <section className="bg-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        <article className="w-full max-w-[680px] mx-auto border-t border-b border-grey-200 pt-16 pb-20 md:pt-20 md:pb-24">
          <motion.h2
            className="text-display-lg text-grey-900"
            viewport={{ once: true, amount: 0.3 }}
            {...titleMotion}
          >
            The first moving platform that&rsquo;s actually on your side.
          </motion.h2>

          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className={`text-body-lg text-grey-700 ${i === 0 ? 'mt-12' : 'mt-6'}`}
              viewport={{ once: true, amount: 0.4 }}
              {...paragraphMotion}
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            className="text-display-md text-grey-900 italic mt-14 text-center"
            viewport={{ once: true, amount: 0.5 }}
            {...pullQuoteMotion}
          >
            Built around accountability, not ad&nbsp;spend.
          </motion.p>
        </article>
      </Container>
    </section>
  );
}
