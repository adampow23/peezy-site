import Link from "next/link";
import { SUPPORT_EMAIL } from "@/lib/site";

const links = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/about", label: "About" },
  { href: "/disclosure", label: "Affiliate Disclosure" },
  { href: "/contact", label: "Contact" },
];

/** Quiet, small, single row on desktop. */
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-6 py-10 text-[0.8125rem] text-ink-soft md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2026 Peezy Move LLC · Kansas City, MO</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-ul hover:text-ink">
              {l.label}
            </Link>
          ))}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="link-ul hover:text-ink">
            {SUPPORT_EMAIL}
          </a>
        </nav>
      </div>
    </footer>
  );
}
