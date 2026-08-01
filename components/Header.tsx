"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AppStoreBadge from "./AppStoreBadge";

const links = [
  { href: "/about", label: "About" },
  { href: "/realtors", label: "For Realtors" },
  { href: "/promise", label: "The Promise" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-150 ${solid ? "header-solid" : ""}`}>
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-[22px]" aria-label="Peezy home">
          Peezy
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[0.95rem] font-medium hover:text-yellow-deep">
              {l.label}
            </Link>
          ))}
          <AppStoreBadge compact />
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-0 top-16 z-40 bg-paper px-6 py-10 md:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="font-display text-2xl" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <div className="pt-4">
              <AppStoreBadge />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
