import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import MuiThemeProvider from "./theme/ThemeProvider";
import ReduxProvider from "./providers/ReduxProvider";
import QueryProvider from "./providers/QueryProvider"; // ✅ ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Fundamentals",
  description: "Redux + TanStack Query + MUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-slate-100
          text-slate-800
        `}
      >
        {/* 🔹 Server-state provider */}
        <QueryProvider>
          {/* 🔹 Global client-state provider */}
          <ReduxProvider>
            {/* 🔹 UI theme */}
            <MuiThemeProvider>
              <main className="min-h-screen max-w-5xl mx-auto px-6 py-10 space-y-8">
                {children}
              </main>

              <footer className="text-center text-sm text-slate-500 py-6">
                © 2026 Next.js Fundamentals
              </footer>
            </MuiThemeProvider>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
