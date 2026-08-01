import type { Metadata } from "next";
import Section from "@/components/Section";
import Prose from "@/components/Prose";

export const metadata: Metadata = {
  title: "The Peezy Pinky Promise",
  description: "How vendor accountability actually works at Peezy.",
  openGraph: { images: ["/og/promise.png"] },
};

export default function Promise() {
  return (
    <Section eyebrow="The Promise" className="pt-32 md:pt-40">
      <h1 className="font-display h-2 max-w-[20ch]">The Peezy Pinky Promise</h1>
      <div className="mt-10">
        <Prose>
          <p>
            Hiring movers means handing everything you own to people you&rsquo;ve never met, chosen off a review from a
            stranger. If it goes wrong, your options are a one-star review and a small-claims form.
          </p>
          <p>We think that&rsquo;s broken. So Peezy works differently.</p>
          <h2>The promise, in plain terms</h2>
          <p>
            If a service provider booked through Peezy doesn&rsquo;t show up, does poor work, or won&rsquo;t make it
            right — <strong>we will.</strong> You have someone to call who can actually do something about it, because
            we control something the vendor cares about: access to every future Peezy customer.
          </p>
          <h2>How accountability actually works</h2>
          <p>
            <strong>Every job gets checked.</strong> After a vendor completes work for a Peezy user, we follow up with
            the user directly. Not a review request — a check-in.
          </p>
          <p>
            <strong>Problems go on the record.</strong> Vendors who underperform are put on notice. Repeat problems mean
            removal from the platform. This isn&rsquo;t a threat we hold in reserve; it&rsquo;s the standing rule every
            vendor agrees to.
          </p>
          <p>
            <strong>Some things end it immediately.</strong> Raising the price on moving day — quoting one number and
            demanding another with your belongings on the truck — is an instant, permanent removal. No warnings, no
            second chances. If you&rsquo;ve heard the hostage-truck horror story, know that it cannot happen twice on
            this platform.
          </p>
          <h2>Same vendors. Same prices. Different rules.</h2>
          <p>
            Peezy doesn&rsquo;t mark up vendor services, and vendors can&rsquo;t pay their way into your plan. The
            companies you book through Peezy are the same ones you&rsquo;d find on your own — the difference is what
            happens if they let you down.
          </p>
          <p>The industry has always asked you to take all the risk. We&rsquo;d rather they take it.</p>
        </Prose>
      </div>
    </Section>
  );
}
