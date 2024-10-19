// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { ClientEnvironmentVariables } from "./lib/env";
import createPostHogClient from "./lib/posthog";

const [dsn, errorDsn] = ClientEnvironmentVariables.NEXT_PUBLIC_SENTRY_DSN;
if (errorDsn) throw errorDsn;
const [posthog, errorPostHog] = createPostHogClient();
if (errorPostHog) throw errorPostHog;

Sentry.init({
  dsn,

  integrations: [
    posthog.sentryIntegration({
      organization: "kyle-h0",
      projectId: 4508082604933120,
      severityAllowList: ["error", "info"], // optional: here is set to handle captureMessage (info) and captureException (error)
    }),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
