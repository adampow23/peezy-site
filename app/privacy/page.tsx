import type { Metadata } from "next";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Peezy collects, uses, and protects your information.",
  openGraph: { images: ["/og/privacy.png"] },
};

/* PLACEHOLDER LEGAL TEXT — generic template written in Peezy's voice.
 * Replace with the current policy from the Firebase-hosted page (or
 * counsel-reviewed text) before the Allconnect application. Structure and
 * headings can stay; verify every claim matches actual data practices. */

export default function Privacy() {
  return (
    <Section eyebrow="Legal" className="pt-32 md:pt-40">
      <h1 className="font-display h-2">Privacy Policy</h1>
      <div className="mt-10">
        <Prose>
          <p>Last updated: August 1, 2026</p>
          <p>
            This policy explains what information Peezy (operated by Peezy Move LLC) collects, why we collect it, and
            how we handle it. The short version: we collect what&rsquo;s needed to run your move, we don&rsquo;t sell
            your personal information, and your data exists to serve you — not the other way around.
          </p>
          <h2>What we collect</h2>
          <p>
            <strong>Account information.</strong> Your name, email address, and sign-in credentials when you create an
            account.
          </p>
          <p>
            <strong>Move details.</strong> The answers you give in your assessment — addresses, move date, household
            details — which we use to build and schedule your plan.
          </p>
          <p>
            <strong>Inventory data.</strong> When you use the room scanner, imagery is processed to identify furniture
            and build your inventory list. The resulting list belongs to you and is used to size your move.
          </p>
          <p>
            <strong>Usage information.</strong> Basic analytics about how the app and website are used, so we can fix
            what&rsquo;s broken and improve what isn&rsquo;t.
          </p>
          <h2>How we use it</h2>
          <p>
            To build your plan, schedule your tasks, coordinate services you request, notify you about your move, and
            operate and improve Peezy. When you ask the concierge to handle a task — like gathering mover quotes — we
            share the details needed to complete that task with the relevant service providers, and only those details.
          </p>
          <h2>What we don&rsquo;t do</h2>
          <p>
            We don&rsquo;t sell your personal information. We don&rsquo;t give vendors access to your information unless
            you&rsquo;ve asked us to coordinate with them. We don&rsquo;t use your data for advertising by third
            parties.
          </p>
          <h2>Referral links</h2>
          <p>
            Some services in your plan (like internet setup) use referral links, and Peezy may earn a commission when
            you sign up. Details are in our Affiliate Disclosure. Commissions never affect your price or your plan.
          </p>
          <h2>Data retention and deletion</h2>
          <p>
            You can delete your account from within the app at any time, which removes your personal data from our
            systems, subject to legal record-keeping requirements.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Peezy Move LLC, Kansas
            City, Missouri.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
