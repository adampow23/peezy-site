/** Outcome line with a self-drawing checkmark. Animation is CSS-driven and fires
 *  when the parent Reveal gains .is-in (see globals.css .check-path). */
export default function CheckItem({ text }: { text: string }) {
  return (
    <span className="flex items-center gap-3 text-[1.1875rem] font-medium">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          className="check-path"
          d="M4 12.5 9.5 18 20 6.5"
          stroke="var(--color-ok)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {text}
    </span>
  );
}
