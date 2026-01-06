"use client";
// Marks this file as a Client Component
// Needed because we are using useState, click events, and browser interactions
import { useState } from "react";
import MuiTest from "./components/MuiTest"; 
//  Importing reusable MUI component to see MUI + Theme output

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <section
      className="
           max-w-6xl              // limits content width
        mx-auto               // centers content horizontally
        my-12                 // margin top & bottom
        px-6 py-16            // padding
        rounded-3xl           // rounded container
        bg-gradient-to-br     // background gradient
        from-indigo-50 via-pink-50 to-purple-50
        shadow-xl             // outer shadow
        flex flex-col         // vertical layout
        items-center          // center items horizontally
        gap-12                // space between sections
        text-center           // center text
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

      {/* 🔥 MUI TEST OUTPUT (THIS IS WHAT YOU WERE MISSING) */}
      <MuiTest />

      {/* Client Component */}
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
