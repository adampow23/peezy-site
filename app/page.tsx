import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import HeroScan from "@/components/vignettes/HeroScan";
import ScanCapture from "@/components/vignettes/ScanCapture";
import PlanContrast from "@/components/vignettes/PlanContrast";
import TaskChat from "@/components/vignettes/TaskChat";
import { hero, block1, block1b, block2, block3, closing, vignette } from "@/content/landing";
import { SITE_URL, APP_STORE_URL } from "@/lib/site";

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
      {
        "@type": "SoftwareApplication",
        name: "Peezy",
        operatingSystem: "iOS",
        applicationCategory: "LifestyleApplication",
        url: APP_STORE_URL,
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------- Hero ---------- */}
      <section aria-labelledby="hero-heading" className="pt-28 md:pt-36">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-[1.05fr_0.95fr] md:px-10">
          <div>
            <h1 id="hero-heading" className="font-display display-hero">
              {hero.h1}
            </h1>
            <div className="hero-after">
              <p className="body-lg mt-6 max-w-[44ch] text-ink-soft">{hero.sub}</p>
              <div className="mt-8">
                <a href={APP_STORE_URL} className="btn-cta">
                  {hero.cta}
                </a>
              </div>
              <p className="mt-5 text-[0.9375rem] text-ink-soft">{hero.proof}</p>
            </div>
          </div>
          <div className="hero-device">
            <HeroScan />
          </div>
        </div>
      </section>

      {/* ---------- Block 1 — The scan ---------- */}
      <Section id="scan" aria-labelledby="scan-heading">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="order-2 md:order-1">
            <ScanCapture />
          </Reveal>
          <Reveal delay={90} className="order-1 md:order-2">
            <h2 id="scan-heading" className="font-display display-2 max-w-[16ch]">
              {block1.header}
            </h2>
            <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">{block1.body}</p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
          {block1.split.map((s, i) => (
            <Reveal key={s.lead} delay={i * 90}>
              <p className="body-lg max-w-[48ch] text-ink-soft">
                <span className="font-semibold text-ink">{s.lead}</span> {s.rest}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- Block 1B — The packing plan ---------- */}
      <Section aria-labelledby="packing-heading">
        <Reveal className="mx-auto max-w-[62ch] text-center">
          <h2 id="packing-heading" className="font-display display-2">
            {block1b.header}
          </h2>
          <p className="body-lg mt-6 text-ink-soft">{block1b.body}</p>
        </Reveal>
        <Reveal delay={90}>
          <div className="mt-10 flex justify-center">
            <p className="tnum rounded-[12px] border border-line bg-surface px-5 py-3 text-[0.9375rem] font-medium shadow-[0_10px_28px_-18px_rgb(23_21_14/0.25)]">
              {vignette.boxOne}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Block 2 — The plan ---------- */}
      <Section aria-labelledby="plan-heading">
        <Reveal>
          <p className="accent-serif text-[1.25rem] text-ink-soft">{block2.kicker}</p>
          <h2 id="plan-heading" className="font-display display-2 mt-4 max-w-[18ch]">
            {block2.header}
          </h2>
          <p className="body-lg mt-6 max-w-[62ch] text-ink-soft">{block2.body}</p>
        </Reveal>
        <div className="mt-16">
          <PlanContrast />
        </div>
      </Section>

      {/* ---------- Block 3 — Task intelligence ---------- */}
      <Section aria-labelledby="guide-heading">
        <div className="mx-auto max-w-[680px]">
          <Reveal>
            <h2 id="guide-heading" className="font-display display-2">
              <span className="block">{block3.headerLine1}</span>
              <span className="block">{block3.headerLine2}</span>
            </h2>
            <p className="body-lg mt-6 text-ink-soft">{block3.bodyBefore}</p>
          </Reveal>
          <div className="mt-8">
            <TaskChat />
          </div>
          <Reveal>
            <p className="body-lg mt-8 text-ink-soft">
              {block3.bodyAfterStart}
              <span className="font-semibold text-ink">{block3.bodyAfterLead}</span>
              {block3.bodyAfterRest}
            </p>
            <p className="accent-serif mt-8 text-[1.25rem] text-ink-soft">{block3.contrast}</p>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Closing CTA ---------- */}
      <Section aria-labelledby="closing-heading">
        <Reveal className="text-center">
          <h2 id="closing-heading" className="font-display display-2 mx-auto max-w-[20ch]">
            {closing.header}
          </h2>
          <p className="body-lg mt-5 text-ink-soft">{closing.sub}</p>
          <div className="mt-9 flex justify-center">
            <a href={APP_STORE_URL} className="btn-cta">
              {closing.cta}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
