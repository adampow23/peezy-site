/** Single source of truth: renders the FAQ section AND generates FAQPage JSON-LD.
 *  Visible copy and schema can never drift because both read this file. */
export const faqs: { q: string; a: string; links?: { text: string; href: string }[] }[] = [
  {
    q: "Is Peezy a moving company?",
    a: "No — Peezy is the person running your move, not the truck. We build your plan, walk you through every task, and coordinate the companies you'll need: movers, internet, cleaning. The physical work is done by vendors; the thinking, scheduling, and chasing is done by us.",
  },
  {
    q: "What does \u201chandled\u201d actually mean?",
    a: "It means the task leaves your plate for real. Say it's mover quotes: you answer a few questions about your move, Peezy contacts the companies, gathers the quotes, and lays them out for you to compare. You pick, it gets booked, and you get updates until it's done. Your job in all of it: a few taps.",
  },
  {
    q: "What does Peezy cost?",
    a: "Downloading Peezy, taking the assessment, and getting your full plan is free — that's the try-before-you-buy. Peezy+ unlocks everything else: the room scanner, guided task flows, and the concierge. You'll see the current price clearly in the app before you're ever charged — no surprises, ever.",
  },
  {
    q: "Do I have to use Peezy's vendors?",
    a: "Never. Every task in your plan can be done yourself, and the app shows you how. The concierge exists for the tasks you'd rather not do — it's an option, not a toll booth.",
  },
  {
    q: "How does Peezy make money if you don't mark anything up?",
    a: "Two ways, both in the open. Peezy+ purchases, and referral commissions from some services — like when you set up internet through a link in the app. Commissions never change your price, and companies can't pay to appear in your plan. Your plan is built from your answers, not from who pays us.",
    links: [{ text: "Full disclosure", href: "/disclosure" }],
  },
  {
    q: "What happens if a vendor screws up?",
    a: "Then it becomes our problem instead of yours. Vendors booked through Peezy answer to us: we check in after every job, repeat problems get them removed, and raising a price on moving day gets them removed instantly and permanently. If they won't make it right, we will.",
    links: [{ text: "The Peezy Pinky Promise", href: "/promise" }],
  },
  {
    q: "When should I download it — how early is too early?",
    a: "The day you know you're moving. Peezy schedules everything backward from your move date, so the more runway it has, the calmer your plan is. Moving in two weeks? Still download it — the plan just gets more focused.",
  },
  {
    q: "What if my move date changes?",
    a: "Change it in the app and your whole plan reschedules around the new date. Moves shift; your plan shifts with them.",
  },
  {
    q: "What does the scanner do with video of my home?",
    a: "It builds your furniture inventory — that's it. You review the list, you own it, and it exists to size your move correctly. The details are in plain language in our privacy policy.",
    links: [{ text: "Privacy policy", href: "/privacy" }],
  },
  {
    q: "Is Peezy on Android?",
    a: "Not yet — Peezy is iPhone-only today. Building one platform extremely well before starting the second is the same \u201cdo it right\u201d rule we hold our vendors to.",
  },
];
