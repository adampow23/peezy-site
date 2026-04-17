'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { duration, easing } from '@/lib/motion-config';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size?: 'default' | 'large';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  size = 'default',
  className,
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'bg-ink text-white',
    'rounded-full font-semibold',
    'shadow-soft',
    size === 'default' && 'px-8 py-4 text-base',
    size === 'large' && 'px-12 py-5 text-lg',
    className
  );

  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion
    ? {
        whileHover: { boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)' },
        whileTap: {},
      }
    : {
        whileHover: { scale: 1.03, boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)' },
        whileTap: { scale: 0.97 },
        transition: { duration: duration.instant, ease: easing.snappy },
      };

  if (href) {
    return (
      <motion.a href={href} className={baseStyles} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={onClick} className={baseStyles} {...motionProps}>
      {children}
    </motion.button>
  );
}
