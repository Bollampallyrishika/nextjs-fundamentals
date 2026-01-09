"use client";

import { useParams, useRouter } from "next/navigation";
import Button from "@/app/components/common/Button";

export default function UpdateUserPage() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-xl font-bold mb-4">Update User {id}</h1>

      <input className="border p-2 w-full mb-4 rounded" />

      <Button
        label="Update"
        onClick={() => {
          alert("Updated successfully");
          router.push("/dashboard/users/list");
        }}
      />
    </div>
  );
}
