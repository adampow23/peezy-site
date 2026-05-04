'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FormEvent, useId, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { duration, easing } from '@/lib/motion-config';
import {
  EMAIL_REGEX,
  MAX_EMAIL_LENGTH,
  submitWaitlist,
  type WaitlistSource,
} from '@/lib/waitlist';

interface WaitlistFormProps {
  source: WaitlistSource;
  size?: 'default' | 'large';
  align?: 'start' | 'center';
  ctaLabel?: string;
}

type Status = 'idle' | 'open' | 'submitting' | 'success' | 'error';

export default function WaitlistForm({
  source,
  size = 'default',
  align = 'start',
  ctaLabel = 'Get on the list',
}: WaitlistFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const formId = useId();

  const reduced = useReducedMotion() ?? false;

  const sizeClasses =
    size === 'large'
      ? 'px-12 py-5 text-lg'
      : 'px-8 py-4 text-base';

  const buttonBase = cn(
    'inline-flex items-center justify-center',
    'bg-ink text-white rounded-full font-semibold shadow-soft',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    sizeClasses
  );

  const handleReveal = () => {
    setStatus('open');
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    const trimmed = email.trim();
    if (!trimmed || trimmed.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setStatus('submitting');
    try {
      await submitWaitlist(trimmed, source);
      setStatus('success');
    } catch {
      setStatus('open');
      setError("Something went wrong. Try again?");
    }
  };

  const containerAlign = align === 'center' ? 'items-center' : 'items-start';

  return (
    <div className={cn('flex flex-col w-full', containerAlign)} data-source={source}>
      <AnimatePresence mode="wait" initial={false}>
        {status === 'idle' && (
          <motion.button
            key="cta"
            type="button"
            onClick={handleReveal}
            className={buttonBase}
            initial={reduced ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: duration.quick, ease: easing.smooth }}
            whileHover={reduced ? undefined : { scale: 1.03 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
          >
            {ctaLabel}
          </motion.button>
        )}

        {(status === 'open' || status === 'submitting') && (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            noValidate
            className={cn(
              'flex flex-col gap-3 w-full max-w-[440px]',
              align === 'center' && 'items-center text-center'
            )}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: duration.quick, ease: easing.smooth }}
          >
            <div className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                ref={inputRef}
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                required
                aria-label="Email address"
                aria-invalid={!!error}
                aria-describedby={error ? `${formId}-error` : undefined}
                placeholder="you@example.com"
                value={email}
                disabled={status === 'submitting'}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(null);
                }}
                maxLength={MAX_EMAIL_LENGTH}
                className={cn(
                  'flex-1 min-w-0 rounded-full border border-grey-200 bg-white',
                  'px-6 py-4 text-base text-grey-900 placeholder:text-grey-400',
                  'focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10',
                  'disabled:opacity-60'
                )}
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={cn(buttonBase, 'whitespace-nowrap')}
              >
                {status === 'submitting' ? 'Adding…' : ctaLabel}
              </button>
            </div>
            {error && (
              <p
                id={`${formId}-error`}
                role="alert"
                className="text-body-sm text-red-600"
              >
                {error}
              </p>
            )}
          </motion.form>
        )}

        {status === 'success' && (
          <motion.p
            key="success"
            role="status"
            aria-live="polite"
            className={cn(
              'text-body-lg text-grey-900 font-medium',
              align === 'center' && 'text-center'
            )}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.quick, ease: easing.smooth }}
          >
            You&rsquo;re on the list. We&rsquo;ll be in touch.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
