/**
 * LOCKED landing-page copy — verbatim per the V1 build spec.
 * Do not edit prose here without explicit sign-off. Markup styles it;
 * this file owns the words. `lead` fields render at weight 600 in ink
 * (the spec's two-bolds-per-block law); they are part of the locked copy.
 */

export const hero = {
  h1Line1: "Moving has a hundred hidden tasks.",
  h1Line2: "Peezy finds yours.",
  sub: "Peezy is a personal moving expert for your iPhone. Answer a 90-second assessment about your dates, your home, and your household, and it builds a plan that only contains your move — then walks you through it, one calm task at a time.",
  cta: "Download on the App Store",
  ctaSecondary: "See how it works",
  proof: "Built by a 9-year moving pro.",
} as const;

/** V4 stats strip — exact copy. `unit` renders small inside the numeral ("90sec"). */
export const stats = [
  { n: "90", unit: "sec", label: "From first question to a finished assessment" },
  { n: "60+", unit: "", label: "Move tasks your answers are checked against" },
  { n: "1", unit: "", label: "Task in front of you at any moment" },
  // The space inside "2 a.m." below is U+00A0 so the label never splits there (V4.1).
  { n: "0", unit: "", label: "Spreadsheets, sticky notes, or 2 a.m. lists" },
] as const;

/** V3.1 problem section — exact copy. */
export const problem = {
  kicker: "The problem",
  header: "The boxes were never the hard part.",
  para1:
    "The hard part is everything nobody tells you to do. Protecting the deposit. Transferring the pharmacy. The daycare notice you owed thirty days ago. The internet that takes two weeks to install and the freezer that takes two days to defrost. Every one of them has a deadline — set by someone who never met you.",
  para2:
    "So you keep a list, and the list does what lists do: it grows, at 2 a.m., in your head. That is the job Peezy takes off your hands.",
} as const;

/** V4 how-it-works — exact copy; the full three-step explanation. */
export const howItWorks = {
  kicker: "How it works",
  rows: [
    {
      title: "Answer the assessment",
      line: "Ninety seconds of questions about your move: where, when, who is coming with you, what you own, and what you’d rather hire out.",
    },
    {
      title: "Get your plan",
      line: "Peezy checks your answers against more than sixty move tasks and builds the ones you actually need into a timeline — every deadline already in the right order, nothing generic left in.",
    },
    {
      title: "Do the next right thing",
      line: "Open the app each day and handle the one task in front of you. Most take minutes, because the form, the phone number, or the deadline is already there. Check it off. Close the app.",
    },
  ],
} as const;

/** V4 — kicker opening the deep screenshot chapters (#features). */
export const featuresKicker = "What you get";

export const block1 = {
  header: "One video. Zero guesswork.",
  body: "Walk through your home filming, and Peezy builds your room-by-room inventory.",
  split: [
    {
      lead: "Hiring movers?",
      rest: "Send them your inventory and get quotes that are accurate, faster, and harder to inflate.",
    },
    {
      lead: "Moving yourself?",
      rest: "Know exactly what truck fits your life — no guessing between the 15-footer and the 20.",
    },
  ],
} as const;

export const block1b = {
  header: "It even knows what goes in box one.",
  body: "Your plan tells you which room to start in, what to pack each day, and what goes in every box — down to the supplies you’ll need before you start.",
} as const;

export const block2 = {
  header: "One task in front of you. Always.",
  body: "Peezy works backward from your move date and drops three tasks a day in your lap — one at a time. Finish the one in front of you and the next appears. No giant list, no guessing what’s urgent, no moving targets.",
} as const;

export const block3 = {
  headerLine1: "We don’t just hand you tasks.",
  headerLine2: "We walk you through them.",
  bodyBefore: "Tap a task and Peezy asks the right questions —",
  blockquote: "Keeping your current daycare, or finding a new one near the new place?",
  bodyAfterStart: "— then narrows to exactly what needs to happen. ",
  bodyAfterLead: "Stuck on the how?",
  bodyAfterRest: " It digs into the specifics: who to contact, what to ask for, what to say.",
  contrast: "The end of “how to set up utilities” tabs at midnight.",
} as const;

export const closing = {
  header: "Moving day is coming either way.",
  sub: "Get your plan before the boxes pile up.",
  cta: "Get your plan",
} as const;

/**
 * Step kicker labels — the ONLY copy addition the redesign spec allows
 * (numerals plus a ≤3-word kicker label per step). Rendered uppercase by CSS.
 */
export const stepLabels = ["The scan", "One at a time", "The walkthrough"] as const;
