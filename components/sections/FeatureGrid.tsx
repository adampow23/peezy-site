'use client';

import { motion, useReducedMotion } from 'framer-motion';
import {
  ClipboardList,
  Sun,
  CircleCheck,
  BadgeCheck,
  Calendar,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

interface Feature {
  Icon: LucideIcon;
  headline: string;
  tagline: string;
  description: string;
}

const features: Feature[] = [
  {
    Icon: ClipboardList,
    headline: 'Personalized assessment',
    tagline: 'Built from your move, not a template.',
    description:
      'Answer a few questions about your timeline, home, family, and plans. Peezy builds your plan from scratch — no generic checklists.',
  },
  {
    Icon: Sun,
    headline: 'Daily task plan',
    tagline: 'Two minutes a day. Done by move day.',
    description:
      'Wake up to one task. Complete it in under two minutes. Peezy handles the scheduling.',
  },
  {
    Icon: CircleCheck,
    headline: 'Handled by Peezy',
    tagline: 'We handle everything we can.',
    description:
      'Address changes, utility transfers, subscription updates — we take care of what we can on your behalf. You focus on what matters.',
  },
  {
    Icon: BadgeCheck,
    headline: 'Vetted vendor network',
    tagline: 'Movers, cleaners, and more. All accountable.',
    description:
      "Pre-screened local vendors who've earned their spot. We handle the coordination.",
  },
  {
    Icon: Calendar,
    headline: 'Timeline that adapts',
    tagline: 'Move day moves. So does your plan.',
    description:
      'Date changed? New variable? Peezy reshuffles your tasks automatically.',
  },
  {
    Icon: MessageCircle,
    headline: 'Real-time support',
    tagline: "Chat with someone who's actually done this.",
    description:
      'Nine years of moving industry experience, embedded in your pocket.',
  },
];

export default function FeatureGrid() {
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
      transition: reduced ? {} : { staggerChildren: 0.08 },
    },
  };

  const cardVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: duration.quick } },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easing.smooth },
        },
      };

  return (
    <section className="bg-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        <motion.h2
          className="text-display-lg text-ink text-center max-w-[800px] mx-auto mb-20"
          viewport={{ once: true, amount: 0.3 }}
          {...h2Motion}
        >
          Everything your move needs. Nothing it doesn&rsquo;t.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardsContainer}
        >
          {features.map(({ Icon, headline, tagline, description }) => (
            <motion.div
              key={headline}
              className="bg-off-white rounded-lg p-8 md:p-10 flex flex-col items-start gap-4"
              variants={cardVariants}
            >
              <Icon size={36} strokeWidth={1.5} className="text-ink" />
              <div>
                <h3 className="text-display-md text-ink mb-2">{headline}</h3>
                <p className="text-body-lg italic text-grey-700 mb-3">
                  {tagline}
                </p>
                <p className="text-body-lg text-grey-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
