import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/realtors", label: "For Realtors" },
  { href: "/promise", label: "The Promise" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/disclosure", label: "Disclosure" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1200px] px-6 py-12 md:px-10">
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          {nav.map((l) => (
            <Link key={l.href} href={l.href} className="text-[0.9rem] text-ink-soft hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-[0.8125rem] text-ink-soft">© 2026 Peezy Move LLC · Kansas City, MO</p>
      </div>
    </footer>
  );
}
