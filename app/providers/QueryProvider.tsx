"use client";
// This MUST be a client component because React Query uses hooks

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function QueryProvider({ children }: { children: ReactNode }) {
  // useState ensures QueryClient is NOT recreated on every render
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60, // 1 minute cache
            refetchOnWindowFocus: false, // avoid auto refetch
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* Devtools helps you SEE queries, cache, refetching */}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
