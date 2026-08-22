import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import DeviceShot from "@/components/DeviceShot";
import AppStoreBadge from "@/components/AppStoreBadge";
import { hero, stats, problem, howItWorks, featuresKicker, block1, block1b, block2, block3, closing, stepLabels } from "@/content/landing";
import { SITE_URL, APP_STORE_URL } from "@/lib/site";

function StepNum({ n }: { n: number }) {
  return (
    <p>
      <span className="step-num" aria-hidden="true">
        0{n}
      </span>
      <span className="sr-only">Step {n}</span>
    </p>
  );
}

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

      {/* ---------- Hero (bg, rebuilt V3.1) ---------- */}
      <section aria-labelledby="hero-heading" className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h1 id="hero-heading" className="font-display display-hero">
            <span className="hero-line">{hero.h1Line1}</span>
            <span className="hero-line hero-line-2">{hero.h1Line2}</span>
          </h1>
          <div className="hero-after mt-10 md:mt-12">
            <p className="body-lg max-w-[52ch] text-ink-soft">{hero.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <AppStoreBadge />
              <a href="/#how" className="btn-ghost">
                {hero.ctaSecondary}
              </a>
            </div>
            <p className="mt-5 text-[0.9375rem] text-ink-soft">{hero.proof}</p>
          </div>
        </div>
      </section>

      {/* ---------- Stats strip (surface) ---------- */}
      <Section aria-label="Peezy by the numbers" className="border-t border-line bg-surface">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 md:gap-x-0">
          {stats.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 90}
              className={
                i === 0
                  ? "md:pr-10"
                  : i === 3
                    ? "md:border-l md:border-line md:pl-10"
                    : "md:border-l md:border-line md:px-10"
              }
            >
              <p className="stat-num">
                {s.n}
                {s.unit ? <span className="stat-unit">{s.unit}</span> : null}
              </p>
              <p className="eyebrow mt-4 max-w-[22ch] leading-[1.4] [text-wrap:balance]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- The problem (bg) ---------- */}
      <Section aria-labelledby="problem-heading" className="border-t border-line">
        <Reveal>
          <p className="eyebrow">{problem.kicker}</p>
        </Reveal>
        <Reveal delay={90}>
          <h2 id="problem-heading" className="font-display display-2 mt-10 max-w-[22ch] md:mt-14">
            {problem.header}
          </h2>
          <p className="body-lg mt-8 max-w-[62ch] text-ink-soft">{problem.para1}</p>
          <p className="body-lg mt-6 max-w-[62ch] text-ink-soft">{problem.para2}</p>
        </Reveal>
      </Section>

      {/* ---------- How it works (surface) ---------- */}
      <Section id="how" aria-labelledby="how-heading" className="border-t border-line bg-surface">
        <Reveal>
          <p id="how-heading" className="eyebrow">
            {howItWorks.kicker}
          </p>
        </Reveal>
        <div className="mt-10 md:mt-14">
          {howItWorks.rows.map((row, i) => (
            <Reveal key={row.title} delay={i * 90}>
              <div className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-2 border-t border-line py-6 md:grid-cols-[4rem_16rem_1fr] md:py-7">
                <span className="toc-num" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="font-display text-[1.25rem]">
                  <span className="sr-only">Step {i + 1}: </span>
                  {row.title}
                </span>
                <p className="body-lg col-span-2 max-w-[56ch] text-ink-soft md:col-span-1">{row.line}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ---------- What you get — part opener (bg) ---------- */}
      <section id="features" aria-label="What you get" className="border-t border-line">
        <div className="mx-auto max-w-[1200px] px-6 py-10 md:px-10 md:py-14">
          <Reveal>
            <p className="eyebrow">{featuresKicker}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Feature 01 — The scan (surface) ---------- */}
      <Section id="step-01" aria-labelledby="scan-heading" className="border-t border-line bg-surface">
        <Reveal>
          <p className="eyebrow">{stepLabels[0]}</p>
        </Reveal>
        <div className="mt-10 grid items-center gap-14 md:mt-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <StepNum n={1} />
              <h2 id="scan-heading" className="font-display display-2 mt-8 max-w-[16ch]">
                {block1.header}
              </h2>
              <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">{block1.body}</p>
            </Reveal>
            <div className="mt-10 flex flex-col gap-6">
              {block1.split.map((s, i) => (
                <Reveal key={s.lead} delay={i * 90}>
                  <p className="body-lg max-w-[52ch] text-ink-soft">
                    <span className="font-bold text-ink">{s.lead}</span> {s.rest}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={90} className="justify-self-center md:justify-self-end">
            <DeviceShot
              src="/media/step1-inventory.webp"
              alt="Peezy inventory after a room scan"
              width={840}
              height={1722}
              className="w-[min(72vw,280px)] md:w-[300px]"
            />
          </Reveal>
        </div>
        {/* Closing beat — Block 1B folded into step 01 */}
        <Reveal>
          <div className="mt-16 grid gap-6 border-t border-line pt-10 md:mt-20 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            <h3 className="font-display max-w-[18ch] text-[1.5rem] leading-tight md:text-[1.75rem]">
              {block1b.header}
            </h3>
            <p className="body-lg max-w-[52ch] text-ink-soft">{block1b.body}</p>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Feature 02 — One at a time (bg) ---------- */}
      <Section id="step-02" aria-labelledby="plan-heading" className="border-t border-line">
        <Reveal>
          <p className="eyebrow">{stepLabels[1]}</p>
        </Reveal>
        <div className="mt-10 grid items-center gap-14 md:mt-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={90} className="order-2 justify-self-center md:order-1 md:justify-self-start">
            <DeviceShot
              src="/media/step2-today.webp"
              alt="A single Peezy task: forward my mail"
              width={840}
              height={1722}
              className="w-[min(72vw,280px)] md:w-[300px]"
            />
          </Reveal>
          <div className="order-1 md:order-2">
            <Reveal>
              <StepNum n={2} />
              <h2 id="plan-heading" className="font-display display-2 mt-8 max-w-[18ch]">
                {block2.header}
              </h2>
              <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">{block2.body}</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---------- Feature 03 — The walkthrough (surface) ---------- */}
      <Section id="step-03" aria-labelledby="guide-heading" className="border-t border-line bg-surface">
        <Reveal>
          <p className="eyebrow">{stepLabels[2]}</p>
        </Reveal>
        <div className="mt-10 grid items-center gap-14 md:mt-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <StepNum n={3} />
              <h2 id="guide-heading" className="font-display display-2 mt-8">
                <span className="block">{block3.headerLine1}</span>
                <span className="block">{block3.headerLine2}</span>
              </h2>
              <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">{block3.bodyBefore}</p>
              <blockquote className="mt-6 max-w-[46ch] border-l-2 border-line pl-5 text-[1.25rem] leading-snug">
                {block3.blockquote}
              </blockquote>
              <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">
                {block3.bodyAfterStart}
                <span className="font-bold text-ink">{block3.bodyAfterLead}</span>
                {block3.bodyAfterRest}
              </p>
              <p className="accent-italic mt-8 text-[1.3125rem] text-ink-soft">{block3.contrast}</p>
            </Reveal>
          </div>
          <Reveal delay={90} className="justify-self-center md:justify-self-end">
            <DeviceShot
              src="/media/step3-walkthrough.webp"
              alt="Peezy walking through storage options"
              width={840}
              height={1722}
              className="w-[min(72vw,280px)] md:w-[300px]"
            />
          </Reveal>
        </div>
      </Section>

      {/* ---------- Close (ink) ---------- */}
      <Section aria-labelledby="closing-heading" className="section-ink">
        <Reveal className="text-center">
          <h2 id="closing-heading" className="font-display display-2 mx-auto max-w-[20ch]">
            {closing.header}
          </h2>
          <p className="body-lg mt-5 text-paper/70">{closing.sub}</p>
          <div className="mt-9 flex justify-center">
            <AppStoreBadge />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
