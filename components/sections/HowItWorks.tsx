'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const steps = [
  {
    number: '01',
    label: 'STEP 01',
    headline: 'Tell us about your move.',
    supporting: "About three minutes. We'll ask the right questions.",
  },
  {
    number: '02',
    label: 'STEP 02',
    headline: "Wake up to a plan that's already built.",
    supporting:
      "Every task you need. None you don't. Sorted by your move date.",
  },
  {
    number: '03',
    label: 'STEP 03',
    headline: 'Two minutes a day. Done by move day.',
    supporting: 'We handle what we can. You handle what matters.',
  },
];

export default function HowItWorks() {
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

  const subtitleMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.15, ease: easing.smooth },
      };

  const stepsContainer = {
    hidden: {},
    visible: {
      transition: reduced ? {} : { staggerChildren: 0.2 },
    },
  };

  const stepCard = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : { hidden: {}, visible: {} };

  const numberVariants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, ease: easing.smooth },
        },
      };

  const labelVariants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.1, ease: easing.smooth },
        },
      };

  const headlineVariants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.2, ease: easing.smooth },
        },
      };

  const supportingVariants = reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3, ease: easing.smooth },
        },
      };

  return (
    <section className="bg-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        {/*
         * PATTERN: Section H2s using text-display-xl need a wider container
         * (max-w-[960px]) than the subtitle/body copy beneath them. The
         * display sizes scale with viewport via clamp() and overflow a
         * 720px container at desktop widths, orphaning words onto their own
         * lines. Apply this pattern to any section H2 using text-display-xl
         * (currently HowItWorks and FinalCTA).
         */}
        <div className="max-w-[960px] mx-auto text-center">
          <motion.h2
            className="text-display-xl text-grey-900"
            viewport={{ once: true, amount: 0.25 }}
            {...h2Motion}
          >
            You used to forget what you needed to do.
            <br />
            Now you might forget that you&rsquo;re even moving.
          </motion.h2>
          <motion.p
            className="text-body-xl text-grey-500 mt-6 max-w-[720px] mx-auto"
            viewport={{ once: true, amount: 0.25 }}
            {...subtitleMotion}
          >
            40+ hours of moving admin, handled in under an hour.
          </motion.p>
        </div>

        <motion.div
          className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stepsContainer}
        >
          {steps.map((step) => (
            <motion.div
              key={step.label}
              className="flex flex-col h-full"
              variants={stepCard}
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none select-none block font-black text-grey-100 tracking-[-0.05em] mb-6"
                style={{ fontSize: 'clamp(120px, 14vw, 180px)', lineHeight: 0.85 }}
                variants={numberVariants}
              >
                {step.number}
              </motion.span>
              <motion.p
                className="text-caption text-grey-400 mb-3"
                variants={labelVariants}
              >
                {step.label}
              </motion.p>
              <motion.h3
                className="text-display-md text-grey-900"
                variants={headlineVariants}
              >
                {step.headline}
              </motion.h3>
              <motion.p
                className="text-body-lg text-grey-500 mt-3 max-w-[320px]"
                variants={supportingVariants}
              >
                {step.supporting}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
