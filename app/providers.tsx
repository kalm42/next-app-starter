"use client";

import createPostHogClient from "@/lib/posthog";
import { PostHogProvider } from "posthog-js/react";

type CSPostHogProviderProps = { children: React.ReactNode };
export function CSPostHogProvider(props: CSPostHogProviderProps) {
  const [posthog, error] = createPostHogClient();
  if (error) throw error;

  const { children } = props;
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
