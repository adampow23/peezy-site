import { SCAN_PHONE, PACK_PHONE } from "./phones";

/** A 360×780 phone mockup, scaled by the `--phone-scale` CSS variable set on
 *  `.phone` in home.css (responsive). Decorative: aria-hidden. */
export default function Phone({ kind }: { kind: "scan" | "pack" }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className="phone-inner" dangerouslySetInnerHTML={{ __html: kind === "scan" ? SCAN_PHONE : PACK_PHONE }} />
    </div>
  );
}
