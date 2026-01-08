/*
  This file is FRONTEND logic
  It talks to backend APIs
*/

export async function getUsers() {
  const response = await fetch("/api/users");

  // Error handling using status code
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

export async function createUser(user: {
  name: string;
  email: string;
}) {
  const response = await fetch("/api/users", {
    method: "POST", // HTTP method
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user), // Sending data to backend
  });

  if (!response.ok) {
    throw new Error("Failed to create user");
  }

  return response.json();
}
