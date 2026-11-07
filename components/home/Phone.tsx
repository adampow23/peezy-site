/** Two phone mockups, 360×780 at scale 1, scaled by `--phone-scale` on `.phone`.
 *  Decorative (aria-hidden); the surrounding copy carries the meaning.
 *  "scan": the camera view while filming a kitchen cabinet.
 *  "plan": today's packing list — the thing the headline promises. */

function Frame({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="phone" aria-hidden="true">
      <div className={`phone-inner${dark ? " is-dark" : ""}`}>
        <div className="phone-screen">
          <span className="phone-island" />
          <span className="phone-time">9:41</span>
          {children}
        </div>
      </div>
    </div>
  );
}

export function ScanPhone() {
  return (
    <Frame dark>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/home/cabinet.jpg" alt="" className="scan-photo" loading="lazy" />
      <div className="scan-pill">
        <span className="scan-rec" />
        <span>Kitchen</span>
        <span className="scan-clock">0:14</span>
      </div>
      <p className="scan-hint">Slow pan, left to right</p>
      <span className="scan-shutter">
        <span />
      </span>
    </Frame>
  );
}

const TODAY = [
  { n: "5", item: "Serving bowls", where: "Cabinet 2 · bottom shelf", now: true },
  { n: "6", item: "Dinner plates", where: "Cabinet 2 · middle shelf" },
  { n: "8", item: "Mugs", where: "Cabinet 3" },
  { n: "6", item: "Glasses", where: "Cabinet 3" },
];

export function PlanPhone() {
  return (
    <Frame>
      <div className="plan">
        <p className="plan-day">
          Today · Friday <span>Day 1 of 5</span>
        </p>
        <p className="plan-h">Pack these</p>
        <div className="plan-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/home/cabinet.jpg" alt="" loading="lazy" />
          <span className="plan-box" />
        </div>
        <ul className="plan-list">
          {TODAY.map((t) => (
            <li key={t.item} className={t.now ? "is-now" : undefined}>
              <span className="plan-n">{t.n}</span>
              <span className="plan-item">
                {t.item}
                <small>{t.where}</small>
              </span>
              <span className="plan-check" />
            </li>
          ))}
        </ul>
        <div className="plan-btn">Packed</div>
      </div>
    </Frame>
  );
}
