'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { easing } from '@/lib/motion-config';

const links = [
  {
    label: 'Privacy Policy',
    href: 'https://peezy-1ecrdl.web.app/privacy.html',
    external: true,
  },
  {
    label: 'Terms of Service',
    href: 'https://peezy-1ecrdl.web.app/terms.html',
    external: true,
  },
  {
    label: 'Support',
    href: 'mailto:support@peezymove.com',
    external: false,
  },
];

export default function Footer() {
  const reduced = useReducedMotion() ?? false;

  const footerMotion = reduced
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        transition: { duration: 0.4, ease: easing.soft },
      };

  return (
    <motion.footer
      className="bg-white border-t border-grey-200 py-16"
      viewport={{ once: true, amount: 0.3 }}
      {...footerMotion}
    >
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-8">
          <div>
            <p className="font-black text-ink text-display-md leading-none tracking-[-0.03em]">
              Peezy
            </p>
            <p className="text-body-sm text-grey-500 mt-3">
              Moving just got a hell of a lot easier.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
              {links.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-body-sm text-grey-500 inline-block"
                    initial={{ color: 'var(--color-grey-500)' }}
                    whileHover={
                      reduced
                        ? undefined
                        : { color: 'var(--color-grey-900)' }
                    }
                    transition={{ duration: 0.2, ease: easing.soft }}
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-body-sm text-grey-400">
            © 2026 Peezy Move LLC. All rights reserved.
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}
