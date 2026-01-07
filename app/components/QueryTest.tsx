/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// TanStack Query hook
import { useQuery } from "@tanstack/react-query";

// Backend API call
const fetchUsers = async () => {
  console.log(" API CALLED: /api/users");

  const res = await fetch("/api/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();

  console.log(" API RESPONSE:", data);
  return data;
};

export default function QueryTest() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"], // cache key
    queryFn: fetchUsers,
  });

  // 🔄 Loading state (UI)
  if (isLoading) {
    return (
      <div className="p-6 bg-white rounded-xl shadow text-blue-600">
        Loading users from backend...
      </div>
    );
  }

  //  Error state (UI)
  if (isError) {
    return (
      <div className="p-6 bg-white rounded-xl shadow text-red-600">
        Error: {(error as Error).message}
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4 text-indigo-600">
        Users (Fetched from Backend)
      </h3>

      {/* UI Data */}
      <ul className="space-y-2 mb-4">
        {data.map((user: any) => (
          <li
            key={user.id}
            className="p-2 rounded bg-slate-100"
          >
            {user.name}
          </li>
        ))}
      </ul>

      {/* Refetch Button */}
      <button
        onClick={() => {
          console.log(" Manual refetch triggered");
          refetch();
        }}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Refetch Users
      </button>
    </div>
  );
}
