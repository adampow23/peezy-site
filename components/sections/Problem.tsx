'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const blocks = [
  {
    headline: "Every move is different. The advice isn't.",
    body: "The internet is full of generic moving checklists that pretend everyone is moving the same way. They're not. A studio apartment two miles away is nothing like a five-bedroom cross-country move with kids and a dog. Generic checklists leave you guessing about what actually applies to your situation — and what you're missing.",
  },
  {
    headline: "The workload is brutal — and life doesn't pause.",
    body: "Packing, planning, hiring, comparing quotes, coordinating dates, changing addresses, sorting utilities — it's a full-time job stacked on top of your actual job. Most people end up exhausted, behind, and making last-minute decisions they regret.",
  },
  {
    headline: 'Every decision feels like a gamble.',
    body: "A move involves dozens of buying decisions — movers, storage, internet, insurance, cleaners, junk removal, and more. You don't know which companies are good, which contracts are fair, or what questions to ask. So you guess. And hope.",
  },
];

export default function Problem() {
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
    <section className="bg-off-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        <div className="max-w-[960px] mx-auto text-center">
          <motion.h2
            className="text-display-xl text-grey-900"
            viewport={{ once: true, amount: 0.3 }}
            {...h2Motion}
          >
            Moving sucks for three reasons.
            <br />
            We fixed all&nbsp;three.
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
