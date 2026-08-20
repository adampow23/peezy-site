"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { APP_STORE_URL } from "@/lib/site";

/** Spec nav: 64px, wordmark left, one CTA right, nothing else.
 *  Border-bottom appears on scroll. */
export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav-fade fixed inset-x-0 top-0 z-50 transition-colors duration-150 ${solid ? "header-solid" : ""}`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-[22px]" aria-label="Peezy home">
          Peezy
        </Link>
        <a href={APP_STORE_URL} className="btn-cta btn-cta-sm">
          Get your plan
        </a>
      </div>
    </header>
  );
}
