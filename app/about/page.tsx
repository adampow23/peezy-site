import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "Why Peezy Exists",
  description: "Nine years in the moving industry, and the app that came out of it.",
  openGraph: { images: ["/og/about.png"] },
};

export default function About() {
  return (
    <Section eyebrow="About" className="pt-32 md:pt-40">
      <h1 className="font-display h-2 max-w-[24ch]">Nine years of carrying other people&rsquo;s lives up staircases.</h1>
      <div className="mt-10">
        <Prose>
          <p>That&rsquo;s my background. Not an accelerator, not a pitch competition — a moving truck.</p>
          <p>
            For nine years I worked in the moving industry, and I met people on the most stressful day of their year,
            every single day. I saw the same pattern on repeat: smart, capable people completely underwater. Not because
            moving is hard physical work — we handled that part — but because of everything around it. The forty tasks
            nobody told them about. The utility shutoff they scheduled a day too early. The internet install booked
            three weeks too late. The moving company across town that jacked up the price with the truck already loaded.
          </p>
          <p>
            None of these people were doing anything wrong. They were doing something they do once every five or seven
            years, with no one to guide them, on a deadline that doesn&rsquo;t move.
          </p>
          <p>
            The moving industry&rsquo;s answer has always been a blog post with a generic checklist. Fifty items,
            written for nobody in particular, half of which don&rsquo;t apply to you. That&rsquo;s not help.
            That&rsquo;s homework.
          </p>
          <h2>So I built the thing I kept wishing existed.</h2>
          <p>
            Peezy asks about your actual move — your dates, your home, your family, your stuff — and builds a plan
            that&rsquo;s yours. Then it feeds you that plan a few tasks at a time, in the right order, with every step
            spelled out. And for the tasks that involve hiring companies — movers, internet, cleaning — Peezy&rsquo;s
            concierge does the coordination for you.
          </p>
          <h2>Boring on purpose.</h2>
          <p>
            You&rsquo;ll notice Peezy doesn&rsquo;t have streaks, badges, or celebration animations every time you
            breathe. That&rsquo;s deliberate. You&rsquo;re not here to be entertained; you&rsquo;re here to get to the
            other side of your move with your sanity and your deposit intact. The app decides what&rsquo;s next, you
            tap, it gets done. Boring is the promise.
          </p>
          <h2>Accountability isn&rsquo;t a feature. It&rsquo;s the whole point.</h2>
          <p>
            The reason moving horror stories exist is that vendors face no consequences. A bad review disappears into a
            pile of good ones. So Peezy runs differently: vendors who don&rsquo;t deliver lose access to our users.
            Permanently, if it comes to that. If someone we connected you with doesn&rsquo;t make it right, we will.
            It&rsquo;s called the Peezy Pinky Promise, and it&rsquo;s the foundation everything else is built on.{" "}
            <Link href="/promise">Read the promise →</Link>
          </p>
          <h2>The details, for the detail-oriented.</h2>
          <p>
            Peezy is built and operated by Peezy Move LLC, a Missouri company based in Kansas City. It&rsquo;s an
            independent product — no moving company owns us, no vendor pays for placement in your plan. When Peezy
            recommends a service, it&rsquo;s because your move calls for it.
          </p>
          <p>
            Questions, ideas, or a moving horror story you need to get off your chest?{" "}
            <Link href="/contact">Contact page →</Link> I read everything.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
