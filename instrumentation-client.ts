import { analytics } from "@heycatch/sdk";

// HeyCatch analytics — Next ≥15.3 runs this on the client before hydration.
// Module scope + static import per the install guide (heycatch.ai/agents.md):
// init is idempotent and a no-op during SSR; the key is publishable.
analytics.init({
  projectKey: "hck_pk_85GwpDsot7uP8GOJu9XJFt-r5hwUNUjC",
  install: {
    framework: "nextjs",
    frameworkVersion: "15",
    agent: "claude-code",
  },
});
