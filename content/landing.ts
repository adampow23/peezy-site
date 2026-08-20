/**
 * LOCKED landing-page copy — verbatim per the V1 build spec.
 * Do not edit prose here without explicit sign-off. Markup styles it;
 * this file owns the words. `lead` fields render at weight 600 in ink
 * (the spec's two-bolds-per-block law); they are part of the locked copy.
 */

export const hero = {
  h1: "The app that makes moving manageable.",
  sub: "15 questions and a video of your home. Every day until moving day, planned like a pro.",
  cta: "Get your plan",
  proof: "Built by a 9-year moving pro.",
} as const;

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
  kicker: "The scan is day one. Peezy runs the rest.",
  header: "Three tasks a day until moving day.",
  body: "Peezy works backward from your move date and hands you each morning’s three tasks — the ones that actually matter now, never the ones that can wait. Finish them and you’re on schedule. No giant list, no guessing what’s urgent, no moving targets.",
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
 * Vignette microcopy — NOT page prose. Spec-supplied chip labels plus the
 * in-app lines the vignettes need. Ground rule: these lines describe what
 * the app tells or asks the user — never an action taken on their behalf.
 */
export const vignette = {
  chips: ["Sofa · 3-seat", "Boxes · est. 42", "Truck · 15 ft"],
  boxOne: "Box 1 — Kitchen",
  tasks: [
    { title: "Reserve the elevator at the new building", meta: "10 min" },
    { title: "Schedule your internet install", meta: "15 min" },
    { title: "Pack: hall closet", meta: "Box 12 of 42" },
  ],
  chat: {
    reply: "Finding a new one",
    answer:
      "When you call, ask three things: openings for your move week, how long the waitlist runs, and which records transfer from your current center.",
  },
} as const;
