import type { ReactNode } from "react";

/** Minimal CSS device frame per spec: ~54px radius, thin bezel, no notch. */
export default function PhoneFrame({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div role="img" aria-label={label} className={`phone ${className}`}>
      <div className="phone-screen" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}
