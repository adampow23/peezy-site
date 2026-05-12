'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const blocks = [
  {
    headline: 'A personalized plan, based on your actual move.',
    body: "Peezy starts with a quick assessment that captures the details of your move — size, distance, timeline, what you're bringing, who's involved. From that, we build a plan that applies to your situation. Not a generic checklist. Your checklist.",
  },
  {
    headline: 'Daily tasks, broken into bite-sized steps.',
    body: 'Instead of staring at a wall of work, you get a manageable list of what to do each day leading up to the move. Some tasks Peezy handles for you completely. Others come with clear instructions, the right questions to ask, and the information you need to make good decisions fast.',
  },
  {
    headline: 'Vetted companies. Accountable service. No gambling.',
    body: "When it's time to hire, Peezy gives you a curated list of companies we've already vetted using insider standards — and they only get paid when the job goes well. The decisions are still yours. But the risk of choosing wrong is gone.",
  },
];

export default function Solution() {
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

  const blocksContainer = {
    hidden: {},
    visible: {
      transition: reduced ? {} : { staggerChildren: 0.12 },
    },
  };

  const blockVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easing.smooth },
        },
      };

  return (
    <section className="bg-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        <div className="max-w-[960px] mx-auto text-center">
          <motion.h2
            className="text-display-xl text-grey-900"
            viewport={{ once: true, amount: 0.3 }}
            {...h2Motion}
          >
            Peezy was built to handle all of&nbsp;it.
          </motion.h2>
        </div>

        <motion.div
          className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={blocksContainer}
        >
          {blocks.map((b) => (
            <motion.div
              key={b.headline}
              className="border-t border-grey-200 pt-8 md:pt-10"
              variants={blockVariants}
            >
              <h3 className="text-display-md text-grey-900">{b.headline}</h3>
              <p className="text-body-lg text-grey-500 mt-4 leading-relaxed">
                {b.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
