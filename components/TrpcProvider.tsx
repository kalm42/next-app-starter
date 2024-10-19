"use client";

import { getBaseUrl } from "@/lib/getBaseUrl";
import { react_trpc } from "@/lib/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getFetch, httpBatchLink, loggerLink } from "@trpc/react-query";
import { ReactNode, useState } from "react";
import superjson from "superjson";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 5 * 1000 } },
});

type TrpcProviderProps = { children: ReactNode };

export default function TrpcProvider(props: TrpcProviderProps) {
  const { children } = props;
  const url = getBaseUrl() + "/api";

  const [trpcClient] = useState(() =>
    react_trpc.createClient({
      transformer: superjson,
      links: [
        loggerLink({ enabled: () => true }),
        httpBatchLink({
          url,
          fetch: async (input, init) => getFetch()(input, init),
        }),
      ],
    })
  );

  return (
    <react_trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </react_trpc.Provider>
  );
}
