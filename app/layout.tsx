"use client";

import "./globals.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

import ReduxProvider from "./providers/ReduxProvider";
import QueryProvider from "./providers/QueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.clear();
    }
    router.push("/");
  };

  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ReduxProvider>
            <div className="flex min-h-screen">
              {/* Sidebar */}
              <aside className="w-64 bg-slate-900 text-white p-6">
                <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

                <nav className="space-y-4">
                  <Link
                    href="/dashboard"
                    className="block hover:text-blue-400"
                  >
                    Dashboard Home
                  </Link>

                  <Link
                    href="/dashboard/users/list"
                    className="block hover:text-blue-400"
                  >
                    Users
                  </Link>

                  <button
                    onClick={logout}
                    className="block text-red-400 hover:text-red-300"
                  >
                    Logout
                  </button>
                </nav>
              </aside>

              {/* Page Content */}
              <main className="flex-1 p-8 bg-gray-100">
                {children}
              </main>
            </div>
          </ReduxProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
