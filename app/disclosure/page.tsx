import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "How Peezy earns referral commissions, in plain language.",
  openGraph: { images: ["/og/disclosure.png"] },
};

export default function Disclosure() {
  return (
    <Section eyebrow="Disclosure" className="pt-32 md:pt-40">
      <h1 className="font-display display-2 max-w-[20ch]">Affiliate Disclosure</h1>
      <div className="mt-10">
        <Prose>
          <p>
            Some tasks in Peezy — like setting up internet service at your new home — include links to sign up with
            service providers. When you complete a signup through one of these links, Peezy may earn a commission from
            the provider. This never costs you anything extra, and it never changes the price you pay.
          </p>
          <p>
            More importantly, it never changes what we recommend. The tasks and services in your plan are driven by your
            move — your address, your dates, your answers — not by which company pays a commission. Providers cannot pay
            to appear in your plan, and any provider that fails our users loses access to them, commission or not.{" "}
            <Link href="/promise">The Peezy Pinky Promise →</Link>
          </p>
          <p>
            If you have questions about how this works, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
          <p>Effective date: August 1, 2026 · Peezy Move LLC</p>
        </Prose>
      </div>
    </Section>
  );
}
