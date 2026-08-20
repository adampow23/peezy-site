import type { Metadata } from "next";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { SUPPORT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Peezy.",
  openGraph: { images: ["/og/terms.png"] },
};

/* PLACEHOLDER LEGAL TEXT — generic template. Replace with the current terms
 * from the Firebase-hosted page (or counsel-reviewed text) before launch.
 * Must stay consistent with the EULA/terms registered in App Store Connect. */

export default function Terms() {
  return (
    <Section eyebrow="Legal" className="pt-32 md:pt-40">
      <h1 className="font-display display-2">Terms of Service</h1>
      <div className="mt-10">
        <Prose>
          <p>Last updated: August 1, 2026</p>
          <p>
            These terms govern your use of the Peezy app and website, operated by Peezy Move LLC (&ldquo;Peezy,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using Peezy, you agree to them.
          </p>
          <h2>What Peezy is</h2>
          <p>
            Peezy is a moving planning and coordination service. We build task plans, provide guidance, and — when you
            request it — coordinate with third-party service providers on your behalf. Peezy is not a moving company,
            and the physical services in your move (moving, cleaning, installation, and similar) are performed by
            independent third-party providers.
          </p>
          <h2>Third-party providers</h2>
          <p>
            Providers you book are independent businesses, and your agreement for their services is with them. We hold
            providers to standards described in the Peezy Pinky Promise and remove providers who fail our users, but we
            are not the provider of their services.
          </p>
          <h2>Purchases</h2>
          <p>
            Some features require a paid upgrade (Peezy+), purchased through the App Store. Pricing and terms are
            presented in the app before any charge. Purchases are subject to Apple&rsquo;s payment terms; refunds are
            handled through the App Store.
          </p>
          <h2>Your responsibilities</h2>
          <p>
            Provide accurate information, use Peezy for your own move, and don&rsquo;t misuse the service, attempt to
            disrupt it, or use it for anything unlawful.
          </p>
          <h2>Disclaimers and limitation of liability</h2>
          <p>
            Peezy is provided &ldquo;as is.&rdquo; We work hard to make your plan accurate and your coordination smooth,
            but we don&rsquo;t guarantee uninterrupted service or specific outcomes from third-party providers. To the
            maximum extent permitted by law, Peezy Move LLC&rsquo;s liability is limited to the amount you paid for
            Peezy+ in the twelve months before the claim.
          </p>
          <h2>Changes</h2>
          <p>
            We may update these terms; material changes will be communicated in the app or by email. Continued use after
            changes means you accept them.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>. Peezy Move LLC, Kansas
            City, Missouri. These terms are governed by the laws of the State of Missouri.
          </p>
        </Prose>
      </div>
    </Section>
  );
}
