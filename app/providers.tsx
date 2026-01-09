"use client";

import MuiThemeProvider from "./theme/ThemeProvider";
import ReduxProvider from "./providers/ReduxProvider";
import QueryProvider from "./providers/QueryProvider";

export default function Providers({
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
