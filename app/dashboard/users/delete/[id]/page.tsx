"use client";

import { useRouter, useParams } from "next/navigation";
import Button from "@/app/components/common/Button";

export default function DeleteUserPage() {
  const router = useRouter();
  const { id } = useParams();

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h2 className="text-lg font-bold mb-6">
        Delete User {id}?
      </h2>

      <div className="flex gap-4">
        <Button
          label="Cancel"
          onClick={() => router.push("/dashboard/users/list")}
        />

        <Button
          label="Delete"
          variant="danger"
          onClick={() => {
            alert("Deleted successfully");
            router.push("/dashboard/users/list");
          }}
        />
      </div>
    </div>
  );
}
