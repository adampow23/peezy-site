import { APP_STORE_URL } from "@/lib/site";

/** DROP-IN: replace /public/badges/app-store-badge.svg with Apple's official
 *  "Download on the App Store" badge (Apple Marketing Resources, unmodified).
 *  This component needs no code change when the file is swapped. */
export default function AppStoreBadge({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={APP_STORE_URL}
      rel="noopener"
      aria-label="Download Peezy on the App Store"
      className="inline-block transition-transform duration-150 hover:-translate-y-px"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/badges/app-store-badge.svg"
        alt="Download on the App Store"
        height={compact ? 44 : 52}
        width={compact ? 132 : 156}
        style={{ height: compact ? 44 : 52, width: "auto" }}
      />
    </a>
  );
}
