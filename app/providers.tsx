"use client";

import { ClientEnvironmentVariables as env } from "@/lib/env";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  const [phKey, errorPhKey] = env.NEXT_PUBLIC_POSTHOG_KEY;
  const [phHost, errorPhHost] = env.NEXT_PUBLIC_POSTHOG_HOST;
  if (errorPhKey || errorPhHost) {
    throw errorPhKey || errorPhHost;
  }

  posthog.init(phKey, {
    api_host: phHost,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}

type CSPostHogProviderProps = { children: React.ReactNode };
export function CSPostHogProvider(props: CSPostHogProviderProps) {
  const { children } = props;
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
