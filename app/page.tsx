import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import AppStoreBadge from "@/components/AppStoreBadge";
import DeviceFrame from "@/components/DeviceFrame";
import VideoLoop from "@/components/VideoLoop";
import CheckItem from "@/components/CheckItem";
import FAQItem from "@/components/FAQItem";
import { faqs } from "@/lib/faq";
import { SITE_URL, APP_STORE_URL } from "@/lib/site";

const steps = [
  {
    img: "/media/shot-assessment.png",
    alt: "Peezy assessment question screen",
    title: "1. Answer 15 questions.",
    body: "Where you're going, who's coming with you, rent or own, kids, pets, move date. Three minutes — and Peezy knows your move better than your group chat does.",
  },
  {
    img: "/media/shot-plan.png",
    alt: "A personalized Peezy move plan",
    title: "2. Get your plan. Yours, not a template.",
    body: "A renter crossing town and a family selling a house get completely different plans. Tasks that don't apply to you never appear. The ones that do show up exactly when they should.",
  },
  {
    img: "/media/shot-stack.png",
    alt: "The Peezy daily card stack",
    title: "3. Do today's dose. That's it.",
    body: "Two to four tasks a day, each one guided step by step — what to do, why it matters, and the exact link you need. Finish the stack, close the app, go live your life.",
  },
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
      {
        "@type": "SoftwareApplication",
        name: "Peezy",
        operatingSystem: "iOS",
        applicationCategory: "LifestyleApplication",
        url: APP_STORE_URL,
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---------- Section 1 — Hero ---------- */}
      <section className="pt-32 md:pt-40">
        <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div>
            <h1 className="font-display h-hero">
              <span className="hero-line block">Moving is 40 tasks you&rsquo;ve never done before.</span>
              <span className="hero-line hero-line-2 block">All due at once.</span>
            </h1>
            <div className="hero-after">
              <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">
                Peezy learns your move in three minutes, builds your exact plan, and hands you two to four tasks a day
                until it&rsquo;s done. The ones you dread? Peezy handles those for you.
              </p>
              <div className="mt-8">
                <AppStoreBadge />
              </div>
            </div>
          </div>
          <div className="hero-device">
            <DeviceFrame>
              <VideoLoop name="hero-stack" label="Peezy's card stack completing a task" />
            </DeviceFrame>
          </div>
        </div>
      </section>

      {/* ---------- Section 2 — The Enemy ---------- */}
      <Section>
        <Reveal className="mx-auto max-w-[62ch] text-center">
          <p className="body-lg text-ink-soft">
            Forty browser tabs. Five moving companies that &ldquo;will call you back.&rdquo; A checklist you copied from
            a blog, written for someone else&rsquo;s move. And the quiet fear you&rsquo;re forgetting the one thing that
            costs you your deposit.
          </p>
          <p className="body-lg mt-6 text-ink-soft">
            Here&rsquo;s the truth the moving industry won&rsquo;t say out loud: nobody becomes an expert at something
            they do once every five years.
          </p>
          <p className="font-display h-3 mt-8 text-[1.5rem] text-ink">
            You don&rsquo;t need to become one. You need someone who already is.
          </p>
        </Reveal>
      </Section>

      {/* ---------- Section 3 — How It Works ---------- */}
      <Section id="how-it-works" eyebrow="How it works">
        <Reveal>
          <h2 className="font-display h-2 max-w-[24ch]">Three minutes of questions. Weeks of answers.</h2>
        </Reveal>
        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="overflow-hidden rounded-[20px] border border-line bg-surface">
                <Image src={s.img} alt={s.alt} width={886} height={1920} className="h-auto w-full" />
              </div>
              <h3 className="h-3 mt-6">{s.title}</h3>
              <p className="mt-3 text-ink-soft">{s.body}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-14">
            <AppStoreBadge />
          </div>
        </Reveal>
      </Section>

      {/* ---------- Section 4 — The Scanner ---------- */}
      <Section id="scanner" eyebrow="The scanner">
        <div className="grid items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <DeviceFrame>
              <VideoLoop name="scanner" label="Peezy's room scanner building a furniture inventory" />
            </DeviceFrame>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="font-display h-2 max-w-[18ch]">Point your camera at a room. Peezy does the rest.</h2>
            <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">
              Pan your phone slowly across each room and Peezy identifies your furniture automatically — couch, bed
              frames, that dresser you forgot was heavy. In minutes you have a complete inventory.
            </p>
            <p className="body-lg mt-4 max-w-[52ch] text-ink-soft">
              That list drives your moving estimate and your truck size. No more paying for a 26-foot truck when a 15
              would do. No more finding out the hard way that it won&rsquo;t all fit.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Section 5 — The Concierge (signature moment) ---------- */}
      <Section id="concierge" eyebrow="The concierge">
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <h2 className="font-display h-2 max-w-[20ch]">The parts of moving everyone dreads? Handled.</h2>
              <p className="body-lg mt-6 max-w-[52ch] text-ink-soft">
                Getting mover quotes. Comparing internet providers. The endless vendor phone tag. For those tasks, you
                answer a few questions in the app — and Peezy does the legwork, then comes back to you with it done or
                ready to book.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-col gap-4">
              <Reveal delay={0}>
                <CheckItem text="Your mail gets forwarded." />
              </Reveal>
              <Reveal delay={350}>
                <CheckItem text="Your address gets updated." />
              </Reveal>
              <Reveal delay={700}>
                <CheckItem text="Your internet works the day you arrive." />
              </Reveal>
              <Reveal delay={1200}>
                <p className="font-display mt-4 text-[1.75rem] leading-tight">You didn&rsquo;t make a single call.</p>
              </Reveal>
            </div>
          </div>
          <Reveal delay={70}>
            <div className="mx-auto max-w-[340px] overflow-hidden rounded-[20px] border border-line bg-surface shadow-lift">
              <Image
                src="/media/shot-chat.png"
                alt="Peezy concierge chat showing a task in progress"
                width={886}
                height={1920}
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Section 6 — The Peezy Pinky Promise ---------- */}
      <Section id="promise">
        <Reveal>
          <div className="mx-auto max-w-[720px] rounded-[20px] border border-line bg-surface p-10 shadow-lift md:p-12">
            <h2 className="font-display h-2">The Peezy Pinky Promise</h2>
            <p className="body-lg mt-6 text-ink-soft">Same vendors you&rsquo;d find on Google. Same prices. One difference:</p>
            <p className="body-lg mt-4 text-ink">
              If a company booked through Peezy doesn&rsquo;t show up, does poor work, or won&rsquo;t make it right —
              we will. And they lose access to every future Peezy customer.
            </p>
            <p className="body-lg mt-4 text-ink-soft">
              You&rsquo;re hiring people you&rsquo;ve never met to carry everything you own. Someone should be
              accountable for that.
            </p>
            <p className="font-display mt-6 text-[1.375rem]">Now someone is.</p>
            <Link href="/promise" className="mt-8 inline-block font-medium text-ink underline underline-offset-2 hover:text-yellow-deep">
              How the promise works →
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------- Section 7 — Founder Note ---------- */}
      <Section>
        <div className="mx-auto grid max-w-[880px] items-center gap-10 md:grid-cols-[240px_1fr]">
          <Reveal>
            <Image
              src="/media/adam.jpg"
              alt="Adam, founder of Peezy"
              width={1200}
              height={1500}
              className="h-auto w-full max-w-[240px] rounded-[20px]"
            />
          </Reveal>
          <Reveal delay={70}>
            <p className="body-lg text-ink-soft">
              I spent nine years in the moving industry, and I watched the same thing over and over: good people getting
              broken by a process nobody teaches them. Moving doesn&rsquo;t wreck people because of the boxes. It wrecks
              them because they face it alone.
            </p>
            <p className="body-lg mt-4 text-ink">Peezy is the person in your corner I always wished my customers had.</p>
            <p className="mt-6 font-display text-[1.25rem]">— Adam</p>
            <p className="text-[0.9rem] text-ink-soft">Founder, Peezy</p>
            <Link href="/about" className="mt-4 inline-block font-medium text-ink underline underline-offset-2 hover:text-yellow-deep">
              The full story →
            </Link>
          </Reveal>
        </div>
      </Section>

      {/* ---------- Section 8 — FAQ ---------- */}
      <Section id="faq" eyebrow="Fair questions">
        <Reveal>
          <h2 className="font-display h-2">Things you&rsquo;re probably wondering</h2>
        </Reveal>
        <Reveal delay={70}>
          <div className="mt-10 max-w-[720px] border-t border-line">
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} links={f.links} />
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ---------- Section 9 — Final CTA ---------- */}
      <Section>
        <Reveal className="text-center">
          <h2 className="font-display h-2 mx-auto max-w-[20ch]">
            Your move date isn&rsquo;t moving. Your stress level can.
          </h2>
          <div className="mt-8 flex justify-center">
            <AppStoreBadge />
          </div>
        </Reveal>
      </Section>
    </>
  );
}
