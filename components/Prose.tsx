import type { ReactNode } from "react";

/** Typographic wrapper for supporting pages. */
export default function Prose({ children }: { children: ReactNode }) {
  return <div className="prose-peezy max-w-[62ch] space-y-5 text-[1.0625rem] leading-[1.7] text-ink-soft [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-yellow-deep [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-[1.6rem] [&_h2]:leading-tight [&_h2]:text-ink [&_strong]:text-ink">{children}</div>;
}
