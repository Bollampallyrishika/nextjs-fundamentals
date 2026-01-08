import { NextResponse } from "next/server";

/*
  This file acts as your BACKEND (API Layer)
  Frontend will call these methods using fetch / axios / TanStack Query
*/

// Temporary in-memory data (acts like a database)
let users = [
  { id: 1, name: "Rishika" },
  { id: 2, name: "Next.js Learner" },
];

/* --------------------------------
   GET → Fetch data (READ)
   Used when frontend wants data
----------------------------------*/
export async function GET() {
  // Simulate database delay
  await new Promise((res) => setTimeout(res, 1000));

  return NextResponse.json(
    {
      success: true,
      data: users,
    },
    { status: 200 } // OK
  );
}

/* --------------------------------
   POST → Add new data (CREATE)
   Used for create operations
----------------------------------*/
export async function POST(request: Request) {
  const body = await request.json(); // Data sent from frontend

  const newUser = {
    id: Date.now(), // unique id
    name: body.name,
  };

  users.push(newUser); // Save to "DB"

  return NextResponse.json(
    {
      success: true,
      message: "User added successfully",
      data: newUser,
    },
    { status: 201 } // Created
  );
}

/* --------------------------------
   PUT → Update existing data (UPDATE)
   Used when full update is needed
----------------------------------*/
export async function PUT(request: Request) {
  const body = await request.json();

  const index = users.findIndex((u) => u.id === body.id);

  // Error handling
  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "User not found" },
      { status: 404 } // Not Found
    );
  }

  // Update user
  users[index].name = body.name;

  return NextResponse.json(
    {
      success: true,
      message: "User updated successfully",
      data: users[index],
    },
    { status: 200 }
  );
}

/* --------------------------------
   DELETE → Remove data (DELETE)
----------------------------------*/
export async function DELETE(request: Request) {
  const { id } = await request.json();

  users = users.filter((user) => user.id !== id);

  return NextResponse.json(
    {
      success: true,
      message: "User deleted successfully",
    },
    { status: 200 }
  );
}
