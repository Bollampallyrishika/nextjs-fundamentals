"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const logout = () => {
    localStorage.clear();
    router.replace("/"); // better than push for logout
  };

  const navLink = (href: string, label: string) => {
    const isActive = pathname === href;

    return (
      <Link
        href={href}
        className={`block px-3 py-2 rounded-md transition ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-gray-300 hover:bg-slate-700 hover:text-white"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>

        <nav className="flex-1 space-y-2">
          {navLink("/dashboard", "Dashboard Home")}
          {navLink("/dashboard/users/list", "Users")}
        </nav>

        <button
          onClick={logout}
          className="mt-6 text-left text-red-400 hover:text-red-300 transition"
        >
          Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
