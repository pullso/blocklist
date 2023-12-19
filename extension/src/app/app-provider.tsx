import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "@/shared/api/query-client";

export function AppProvider({ children }: { children?: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
