'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Play } from 'lucide-react';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

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

  const videoMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.98 },
        whileInView: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.8, delay: 0.2, ease: easing.smooth },
      };

  const captionMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 12 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.4, ease: easing.smooth },
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
            See it in action.
          </motion.h2>
          <motion.p
            className="text-body-xl text-grey-500 mt-6 max-w-[720px] mx-auto"
            viewport={{ once: true, amount: 0.3 }}
            {...subtitleMotion}
          >
            A quick look at the assessment, the daily task system, and how
            Peezy gets your move done.
          </motion.p>
        </div>

        {/*
         * Video placeholder. Flat bg-ink with centered Play icon — no
         * "coming soon" text, no gradients. When the real video file lands,
         * replace this <div> with a <video> tag (no autoplay) at the same
         * aspect-video container width.
         */}
        <motion.div
          className="mt-16 md:mt-20 max-w-[960px] mx-auto"
          viewport={{ once: true, amount: 0.2 }}
          {...videoMotion}
        >
          <div
            role="img"
            aria-label="Peezy product video — coming soon"
            className="relative aspect-video w-full bg-ink rounded-lg overflow-hidden flex items-center justify-center"
          >
            <Play
              aria-hidden="true"
              size={88}
              strokeWidth={1.25}
              fill="rgba(255,255,255,0.9)"
              className="text-white/90"
            />
          </div>
          <motion.p
            className="text-body-sm text-grey-500 mt-6 text-center"
            viewport={{ once: true, amount: 0.3 }}
            {...captionMotion}
          >
            Most people are surprised how little they end up having to do
            themselves.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
