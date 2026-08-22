import Link from "next/link";
import { APP_STORE_URL, PREORDER } from "@/lib/site";

/** V4 nav: flat, solid bg, constant bottom hairline.
 *  Wordmark left; section anchors + yellow CTA right. */
export default function Header() {
  return (
    <header className="nav-fade fixed inset-x-0 top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-[22px]" aria-label="Peezy home">
          Peezy
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7">
          <a href="/#how" className="link-ul hidden text-[0.9375rem] font-medium sm:inline">
            How it works
          </a>
          <a href="/#features" className="link-ul hidden text-[0.9375rem] font-medium sm:inline">
            What you get
          </a>
          <a href={APP_STORE_URL} className="btn-cta btn-cta-sm">
            {PREORDER ? "Pre-order" : "Get the app"}
          </a>
        </nav>
      </div>
    </header>
  );
}
