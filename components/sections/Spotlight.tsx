'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const numberBlocks = [
  { number: '40+', caption: 'hours of moving admin' },
  { number: '1', caption: 'hour or less, total with Peezy' },
  { number: '2', caption: 'minutes a day. Done.' },
];

export default function Spotlight() {
  const reduced = useReducedMotion() ?? false;

  const h2Motion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: easing.smooth },
      };

  const numbersContainer = reduced
    ? {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: duration.quick },
        },
      }
    : {
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      };

  const blockVariants = reduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: easing.smooth },
        },
      };

  const numberScaleVariants = reduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: { scale: 0.95 },
        visible: {
          scale: 1,
          transition: { duration: 0.9, ease: easing.smooth },
        },
      };

  const disclaimerVariants = reduced
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.5, delay: 0.4 },
        },
      };

  const pinkyMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: {
          opacity: 0,
          y: 24,
          scale: 0.97,
          boxShadow: '0 0 0 rgba(0,0,0,0)',
        },
        whileInView: {
          opacity: 1,
          y: 0,
          scale: 1,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
        },
        transition: { duration: 0.9, ease: easing.dramatic },
      };

  return (
    <section className="bg-off-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        {/*
         * Spotlight H2 uses text-display-lg (not -xl), so the 720px
         * container is safe here. See HowItWorks for the widened-container
         * pattern that applies to text-display-xl H2s.
         */}
        <div className="max-w-[720px] mx-auto text-center">
          <motion.h2
            className="text-display-lg text-grey-900"
            viewport={{ once: true, amount: 0.3 }}
            {...h2Motion}
          >
            Your day&rsquo;s moving tasks, done before your coffee&rsquo;s cold.
          </motion.h2>
        </div>

        <motion.div
          className="mt-24 max-w-[720px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={numbersContainer}
        >
          {numberBlocks.map((block, i) => (
            <motion.div
              key={block.number}
              className={i === 0 ? '' : 'mt-20'}
              variants={blockVariants}
            >
              <motion.p
                className="text-display-xl font-black text-grey-900"
                variants={numberScaleVariants}
              >
                {block.number}
              </motion.p>
              <p className="text-body-lg text-grey-500 mt-4">
                {block.caption}
              </p>
            </motion.div>
          ))}

          <motion.div
            className="border-t border-grey-200 max-w-[200px] mx-auto mt-16"
            variants={disclaimerVariants}
          />
          <motion.p
            className="text-body-sm text-grey-400 italic mt-6 text-center"
            variants={disclaimerVariants}
          >
            Based on averages
          </motion.p>
        </motion.div>

        <div className="mt-20">
          <motion.div
            className="mx-auto max-w-[720px] text-center rounded-xl bg-white shadow-soft px-8 py-16 md:px-16 md:py-20"
            viewport={{ once: true, amount: 0.4 }}
            {...pinkyMotion}
          >
            <h3 className="text-display-lg text-grey-900">
              Someone in your corner. Finally.
            </h3>
            <p className="text-body-lg text-grey-500 mt-6">
              Peezy vendors don&rsquo;t buy their way onto the platform. They
              earn their spot, and they keep it by showing up. If one of them
              lets you down, we handle it. If they won&rsquo;t make it right,
              we will. That&rsquo;s the Peezy Pinky Promise.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
