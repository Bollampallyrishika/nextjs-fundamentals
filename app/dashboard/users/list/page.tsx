"use client";

import { useRouter } from "next/navigation";
import Button from "@/app/components/common/Button";

export default function UsersListPage() {
  const router = useRouter();
  const users = [{ id: 1, name: "Rishika" }];

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h1 className="text-2xl font-bold mb-6">Users</h1>

      {users.map((user) => (
        <div
          key={user.id}
          className="flex justify-between items-center border-b py-3"
        >
          <span className="font-medium">{user.name}</span>

          <div className="flex gap-3">
            <Button
              label="Update"
              onClick={() =>
                router.push(`/dashboard/users/update/${user.id}`)
              }
            />

            <Button
              label="Delete"
              variant="danger"
              onClick={() =>
                router.push(`/dashboard/users/delete/${user.id}`)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
}
