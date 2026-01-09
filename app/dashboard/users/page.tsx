"use client";

import { useParams, useRouter } from "next/navigation";

export default function UpdateUserPage() {
  const { id } = useParams();
  const router = useRouter();

  const handleUpdate = () => {
    alert(`User ${id} updated successfully`);
    router.push("/dashboard/users/list");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-xl font-bold mb-4">
        Update User {id}
      </h1>

      <input
        placeholder="Name"
        className="border p-2 w-full mb-4"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Update
      </button>
    </div>
  );
}
