'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

interface SpotlightProps {
  hasVideoSource?: boolean;
}

export default function Spotlight({ hasVideoSource = false }: SpotlightProps = {}) {
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

  const videoMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, scale: 0.96 },
        whileInView: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, ease: easing.smooth },
      };

  const featuresContainer = {
    hidden: {},
    visible: {
      transition: reduced ? {} : { staggerChildren: 0.15 },
    },
  };

  const featureVariants = reduced
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
          className="mt-12 mx-auto w-full max-w-[400px]"
          viewport={{ once: true, amount: 0.3 }}
          {...videoMotion}
        >
          {/*
           * PHASE 4 TODO: when real video is wired in, trigger video.play()
           * via IntersectionObserver at amount 0.8 here (and pause when
           * leaving viewport to conserve battery).
           */}
          <div className="relative rounded-xl overflow-hidden shadow-hero aspect-[9/19.5]">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/spotlight-poster.svg"
              aria-label="Peezy app spotlight"
              className="w-full h-full object-cover"
            />
            {!hasVideoSource && (
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
              >
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 88 88"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="44"
                    cy="44"
                    r="43"
                    fill="none"
                    stroke="var(--color-grey-400)"
                    strokeWidth="2"
                  />
                  <path d="M32 26 L64 44 L32 62 Z" fill="var(--color-grey-400)" />
                </svg>
                <p className="mt-6 text-grey-500 text-[14px] font-semibold tracking-[0.2em]">
                  SPOTLIGHT
                </p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={featuresContainer}
        >
          <motion.div className="flex flex-col h-full" variants={featureVariants}>
            <h3 className="text-display-md text-grey-900">
              Never worry about forgetting something.
            </h3>
            <p className="text-body-lg text-grey-500 mt-4">
              Every task you need. None that you don&rsquo;t. It&rsquo;s not a
              checklist — it&rsquo;s your checklist.
            </p>
          </motion.div>
          <motion.div className="flex flex-col h-full" variants={featureVariants}>
            <h3 className="text-display-md text-grey-900">
              Your move, on autopilot.
            </h3>
            <p className="text-body-lg text-grey-500 mt-4">
              You shouldn&rsquo;t have to put your life on hold just because
              you&rsquo;re moving. We handle everything we can — you focus on
              what matters.
            </p>
          </motion.div>
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
