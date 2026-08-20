import Reveal from "@/components/Reveal";
import { block3, vignette } from "@/content/landing";

/** Block 3: the chat vignette on a task card. The locked daycare line is the
 *  app's question — rendered as a real <blockquote>, satisfying the copy law
 *  and the vignette spec in one place. Three-step stagger on scroll. */
export default function TaskChat() {
  return (
    <figure
      aria-label="Inside a Peezy task: the app asks about daycare, the user answers, and Peezy says exactly what to ask providers"
      className="mx-auto w-full max-w-[420px] rounded-[16px] border border-line bg-surface p-5 shadow-[0_16px_40px_-24px_rgb(23_21_14/0.3)] md:mx-0"
    >
      <p className="eyebrow pb-3">Daycare</p>
      <div className="flex flex-col gap-3 border-t border-line pt-4">
        <Reveal>
          <blockquote className="mr-8 rounded-2xl rounded-bl-md border border-line bg-paper px-4 py-3 text-[0.9375rem] leading-snug">
            {block3.blockquote}
          </blockquote>
        </Reveal>
        <Reveal delay={300} className="self-end">
          <p className="rounded-full bg-yellow px-4 py-2 text-[0.9375rem] font-medium">
            {vignette.chat.reply}
          </p>
        </Reveal>
        <Reveal delay={600}>
          <p className="mr-8 rounded-2xl rounded-bl-md border border-line bg-paper px-4 py-3 text-[0.9375rem] leading-snug">
            {vignette.chat.answer}
          </p>
        </Reveal>
      </div>
    </figure>
  );
}
