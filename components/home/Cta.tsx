import AppStoreBadge from "@/components/AppStoreBadge";

const Down = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 4v16M6 14l6 6 6-6" />
  </svg>
);
const Right = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

/** The one CTA used everywhere on the home page: a text pointer
 *  ("Start my free scan") plus Apple's badge. Only the badge is a link, so
 *  there is never a second button that goes to the same place. */
export function CtaStack({ note = true, className = "" }: { note?: boolean; className?: string }) {
  return (
    <div className={`cta-stack ${className}`}>
      <p className="cta-label">
        Start my free scan <Down />
      </p>
      <AppStoreBadge className="cta-badge" />
      {note && <p className="cta-note">Free iPhone app · No account needed</p>}
    </div>
  );
}

export function CtaInline() {
  return (
    <div className="cta-inline">
      <span className="cta-label">
        Start my free scan <Right />
      </span>
      <AppStoreBadge className="cta-badge-sm" />
    </div>
  );
}
