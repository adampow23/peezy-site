"use client";
import { useId, useState } from "react";
import Link from "next/link";

export default function FAQItem({
  q,
  a,
  links,
}: {
  q: string;
  a: string;
  links?: { text: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`faq-${id}`}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-[44px] w-full items-center justify-between gap-6 py-5 text-left text-[1.0625rem] font-semibold hover:text-yellow-deep"
        >
          {q}
          <svg
            className="faq-chevron shrink-0"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>
      <div id={`faq-${id}`} role="region" aria-labelledby={id} className="faq-panel" data-open={open}>
        <div>
          <p className="max-w-[62ch] pb-6 text-ink-soft">
            {a}
            {links?.map((l) => (
              <span key={l.href}>
                {" "}
                <Link href={l.href} className="text-ink underline underline-offset-2 hover:text-yellow-deep">
                  {l.text} →
                </Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
