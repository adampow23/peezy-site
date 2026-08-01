import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { FOUNDER_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Closing Gift They'll Actually Use",
  description: "Gift Peezy to your clients: a moving concierge that turns closing day into a handled move.",
  openGraph: { images: ["/og/realtors.png"] },
};

export default function Realtors() {
  return (
    <Section eyebrow="For Realtors" className="pt-32 md:pt-40">
      <h1 className="font-display h-2 max-w-[24ch]">Every closing gift ends up in a drawer. Except this one.</h1>
      <div className="mt-10">
        <Prose>
          <p>
            The branded wine opener. The cutting board with your logo. Your client says thank you, and you both know
            where it&rsquo;s going.
          </p>
          <p>
            Here&rsquo;s what your client is actually facing the week you hand them keys: forty-plus moving tasks, a
            dozen vendors to coordinate, and a deadline that doesn&rsquo;t care how tired they are. The happiest day of
            their year is followed immediately by the most stressful month of it.
          </p>
          <h2>Give them the thing that gets them through it.</h2>
          <p>
            Peezy is a moving concierge in an app. It learns their specific move in a three-minute assessment, builds
            their exact task plan, and walks them through it a few tasks a day — mail forwarding, address changes,
            utility transfers, school enrollment, all of it. For the heavy coordination — mover quotes, internet setup,
            cleaning — Peezy&rsquo;s concierge handles the legwork.
          </p>
          <p>
            And if any vendor booked through Peezy doesn&rsquo;t deliver, Peezy makes it right. That&rsquo;s the Peezy
            Pinky Promise. <Link href="/promise">Read it →</Link>
          </p>
          <h2>Why agents gift Peezy</h2>
          <p>
            <strong>They use it every day for weeks.</strong> A gift basket is one moment. Peezy is a daily touchpoint
            through the entire move — and every time a task gets handled, you&rsquo;re the one who gave them that.
          </p>
          <p>
            <strong>It says you know what comes next.</strong> Your value doesn&rsquo;t end at closing. Gifting Peezy
            says you understand what the next six weeks look like — because you do.
          </p>
          <p>
            <strong>It&rsquo;s the referral setup.</strong> Clients rave about agents who made the whole transition
            easy, not just the transaction. Peezy extends &ldquo;easy&rdquo; past the closing table.
          </p>
          <h2>How it works</h2>
          <p>
            You purchase Peezy+ gift codes — one per client, covering their entire move. Your client downloads Peezy,
            enters the code, and everything unlocks immediately: the full guided plan, the inventory scanner, and
            concierge support. Nothing for them to cancel later — just a move that gets handled.
          </p>
          <p>
            <a href={`mailto:${FOUNDER_EMAIL}?subject=Peezy gift codes`} className="inline-block rounded-[14px] bg-yellow px-6 py-3 font-semibold !text-ink no-underline transition hover:-translate-y-px hover:bg-yellow-deep">
              Get gift codes
            </a>
          </p>
          <p>
            Buying for a team or brokerage, or want Peezy presented at your office meeting?{" "}
            <a href={`mailto:${FOUNDER_EMAIL}`}>Get in touch →</a> — we&rsquo;re Kansas City based and happy to show up
            in person.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
