import PhoneFrame from "./PhoneFrame";
import Reveal from "@/components/Reveal";
import { vignette } from "@/content/landing";

/** Block 1: a phone filming abstract clutter; the three output chips stack
 *  beside it on scroll. Blocks are deliberately abstract — not an app replica. */
export default function ScanCapture() {
  return (
    <div className="flex items-center justify-center gap-6 md:gap-10">
      <PhoneFrame
        label="A phone filming a cluttered room, reduced to abstract shapes in a viewfinder"
        className="w-[172px] shrink-0 md:w-[208px]"
      >
        <div className="aspect-[9/17]">
          <svg viewBox="0 0 208 393" className="h-full w-full" fill="none" aria-hidden="true">
            {/* abstract clutter, slightly desaturated */}
            <line x1="18" y1="296" x2="190" y2="296" stroke="#17150E" strokeOpacity="0.25" strokeWidth="1.5" />
            <rect x="30" y="216" width="72" height="80" rx="8" fill="#DEDACC" />
            <rect x="110" y="240" width="44" height="56" rx="6" fill="#D3CFC2" />
            <rect x="118" y="196" width="34" height="44" rx="5" fill="#E4E1D5" />
            <rect x="160" y="256" width="26" height="40" rx="5" fill="#D8D4C6" />
            <rect x="46" y="176" width="40" height="40" rx="6" fill="#D8D4C6" />
            {/* viewfinder corner brackets */}
            <g stroke="#17150E" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round">
              <path d="M28 96 L28 78 L46 78" />
              <path d="M162 78 L180 78 L180 96" />
              <path d="M180 318 L180 336 L162 336" />
              <path d="M46 336 L28 336 L28 318" />
            </g>
          </svg>
        </div>
      </PhoneFrame>
      <div
        className="flex flex-col items-start gap-3"
        role="img"
        aria-label="The scan's output: three inventory tags — sofa, box count, and truck size"
      >
        {vignette.chips.map((c, i) => (
          <Reveal key={c} delay={i * 90}>
            <span className="chip">{c}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
