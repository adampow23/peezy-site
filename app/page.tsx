import Image from "next/image";
import Link from "next/link";
import { ScanPhone, PlanPhone } from "@/components/home/Phone";
import { CtaStack, CtaInline } from "@/components/home/Cta";
import { SITE_URL, APP_STORE_URL, FOUNDER_EMAIL } from "@/lib/site";
import "./home.css";

function Icon({ d }: { d: React.ReactNode }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d}
    </svg>
  );
}

const STEPS = [
  {
    title: "Add a room",
    sub: "Start anywhere. The kitchen is a good first one.",
    icon: <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 10.5v6M9 13.5h6" />,
  },
  {
    title: "Record the room",
    sub: "One slow pan with your phone. About two minutes.",
    icon: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="3" />
        <path d="M16 10.5l5-3v9l-5-3z" />
      </>
    ),
  },
  {
    title: "Confirm the items",
    sub: "PackRx lists what it saw. You tap yes or fix it.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8 12.5l2.5 2.5L16 9.5" />
      </>
    ),
  },
];

const FEATURES = [
  { title: "Packing", text: "Your day-by-day plan from PackRx. The part you just saw." },
  { title: "Hiring help", text: "We get the quotes for you, so you don’t spend a weekend on the phone." },
  { title: "Address changes", text: "Mail, license, bank, employer, insurance, subscriptions. We walk you through each one." },
  { title: "Utilities & internet", text: "Shut off here, set up there, timed so you’re never without power or Wi‑Fi." },
  { title: "Everything else", text: "The stuff that doesn’t fit a category. Ask, and we’ll figure it out with you." },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Peezy Move LLC",
        url: SITE_URL,
        address: { "@type": "PostalAddress", addressLocality: "Kansas City", addressRegion: "MO", addressCountry: "US" },
      },
      { "@type": "SoftwareApplication", name: "Peezy", operatingSystem: "iOS", applicationCategory: "LifestyleApplication", url: APP_STORE_URL },
    ],
  };

  return (
    <div className="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="nav">
        <div className="wrap nav-in">
          <Link href="/" className="wordmark" aria-label="Peezy home">
            Peezy
          </Link>
          <CtaInline />
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section className="hero wrap" aria-labelledby="hero-h">
          <h1 id="hero-h" className="h-hero">
            Know exactly what to pack <span className="dim">today.</span>
          </h1>
          <p className="lede">
            Record a short video of each room. Peezy PackRx turns what&rsquo;s actually in your home into a day-by-day packing plan, so you
            know what to pack today and nothing&rsquo;s left for the night before.
          </p>
          <CtaStack className="hero-cta" />

          <div className="hero-card">
            <div className="lockup">
              <p className="lockup-peezy">Peezy</p>
              <Image src="/home/packrx.png" alt="PackRx" width={2010} height={705} className="lockup-mark" priority />
              <p className="lockup-copy">
                <b>One of Peezy&rsquo;s core features.</b> PackRx decides what gets packed, in what order, and on which day, so the whole job
                is figured out before you tape the first box. Nothing to plan, nothing to guess.
              </p>
            </div>
            <div className="phones">
              <ScanPhone />
              <svg className="phones-arrow" viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 12h38M32 4l10 8-10 8" />
              </svg>
              <PlanPhone />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how wrap" id="how" aria-labelledby="how-h">
          <h2 id="how-h" className="h2">
            How does PackRx work?
          </h2>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step">
                <span className="step-n">{i + 1}</span>
                <span className="step-icon">
                  <Icon d={s.icon} />
                </span>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-sub">{s.sub}</p>
              </li>
            ))}
          </ol>
          <p className="repeat">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5" />
            </svg>
            Repeat for every room. The plan builds as you go.
          </p>
        </section>

        {/* What else */}
        <section className="else wrap" id="features" aria-labelledby="else-h">
          <div className="else-head">
            <h2 id="else-h" className="h2 h2-left">
              What else can Peezy do?
            </h2>
            <p className="lede">
              Moving is a dozen jobs on a dozen deadlines, no two moves alike, and no playbook to borrow. And when it rains, it pours.
            </p>
          </div>
          <dl className="features">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature">
                <dt>{f.title}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
          <CtaStack note={false} className="else-cta" />
        </section>

        {/* Founder */}
        <section className="founder-wrap wrap" aria-labelledby="founder-h">
          <div className="founder">
            <Image src="/home/adam.png" alt="Adam Powell" width={160} height={160} className="founder-photo" />
            <h2 id="founder-h" className="founder-h">
              Why I built this
            </h2>
            <blockquote className="founder-quote">
              &ldquo;For years I watched people scramble through move day and walk into their new home defeated.&rdquo;
            </blockquote>
            <div className="founder-meta">
              <p className="founder-name">Adam Powell, Founder</p>
              <p className="founder-path">Truck team &rarr; Move coordinator &rarr; Franchise partner</p>
              <p className="founder-cred">500+ moves on the truck. 1,200+ coordinated. And the guy who got the call on a few thousand more.</p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final wrap" aria-labelledby="final-h">
          <h2 id="final-h" className="h-final">
            From overwhelmed to packed, <span className="dim">one box at a time.</span>
          </h2>
          <CtaStack className="final-cta" />
        </section>
      </main>

      <footer className="foot wrap">
        <div className="foot-left">
          <span className="wordmark">Peezy</span>
          <span>&copy; 2026 Peezy Move LLC &middot; Kansas City</span>
        </div>
        <nav className="foot-right" aria-label="Footer">
          <a href={`mailto:${FOUNDER_EMAIL}`}>{FOUNDER_EMAIL}</a>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </footer>
    </div>
  );
}
