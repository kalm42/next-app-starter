"use client";

import createPostHogClient from "@/lib/posthog";
import { PostHogProvider } from "posthog-js/react";

type CSPostHogProviderProps = { children: React.ReactNode };
function CSPostHogProvider(props: CSPostHogProviderProps) {
  const { children } = props;

  const [posthog, error] = createPostHogClient();
  if (error) return <>{children}</>;

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

export default CSPostHogProvider;
