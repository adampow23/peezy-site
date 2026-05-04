// Waitlist submission logic.
//
// IMPORTANT: production write to Firestore is DISABLED while Firestore
// rules are being reviewed. The stub below simulates a successful write
// so the form UX can be tested end-to-end. The exact code that will run
// once WAITLIST_WRITE_ENABLED is flipped to true is right below it —
// review carefully before enabling.

export type WaitlistSource = 'hero' | 'footer';

const WAITLIST_WRITE_ENABLED = true;

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const MAX_EMAIL_LENGTH = 254;

export async function submitWaitlist(
  email: string,
  source: WaitlistSource
): Promise<void> {
  if (!WAITLIST_WRITE_ENABLED) {
    // Stub: pretend the write succeeded after a short delay so the
    // submitting → success transition is visible in the UI.
    await new Promise((resolve) => setTimeout(resolve, 600));
    if (typeof console !== 'undefined') {
      console.info('[waitlist:STUB] would write', { email, source });
    }
    return;
  }

  // ----- REAL FIRESTORE WRITE (currently gated off) -----
  // When WAITLIST_WRITE_ENABLED flips to true, this is exactly what runs:
  const { addDoc, collection, serverTimestamp } = await import(
    'firebase/firestore'
  );
  const { getFirebaseDb } = await import('./firebase');
  const db = getFirebaseDb();
  await addDoc(collection(db, 'waitlist'), {
    email,
    source,
    timestamp: serverTimestamp(),
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent : '',
  });
}
