/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    // DB
    DATABASE_URL?: string;
    // Meta details
    NEXT_PUBLIC_ENVIRONMENT?: string;
    NEXT_PUBLIC_APP_DOMAIN?: string;
    // PostHog
    NEXT_PUBLIC_POSTHOG_KEY?: string;
    NEXT_PUBLIC_POSTHOG_HOST?: string;
    // Sentry
    NEXT_PUBLIC_SENTRY_DSN?: string;
    SENTRY_AUTH_TOKEN?: string;
  }
}
