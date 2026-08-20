import Reveal from "@/components/Reveal";
import { vignette } from "@/content/landing";

/* Deterministic bar widths (percent) so server and client markup match. */
const ROWS = [
  62, 44, 71, 55, 38, 67, 49, 58, 73, 41, 64, 52, 46,
  69, 57, 43, 66, 50, 61, 39, 72, 54, 47, 65, 59, 45,
];

/** Block 2, the pitch: an unreadable master checklist on the left,
 *  today's three clean task cards on the right. */
export default function PlanContrast() {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
      <div
        role="img"
        aria-label="A generic moving checklist of about thirty items, compressed and too blurred to read"
        className="rounded-[16px] border border-line bg-surface p-6"
      >
        <div className="fog-list flex flex-col gap-[7px]">
          {ROWS.map((w, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="h-[9px] w-[9px] shrink-0 rounded-[2px] border border-ink/30" />
              <span
                className="h-[7px] rounded-full bg-ink/20"
                style={{ width: `${w}%` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div role="img" aria-label="Today's three task cards from Peezy, each with a time estimate">
        <p className="eyebrow flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow" aria-hidden="true" />
          Today
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {vignette.tasks.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="rounded-[14px] border border-line bg-surface px-5 py-4 shadow-[0_10px_28px_-18px_rgb(23_21_14/0.25)]">
                <p className="text-[0.9375rem] font-medium leading-snug">{t.title}</p>
                <p className="tnum mt-1 text-[0.8125rem] text-ink-soft">{t.meta}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
