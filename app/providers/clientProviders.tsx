"use client";

import MuiThemeProvider from "../theme/ThemeProvider";
import ReduxProvider from "./ReduxProvider";
import QueryProvider from "./QueryProvider";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <ReduxProvider>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </ReduxProvider>
    </QueryProvider>
  );
}
