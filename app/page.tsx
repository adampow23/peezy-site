import Image from "next/image";
import Link from "next/link";
import Phone from "@/components/home/Phone";
import Umbrella from "@/components/home/Umbrella";
import { CtaStack, CtaInline } from "@/components/home/Cta";
import { SITE_URL, APP_STORE_URL, FOUNDER_EMAIL } from "@/lib/site";
import "./home.css";

const I = {
  home: <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM12 10.5v6M9 13.5h6" />,
  video: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="3" />
      <path d="M16 10.5l5-3v9l-5-3z" />
    </>
  ),
  box: <path d="M3 7l9-4 9 4-9 4zM3 7v10l9 4 9-4V7M12 11v10" />,
  cart: (
    <>
      <path d="M1 3h4l2 10h11l3-7H6" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  dots: (
    <>
      <circle cx="5" cy="12" r="1.8" fill="#6BFFE3" stroke="none" />
      <circle cx="12" cy="12" r="1.8" fill="#6BFFE3" stroke="none" />
      <circle cx="19" cy="12" r="1.8" fill="#6BFFE3" stroke="none" />
    </>
  ),
};

function Icon({ d, size = 22 }: { d: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d}
    </svg>
  );
}

const STEPS = [
  { n: 1, title: "Add a room", icon: I.home },
  { n: 2, title: "Record the room", icon: I.video },
  { n: 3, title: "Confirm the items", icon: null },
];

const FEATURES = [
  { title: "Packing", icon: I.box },
  { title: "Hiring help", icon: I.cart },
  { title: "Address changes", icon: I.pin },
  { title: "Utilities & internet", icon: I.bolt },
  { title: "Miscellaneous", icon: I.dots },
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
      <div className="blob blob-1" aria-hidden="true" />
      <div className="blob blob-2" aria-hidden="true" />
      <div className="blob blob-3" aria-hidden="true" />

      <div className="wrap">
        <header className="nav">
          <Link href="/" className="wordmark" aria-label="Peezy home">peezy</Link>
          <CtaInline />
        </header>

        <main id="main">
          {/* 01 Hero */}
          <section className="hero" aria-labelledby="hero-h">
            <p className="eyebrow eyebrow-teal">Your day-by-day packing plan</p>
            <h1 id="hero-h" className="h-hero">
              Know exactly what to pack <span className="dim">today.</span>
            </h1>
            <p className="lede">
              Record a short video of each room. Peezy PackRx turns what&rsquo;s actually in your home into a day-by-day packing plan, so you
              know what to pack today and nothing&rsquo;s left for the night before.
            </p>
            <CtaStack className="hero-cta" />

            <div className="hero-card">
              <div className="hero-card-blob a" aria-hidden="true" />
              <div className="hero-card-blob b" aria-hidden="true" />
              <div className="lockup">
                <p className="lockup-peezy">Peezy</p>
                <Image src="/home/packrx.png" alt="PackRx" width={2010} height={705} className="lockup-mark" priority />
                <p className="lockup-copy">
                  <b>One of Peezy&rsquo;s core features.</b> PackRx decides what gets packed, in what order, and on which day, so the whole job
                  is figured out before you tape the first box. Nothing to plan, nothing to guess.
                </p>
              </div>
              <div className="phones">
                <Phone kind="scan" />
                <svg className="phones-arrow" viewBox="0 0 84 40" fill="none" stroke="#0D1A33" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M6 20h70M58 6l18 14-18 14" />
                </svg>
                <Phone kind="pack" />
              </div>
            </div>
          </section>

          {/* 02 How it works */}
          <section className="how" id="how" aria-labelledby="how-h">
            <h2 id="how-h" className="h2">How does PackRx work?</h2>
            <ol className="steps">
              {STEPS.map((s, i) => (
                <li key={s.n} className="step">
                  {i > 0 && (
                    <svg className="step-arrow" viewBox="0 0 150 28" fill="none" stroke="rgba(13,26,51,0.32)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 14h140M132 4l12 10-12 10" />
                    </svg>
                  )}
                  <div className="step-disc">
                    {s.icon ? (
                      <Icon d={s.icon} size={72} />
                    ) : (
                      <svg width="72" height="72" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="5" fill="#57C778" />
                        <path d="M7.5 12.5l3 3 6-6.5" stroke="#FFFFFF" strokeWidth="2.2" />
                      </svg>
                    )}
                    <span className="step-n">{s.n}</span>
                  </div>
                  <h3 className="step-title">{s.title}</h3>
                </li>
              ))}
            </ol>
            <p className="repeat">
              <svg viewBox="0 0 1104 84" fill="none" stroke="rgba(13,26,51,0.22)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M925 8V50Q925 66 909 66H712M392 66H195Q179 66 179 50V10M170 19l9-9 9 9" />
              </svg>
              <span>Repeat for every room</span>
            </p>
          </section>

          {/* 03 What else */}
          <section className="else" id="features" aria-labelledby="else-h">
            <h2 id="else-h" className="h2">What else can Peezy do?</h2>
            <p className="lede lede-center">
              Moving is a dozen jobs on a dozen deadlines, no two moves alike, and no playbook to borrow. And when it rains, it pours.
            </p>
            <Umbrella />
            <ul className="tiles">
              {FEATURES.map((f) => (
                <li key={f.title} className="tile">
                  <span className="tile-icon">
                    <Icon d={f.icon} />
                  </span>
                  <p className="tile-title">{f.title}</p>
                </li>
              ))}
            </ul>
            <CtaStack note={false} className="else-cta" />
          </section>

          {/* 04 Founder */}
          <section className="founder" aria-labelledby="founder-h">
            <Image src="/home/adam.png" alt="Adam Powell" width={160} height={160} className="founder-photo" />
            <p className="eyebrow eyebrow-mint">Why I built this</p>
            <h2 id="founder-h" className="founder-quote">
              &ldquo;For years I watched people scramble through move day and walk into their new home defeated.&rdquo;
            </h2>
            <div className="founder-meta">
              <p className="founder-name">Adam Powell, Founder</p>
              <p className="founder-path">Truck team &rarr; Move coordinator &rarr; Franchise partner</p>
              <p className="founder-cred">500+ moves on the truck. 1,200+ coordinated. And the guy who got the call on a few thousand more.</p>
            </div>
          </section>

          {/* 05 Final CTA */}
          <section className="final" aria-labelledby="final-h">
            <h2 id="final-h" className="h-final">
              From overwhelmed to packed, <span className="dim">one box at a time.</span>
            </h2>
            <CtaStack className="final-cta" />
          </section>
        </main>

        <footer className="foot">
          <div className="foot-left">
            <span className="wordmark wordmark-sm">peezy</span>
            <span>&copy; 2026 Peezy Move LLC &middot; Kansas City</span>
          </div>
          <nav className="foot-right" aria-label="Footer">
            <a href={`mailto:${FOUNDER_EMAIL}`}>{FOUNDER_EMAIL}</a>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
