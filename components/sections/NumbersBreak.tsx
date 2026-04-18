'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const numbers = [
  { value: '40+', caption: 'hours of moving admin' },
  { value: '1', caption: 'hour or less, total with Peezy' },
  { value: '2', caption: 'minutes a day. Done.' },
];

export default function NumbersBreak() {
  const reduced = useReducedMotion() ?? false;

  const framingMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.4, ease: easing.smooth },
      };

  const numbersContainer = {
    hidden: {},
    visible: {
      transition: reduced
        ? {}
        : { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const numberVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.7, ease: easing.smooth },
        },
      };

  const disclaimerMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.4, delay: 1.0, ease: easing.smooth },
      };

  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <div className="text-center">
          <motion.p
            className="text-body-lg text-grey-400 mb-16 md:mb-20"
            viewport={{ once: true, amount: 0.3 }}
            {...framingMotion}
          >
            Here&rsquo;s what that means for you:
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={numbersContainer}
          >
            {numbers.map((n) => (
              <motion.div
                key={n.value}
                className="flex flex-col items-center"
                variants={numberVariants}
              >
                <div className="text-display-xl text-white font-black mb-4">
                  {n.value}
                </div>
                <p className="text-body-lg text-grey-400">{n.caption}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-caption text-grey-500 italic"
            viewport={{ once: true, amount: 0.3 }}
            {...disclaimerMotion}
          >
            Based on averages
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
