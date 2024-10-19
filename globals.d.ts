/* eslint-disable @typescript-eslint/no-unused-vars */

namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_POSTHOG_KEY: string;
    NEXT_PUBLIC_POSTHOG_HOST: string;
    SENTRY_AUTH_TOKEN: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
  }
}
