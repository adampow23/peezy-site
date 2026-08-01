import type { ReactNode } from "react";

/** iPhone-proportioned frame; carries the site's single shadow. */
export default function DeviceFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative mx-auto aspect-[720/1560] w-full max-w-[340px] overflow-hidden rounded-[44px] border-[10px] border-ink bg-ink shadow-lift ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden rounded-[34px]">{children}</div>
    </div>
  );
}
