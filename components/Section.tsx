import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  children,
  className = "",
  "aria-labelledby": ariaLabelledby,
  "aria-label": ariaLabel,
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}) {
  return (
    <section id={id} aria-labelledby={ariaLabelledby} aria-label={ariaLabel} className={`py-16 md:py-28 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}
