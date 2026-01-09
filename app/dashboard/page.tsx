import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="flex gap-6">
        <Link
          href="/dashboard/users/list"
          className="bg-white shadow p-6 rounded w-64 hover:shadow-lg"
        >
          👥 View Users
        </Link>

        <Link
          href="/dashboard/users/create"
          className="bg-white shadow p-6 rounded w-64 hover:shadow-lg"
        >
          ➕ Create User
        </Link>
      </div>
    </div>
  );
}
