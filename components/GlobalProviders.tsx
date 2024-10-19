"use client";

import React, { ReactNode } from "react";
import PostHogProvider from "./PostHogProvider";
import TrpcProvider from "./TrpcProvider";

type GlobalProvidersProps = { children: ReactNode };

const GlobalProviders = (props: GlobalProvidersProps) => {
  const { children } = props;
  return (
    <PostHogProvider>
      <TrpcProvider>{children}</TrpcProvider>
    </PostHogProvider>
  );
};

export default GlobalProviders;
