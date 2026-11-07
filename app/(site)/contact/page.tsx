import type { Metadata } from "next";
import Section from "@/components/Section";
import Prose from "@/components/Prose";
import { SUPPORT_EMAIL, FOUNDER_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a human at Peezy.",
  openGraph: { images: ["/og/contact.png"] },
};

export default function Contact() {
  return (
    <Section eyebrow="Contact" className="pt-32 md:pt-40">
      <h1 className="font-display display-2 max-w-[20ch]">Talk to a human. We insist.</h1>
      <div className="mt-10">
        <Prose>
          <p>Questions about your move, your account, or Peezy itself:</p>
          <p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-display text-[1.375rem]">
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            Realtors, partners, and press: <a href={`mailto:${FOUNDER_EMAIL}`}>{FOUNDER_EMAIL}</a>
          </p>
          <p>We&rsquo;re based in Kansas City, Missouri, and we actually answer.</p>
        </Prose>
      </div>
    </Section>
  );
}
