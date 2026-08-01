import type { ReactNode } from "react";

export default function Section({
  id,
  eyebrow,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 md:py-36 ${className}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        {children}
      </div>
    </section>
  );
}
