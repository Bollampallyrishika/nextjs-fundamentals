import { QueryClient } from "@tanstack/react-query";

/*
  QueryClient is like a STORE for server data
  It handles:
  - caching
  - refetching
  - background updates
*/
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // data stays fresh for 1 minute
      refetchOnWindowFocus: false, // avoid unnecessary refetch
    },
  },
});
