import PhoneFrame from "./PhoneFrame";
import { vignette } from "@/content/landing";

/** The page's one bold spend: a room sketches itself in light ink strokes,
 *  then three inventory chips settle in. Runs once on load (~2.3s), pure CSS.
 *  Reduced motion renders the final frame. Flat elevation view — floor line,
 *  window, sofa, boxes — kept deliberately architectural. */
export default function HeroScan() {
  return (
    <PhoneFrame
      label="Sketch of a living room being scanned into a moving inventory: a sofa and packed boxes become three tags — sofa, box count, and truck size"
      className="mx-auto w-[min(78vw,300px)] md:w-[340px]"
    >
      <div className="aspect-[9/18]">
        <svg
          viewBox="0 0 300 600"
          className="sketch h-full w-full"
          fill="none"
          stroke="#17150E"
          strokeOpacity="0.42"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* floor */}
          <path d="M22 400 L278 400" pathLength="1" style={{ ["--draw-order" as string]: 0 }} />
          {/* window on the wall */}
          <rect
            x="48"
            y="140"
            width="92"
            height="108"
            rx="2"
            pathLength="1"
            style={{ ["--draw-order" as string]: 1 }}
          />
          <path
            d="M94 140 L94 248 M48 194 L140 194"
            pathLength="1"
            style={{ ["--draw-order" as string]: 2 }}
          />
          {/* sofa seated on the floor */}
          <path
            d="M44 400 L44 330 Q44 316 58 316 L167 316 Q181 316 181 330 L181 400"
            pathLength="1"
            style={{ ["--draw-order" as string]: 3 }}
          />
          <path
            d="M44 358 L181 358 M112 358 L112 400"
            pathLength="1"
            style={{ ["--draw-order" as string]: 4 }}
          />
          {/* boxes stacked beside it, taped */}
          <rect
            x="208"
            y="352"
            width="60"
            height="48"
            rx="3"
            pathLength="1"
            style={{ ["--draw-order" as string]: 5 }}
          />
          <rect
            x="214"
            y="310"
            width="46"
            height="42"
            rx="3"
            pathLength="1"
            style={{ ["--draw-order" as string]: 6 }}
          />
          <path
            d="M238 352 L238 400 M237 310 L237 352"
            pathLength="1"
            style={{ ["--draw-order" as string]: 7 }}
          />
        </svg>
        {/* inventory chips materialize once the room is drawn */}
        <div className="absolute inset-x-0 bottom-7 flex flex-col items-start gap-2 pl-7">
          {vignette.chips.map((c, i) => (
            <span
              key={c}
              className="chip chip-in"
              style={{
                ["--chip-order" as string]: i,
                marginLeft: `${i * 14}px`,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}
