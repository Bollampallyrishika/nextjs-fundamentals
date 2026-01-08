"use client";

import { useEffect } from "react";
import { getUsers } from "@/app/query/users";

export default function UserTest() {
  useEffect(() => {
    // API log evidence
    getUsers()
      .then((res) => {
        console.log("Users from backend:", res);
      })
      .catch((err) => {
        console.error("API Error:", err.message);
      });
  }, []);

  return <div>Check browser console for API logs</div>;
}
