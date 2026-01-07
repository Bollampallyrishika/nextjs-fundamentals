"use client";
// Marks this file as a Client Component
// Needed because we are using useState, click events, and browser interactions

import { useState } from "react";
import MuiTest from "./components/MuiTest";
// Importing reusable MUI component to see MUI + Theme output

import UiStateTest from "./components/UiStateTest";
import QueryTest from "./components/QueryTest";
// ✅ Redux UI state test component (Global state)

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <section
      className="
        max-w-6xl
        mx-auto
        my-12
        px-6 py-16
        rounded-3xl
        bg-gradient-to-br
        from-indigo-50 via-pink-50 to-purple-50
        shadow-xl
        flex flex-col
        items-center
        gap-12
        text-center
      "
    >
      
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          Next.js Fundamentals
        </h1>
        <p className="text-lg text-slate-700">
          App Router & File-based Routing
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="rounded-2xl bg-white shadow-md border p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            App Router
          </h2>
          <p className="text-slate-600">
            Modern routing system using layouts, nested routes, and server components.
          </p>
        </div>

        <div className="rounded-2xl bg-white shadow-md border p-6 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Tailwind CSS
          </h2>
          <p className="text-slate-600">
            Utility-first styling approach for scalable and consistent UI designs.
          </p>
        </div>
      </div>

      {/* MUI + Tailwind */}
      <MuiTest />
      

      {/* ✅ Redux Global State Example */}
      <UiStateTest />
      <QueryTest/>

      {/* Client Component (Local State) */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 p-8 text-white w-full max-w-md shadow-xl">
        <h3 className="text-2xl font-semibold mb-4">
          Client Component Example
        </h3>

        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-slate-100 transition"
        >
          Click Me
        </button>

        <p className="mt-4 text-lg">
          Clicked <span className="font-bold">{count}</span> times
        </p>
      </div>
    </section>
  );
}
