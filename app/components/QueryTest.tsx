"use client";

import { useQuery } from "@tanstack/react-query";

/*
  Function that calls backend API
  NOTE: We return response.data.data (ARRAY ONLY)
*/
const fetchUsers = async () => {
  const res = await fetch("/api/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const json = await res.json();

  return json.data; // ✅ ONLY array returned
};

export default function QueryTest() {
  const {
    data,        // now data === users[]
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-md">
      <h3 className="text-xl font-semibold mb-4">Users</h3>

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

      <button
        onClick={() => refetch()}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Refetch
      </button>
    </div>
  );
}
