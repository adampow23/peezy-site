'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { duration, easing } from '@/lib/motion-config';

const paragraphs = [
  'I spent the better part of a decade in the moving industry. Not building software — on the ground, working directly with people in the middle of their moves.',
  'Here’s what I learned: the hardest part of moving isn’t the logistics. It’s the feeling that you’re in it alone. When someone had a person in their corner — someone who knew what to do and when to do it — the entire experience changed. Not because the physical move got easier, but because they stopped carrying the mental weight by themselves.',
  'That part was simple. Be there. Know your stuff. Care about the outcome.',
  'But here’s the ugly truth about service industries: they don’t reward the companies that care. They reward the companies that spend the most on advertising. The best moving company in your city probably isn’t the one at the top of Google. It’s the one that spent its money on better trucks, better training, and better people instead of paying for clicks. And because of that, you’ll probably never find them.',
  'That’s completely backwards. And it’s the reason I built Peezy the way I did.',
  'I spent years helping people one move at a time. Peezy lets me help millions. That’s the whole point.',
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
            Our users deserve the best service. And the best service deserves
            our users.
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
