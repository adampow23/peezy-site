'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { HelpCircle, Clock, Compass } from 'lucide-react';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const beats = [
  { Icon: HelpCircle, label: "You don't know what to do." },
  { Icon: Clock, label: "You don't know when to do it." },
  { Icon: Compass, label: "You don't know how to do it." },
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

  const cardsContainer = {
    hidden: {},
    visible: {
      transition: reduced ? {} : { staggerChildren: 0.12 },
    },
  };

  const cardVariants = reduced
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
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardsContainer}
        >
          {beats.map(({ Icon, label }) => (
            <motion.div
              key={label}
              className="bg-white border border-grey-200 rounded-lg p-8 md:p-10 flex flex-col items-start gap-6"
              variants={cardVariants}
            >
              <Icon size={40} strokeWidth={1.5} className="text-ink" />
              <p className="text-display-md text-grey-900">
                {label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 max-w-[640px] mx-auto text-center"
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
