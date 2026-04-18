'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ListChecks, Plane, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

export default function Spotlight() {
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
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardsContainer}
        >
          {/* Card 1: Never forget */}
          <motion.div className="flex flex-col" variants={cardVariants}>
            <div aria-hidden="true" className="hidden md:block h-[36px] mb-4" />
            <div className="bg-white border border-grey-200 rounded-lg p-8 md:p-10 flex flex-col items-start gap-6 flex-1">
              <ListChecks size={40} strokeWidth={1.5} className="text-ink" />
              <h3 className="text-display-md text-ink">
                Never worry about forgetting something.
              </h3>
              <p className="text-body-lg text-grey-700 leading-relaxed">
                Every task you need. None that you don&rsquo;t. It&rsquo;s not a checklist — it&rsquo;s your checklist.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Autopilot */}
          <motion.div className="flex flex-col" variants={cardVariants}>
            <div aria-hidden="true" className="hidden md:block h-[36px] mb-4" />
            <div className="bg-white border border-grey-200 rounded-lg p-8 md:p-10 flex flex-col items-start gap-6 flex-1">
              <Plane size={40} strokeWidth={1.5} className="text-ink" />
              <h3 className="text-display-md text-ink">
                Your move, on autopilot.
              </h3>
              <p className="text-body-lg text-grey-700 leading-relaxed">
                You shouldn&rsquo;t have to put your life on hold just because you&rsquo;re moving. We handle everything we can — you focus on what matters.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Pinky Promise — accented */}
          <motion.div className="flex flex-col" variants={cardVariants}>
            <div className="text-caption uppercase text-ink font-semibold mb-4 h-[36px] flex items-center">
              THE ONE THAT SETS US APART
            </div>
            <div className="bg-white border border-grey-200 border-t-2 border-t-ink rounded-lg p-8 md:p-10 flex flex-col items-start gap-6 shadow-soft flex-1">
              <ShieldCheck size={40} strokeWidth={1.5} className="text-ink" />
              <h3 className="text-display-md text-ink">
                Someone in your corner. Finally.
              </h3>
              <div className="text-body-lg text-grey-700 leading-relaxed space-y-4">
                <p>
                  Peezy vendors don&rsquo;t buy their way onto the platform. They earn their spot, and they keep it by showing up. If one of them lets you down, we handle it. If they won&rsquo;t make it right, we will.
                </p>
                <p className="font-semibold">
                  That&rsquo;s the Peezy Pinky Promise.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
