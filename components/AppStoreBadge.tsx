import Image from "next/image";
import { APP_STORE_URL, PREORDER } from "@/lib/site";

/** Official Apple App Store badge — unmodified artwork self-hosted under
 *  /public/badges (source: Apple's marketing guidelines / badge API).
 *  Guideline compliance: black version (preferred), rendered ≥40px tall,
 *  surrounding layout keeps ≥ badge-height/4 clear space, never restyled.
 *  PREORDER (lib/site.ts) picks pre-order vs download artwork site-wide. */
const BADGES = {
  preorder: {
    src: "/badges/app-store-preorder-black.svg",
    alt: "Pre-order on the App Store",
    width: 153, // 52px tall at the artwork's 120.66:41 aspect
    height: 52,
  },
  download: {
    src: "/badges/app-store-download-black.svg",
    alt: "Download on the App Store",
    width: 156, // 52px tall at the artwork's 119.66:40 aspect
    height: 52,
  },
} as const;

export default function AppStoreBadge({ className = "" }: { className?: string }) {
  const badge = PREORDER ? BADGES.preorder : BADGES.download;
  return (
    <a href={APP_STORE_URL} className={`inline-flex ${className}`}>
      <Image src={badge.src} alt={badge.alt} width={badge.width} height={badge.height} unoptimized />
    </a>
  );
}
