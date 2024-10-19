import { Result } from "@/types/shared-types";

export class ClientEnvironmentVariables {
  public static get NEXT_PUBLIC_POSTHOG_KEY(): Result<string> {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) {
      return [null, new Error("NEXT_PUBLIC_POSTHOG_KEY is not defined")];
    }
    return [key, null];
  }

  public static get NEXT_PUBLIC_POSTHOG_HOST(): Result<string> {
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
    if (!host) {
      return [null, new Error("NEXT_PUBLIC_POSTHOG_HOST is not defined")];
    }
    return [host, null];
  }

  public static get NEXT_PUBLIC_SENTRY_DSN(): Result<string> {
    const dsn = process.env.SENTRY_DSN;
    if (!dsn) {
      return [null, new Error("SENTRY_DSN is not defined")];
    }
    return [dsn, null];
  }
}

export class ServerEnvironmentVariables {
  constructor() {
    if (typeof window !== "undefined") {
      throw new Error(
        "ServerEnvironmentVariables is only available in the server"
      );
    }
  }

  public static get SENTRY_AUTH_TOKEN(): Result<string> {
    const token = process.env.SENTRY_AUTH_TOKEN;
    if (!token) {
      return [null, new Error("SENTRY_AUTH_TOKEN is not defined")];
    }
    return [token, null];
  }
}
