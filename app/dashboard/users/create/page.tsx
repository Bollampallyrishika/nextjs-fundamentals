"use client";

import { useRouter } from "next/navigation";
import Button from "@/app/components/common/Button";

export default function CreateUserPage() {
  const router = useRouter();

  const handleCreate = () => {
    alert("User created successfully");
    router.push("/dashboard/users/list");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-xl font-bold mb-4">Create User</h1>

      <input
        placeholder="Name"
        className="border p-2 w-full mb-4 rounded"
      />

      <Button label="Create" onClick={handleCreate} />
    </div>
  );
}
