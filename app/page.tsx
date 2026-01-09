"use client";

import Playground from "./components/Playground";
import QueryTest from "./components/QueryTest";
import UserTest from "./components/UserTest";
import UiStateTest from "./components/UiStateTest";
import Counter from "./components/Counter";

export default function Home() {
  return (
    <main className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mb-4">
          Next.js Fundamentals
        </h1>

        <p className="text-xl text-gray-600">
          App Router & File-based Routing
        </p>
      </section>

      {/* Feature Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
            App Router
          </h2>
          <p className="text-gray-600">
            Modern routing system using layouts, nested routes, and server components.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-2">
            Tailwind CSS
          </h2>
          <p className="text-gray-600">
            Utility-first styling approach for scalable and consistent UI designs.
          </p>
        </div>
      </section>

      {/* MUI + Tailwind */}
      <section>
        <Playground />
      </section>

      {/* Redux UI State */}
      <section>
        <UiStateTest />
      </section>

      {/* Redux Counter */}
      <section>
        <Counter />
      </section>

      {/* TanStack Query */}
      <section>
        <QueryTest />
      </section>

      {/* Users CRUD */}
      <section>
        <UserTest />
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 pt-10">
        © 2026 Next.js Fundamentals
      </footer>
    </main>
  );
}
