import { Result } from "@/types/shared-types";

export class ClientEnvironmentVariables {
  constructor() {
    if (typeof window === "undefined") {
      throw new Error(
        "ClientEnvironmentVariables is only available in the client"
      );
    }
  }
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
}
