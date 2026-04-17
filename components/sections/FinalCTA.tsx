'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { duration, easing } from '@/lib/motion-config';

const H2_TEXT = 'The hard part\u2019s over.';

function AnimatedH2({ reduced }: { reduced: boolean }) {
  if (reduced) {
    return (
      <motion.h2
        className="text-display-xl text-grey-900"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: duration.quick } },
        }}
      >
        {H2_TEXT}
      </motion.h2>
    );
  }

  const words = H2_TEXT.split(' ');

  return (
    <motion.h2
      className="text-display-xl text-grey-900"
      aria-label={H2_TEXT}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.04 },
        },
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {Array.from(word).map((char, ci) => (
            <motion.span
              key={ci}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 8 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: easing.smooth },
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </motion.h2>
  );
}

export default function FinalCTA() {
  const reduced = useReducedMotion() ?? false;

  const subtitleVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 0.4, ease: easing.smooth },
        },
      };

  const buttonVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring' as const,
            stiffness: 200,
            damping: 12,
            delay: 0.7,
          },
        },
      };

  const disclosureVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1.1, ease: easing.smooth },
        },
      };

  return (
    <section className="bg-off-white border-b border-grey-100 py-32 md:py-50">
      <Container>
        {/*
         * H2 uses text-display-xl — apply the widened-container pattern
         * established in HowItWorks (max-w-[960px]) so the display size
         * doesn't orphan words at desktop widths.
         */}
        <motion.div
          className="max-w-[960px] mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <AnimatedH2 reduced={reduced} />

          <motion.p
            className="text-body-xl text-grey-500 mt-8 max-w-[640px] mx-auto"
            variants={subtitleVariants}
          >
            Download the app. The 3-minute assessment builds your plan.
            Try Peezy+ free for 3 days — cancel anytime.
          </motion.p>

          <motion.div className="mt-12" variants={buttonVariants}>
            <Button href="#download" size="large">
              Try Peezy for free
            </Button>
          </motion.div>

          <motion.p
            className="text-body-sm text-grey-400 mt-8 max-w-[560px] mx-auto"
            variants={disclosureVariants}
          >
            Peezy+ is an auto-renewing subscription. Cancel anytime in Settings
            &gt; Apple ID &gt; Subscriptions.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
