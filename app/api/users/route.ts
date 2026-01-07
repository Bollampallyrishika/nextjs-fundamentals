import { NextResponse } from "next/server";

// This acts as your BACKEND
export async function GET() {
  // Simulate DB delay
  await new Promise((res) => setTimeout(res, 1000));

  return NextResponse.json([
    { id: 1, name: "Rishika" },
    { id: 2, name: "Next.js Learner" },
  ]);
}
