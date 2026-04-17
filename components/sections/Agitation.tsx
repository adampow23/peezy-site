'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-24 h-24 rounded-full bg-grey-50 flex items-center justify-center">
      {children}
    </div>
  );
}

function WhatIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="26" stroke="var(--color-ink)" strokeWidth="2" />
      <path d="M24 25c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 5.5-4.5 7-1.8 1-3.5 2.2-3.5 5v1" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="47" r="1.8" fill="var(--color-ink)" />
    </svg>
  );
}

function WhenIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="26" stroke="var(--color-ink)" strokeWidth="2" />
      <path d="M32 17v15l10 6" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="32" r="2" fill="var(--color-ink)" />
    </svg>
  );
}

function HowIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M14 40c0-8 8-10 12-6s-4 12-8 8 0-16 10-16 12 14 4 18-18-4-10-12 18-6 22 2" stroke="var(--color-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

const beats = [
  { Icon: WhatIcon, label: "You don't know what to do." },
  { Icon: WhenIcon, label: "You don't know when to do it." },
  { Icon: HowIcon, label: "You don't know how to do it." },
];

export default function Agitation() {
  const reduced = useReducedMotion() ?? false;

  const quoteMotion = reduced
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

  const closerMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, delay: 0.3, ease: easing.smooth },
      };

  const beatsContainer = {
    hidden: {},
    visible: {
      transition: reduced
        ? {}
        : { staggerChildren: 0.15, delayChildren: 0.05 },
    },
  };

  const iconVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, scale: 0.85 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, ease: easing.smooth },
        },
      };

  const labelVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.1, ease: easing.smooth },
        },
      };

  return (
    <section className="bg-off-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        <motion.div
          className="max-w-[720px] mx-auto text-center"
          viewport={{ once: true, amount: 0.2 }}
          {...quoteMotion}
        >
          <p className="text-display-lg text-grey-900 italic">
            &ldquo;I&rsquo;m never moving again.&rdquo;
          </p>
          <p className="text-body-lg text-grey-400 italic mt-8">
            — Everyone. Every move ever.
          </p>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={beatsContainer}
        >
          {beats.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <motion.div variants={iconVariants}>
                <IconCircle>
                  <Icon />
                </IconCircle>
              </motion.div>
              <motion.p
                className="text-body-xl text-grey-900 font-semibold mt-6 max-w-[260px]"
                variants={labelVariants}
              >
                {label}
              </motion.p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-24 max-w-[640px] mx-auto text-center"
          viewport={{ once: true, amount: 0.5 }}
          {...closerMotion}
        >
          <p className="text-display-md text-grey-700">
            And there aren&rsquo;t enough hours in the day to figure it out.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
