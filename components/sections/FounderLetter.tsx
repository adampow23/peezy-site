'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const paragraphs = [
  'I spent nearly a decade in the moving industry — not building software, but working directly with people in the middle of their moves.',
  'Here’s what I learned: the hardest part isn’t the logistics. It’s the feeling that you’re in it alone.',
  'When someone had a person in their corner — someone who knew what to do and when to do it — the entire experience changed. Not because the move got easier, but because they weren’t carrying the mental weight alone.',
  'That part was simple: be there, know your stuff, care about the outcome.',
  'But the industry doesn’t reward that. It rewards whoever spends the most on ads. The best moving company in your city probably isn’t at the top of Google — it’s the one investing in better people, better training, and better service instead of paying for clicks. And because of that, most people never find them.',
  'That’s backwards. And it’s why I built Peezy.',
  'I spent years helping people one move at a time. Now I get to help millions.',
];

export default function FounderLetter() {
  const reduced = useReducedMotion() ?? false;

  const titleMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: easing.soft },
      };

  const paragraphMotion = {
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easing.soft },
  };

  const kickerMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: easing.soft },
      };

  const signoffMotion = reduced
    ? {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: duration.quick },
      }
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: easing.soft },
      };

  const paragraphViewport = { once: true, amount: 0.4 };

  return (
    <section className="bg-white border-b border-grey-100 py-32 md:py-42">
      <Container>
        <article className="w-full max-w-[680px] mx-auto border-t border-b border-grey-200 pt-16 pb-20 md:pt-20 md:pb-24">
          <motion.h2
            className="text-display-lg text-grey-900"
            viewport={{ once: true, amount: 0.3 }}
            {...titleMotion}
          >
            Why Peezy exists
          </motion.h2>

          {reduced ? (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: duration.quick }}
            >
              {paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={`text-body-lg text-grey-700 ${i === 0 ? 'mt-16' : 'mt-6'}`}
                >
                  {text}
                </p>
              ))}
            </motion.div>
          ) : (
            paragraphs.map((text, i) => (
              <motion.p
                key={i}
                className={`text-body-lg text-grey-700 ${i === 0 ? 'mt-16' : 'mt-6'}`}
                viewport={paragraphViewport}
                {...paragraphMotion}
              >
                {text}
              </motion.p>
            ))
          )}

          <motion.p
            className="text-display-md text-grey-900 italic mt-12"
            viewport={{ once: true, amount: 0.5 }}
            {...kickerMotion}
          >
            Our users deserve the best service.
            <br />
            And the best service deserves our users.
          </motion.p>

          <motion.div
            className="mt-14"
            viewport={{ once: true, amount: 0.6 }}
            {...signoffMotion}
          >
            <p className="text-body-xl text-grey-900">— Adam</p>
            <p className="text-body-sm text-grey-500 mt-1">Founder, Peezy</p>
          </motion.div>
        </article>
      </Container>
    </section>
  );
}
