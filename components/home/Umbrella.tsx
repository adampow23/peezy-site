/** "When it rains, it pours" — a wide umbrella over the five feature tiles,
 *  with light rain above it and none underneath. Deterministic rain so the
 *  server and client render the same markup. */
function canopyY(x: number) {
  const t = (x - 10) / 1180;
  return (1 - t) ** 2 * 230 + 2 * (1 - t) * t * -120 + t * t * 230;
}
function rain() {
  let seed = 7;
  const rnd = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  const out: { x: number; y: number }[] = [];
  let tries = 0;
  while (out.length < 90 && tries < 5000) {
    tries++;
    const x = rnd() * 1200, y = rnd() * 300;
    if (y < canopyY(x) - 24) out.push({ x: Math.round(x), y: Math.round(y) });
  }
  return out;
}
const DROPS = rain();

export default function Umbrella() {
  return (
    <svg className="umbrella" viewBox="0 0 1200 320" fill="none" aria-hidden="true">
      <g stroke="rgba(13,26,51,0.2)" strokeWidth="2.5" strokeLinecap="round">
        {DROPS.map((d, i) => (
          <line key={i} x1={d.x} y1={d.y} x2={d.x - 5} y2={d.y + 20} />
        ))}
      </g>
      <path d="M600 22V56" stroke="#0D1A33" strokeWidth="8" strokeLinecap="round" />
      <path d="M10 230Q600 -120 1190 230Q1072 195 954 230Q836 195 718 230Q600 195 482 230Q364 195 246 230Q128 195 10 230Z" fill="#0D1A33" />
      <g stroke="rgba(255,255,255,0.16)" strokeWidth="2">
        <path d="M600 56Q380 110 246 230M600 56Q520 130 482 230M600 56Q680 130 718 230M600 56Q820 110 954 230" />
      </g>
      <text x="600" y="168" textAnchor="middle" fill="#FFFFFF" fontSize="30" fontWeight="300" letterSpacing="10">peezy</text>
      <path d="M600 230V286a18 18 0 0 1 -36 0" stroke="#0D1A33" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
