'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { duration, easing } from '@/lib/motion-config';

const H1_TEXT = 'Moving just got a hell of a lot easier.';

function AnimatedH1({ reduced }: { reduced: boolean }) {
  if (reduced) {
    return (
      <motion.h1
        className="text-display-hero text-grey-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: duration.quick, delay: 0.1 }}
      >
        {H1_TEXT}
      </motion.h1>
    );
  }

  const words = H1_TEXT.split(' ');

  return (
    <motion.h1
      className="text-display-hero text-grey-900"
      aria-label={H1_TEXT}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
          {word.split('').map((char, ci) => (
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
    </motion.h1>
  );
}

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mockupY = useTransform(
    scrollYProgress,
    [0, 1],
    reduced ? [0, 0] : [0, -80]
  );

  const fadeUp = (delay: number, distance = 20) =>
    reduced
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: duration.quick, delay },
        }
      : {
          initial: { opacity: 0, y: distance },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: easing.smooth },
        };

  return (
    <section
      ref={sectionRef}
      className="bg-white border-b border-grey-100 py-24 md:py-32 lg:py-42"
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <div className="min-w-0">
            <AnimatedH1 reduced={reduced} />
            <motion.p
              className="text-display-md text-grey-500 italic mt-3"
              {...fadeUp(0.8)}
            >
              The first moving app that actually does the work for you.
            </motion.p>
            <motion.p
              className="text-body-xl text-grey-700 mt-8 max-w-[560px]"
              {...fadeUp(1.0)}
            >
              Tell us about your move. We build the plan, coordinate the vendors,
              and handle what we can on your behalf. You live your life.
            </motion.p>
            <motion.div
              className="mt-10"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.95 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: reduced ? duration.quick : 0.5,
                delay: 1.3,
                ease: easing.smooth,
              }}
            >
              <Button href="#download">Try Peezy for free</Button>
            </motion.div>
          </div>
          <motion.div
            className="relative flex justify-center md:justify-end mt-12 md:mt-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, var(--color-grey-50) 0%, transparent 70%)',
              y: mockupY,
            }}
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            transition={{
              duration: reduced ? duration.quick : 1.2,
              delay: 0.3,
              ease: easing.smooth,
            }}
          >
            <Image
              src="/images/hero-mockup.png"
              alt="Peezy app on iPhone"
              width={1260}
              height={2240}
              priority
              sizes="(min-width: 768px) 420px, 90vw"
              className="w-full h-auto max-w-[420px]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
