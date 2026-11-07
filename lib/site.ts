export const SITE_URL = "https://peezymove.com";
export const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ??
  "https://apps.apple.com/app/peezy"; // TODO: set NEXT_PUBLIC_APP_STORE_URL in Vercel to the real listing URL after App Review approval

/** Pre-order phase. Release day: flip to false (badges become "Download on the
 *  App Store", nav CTA becomes "Get the app"), then push. */
export const PREORDER = false;
export const SUPPORT_EMAIL = "support@peezymove.com";
export const FOUNDER_EMAIL = "adam@peezymove.com";

export const HOME_DESCRIPTION =
  "Record a short video of each room. Peezy PackRx turns what's actually in your home into a day-by-day packing plan, so you know what to pack today and nothing's left for the night before.";
