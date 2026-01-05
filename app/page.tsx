// import Counter from './components/Counter';

// export default function HomePage() {
//   return (
//     <section className="space-y-12">
//       {/* Hero Section */}
//       <div className="text-center space-y-3">
//         <h1 className="text-4xl font-bold text-slate-900">
//           Home Page
//         </h1>
//         <p className="text-slate-600 text-lg">
//           App Router & File-based Routing
//         </p>
//       </div>

//       {/* Feature Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
//           <h2 className="text-xl font-semibold text-blue-600 mb-2">
//             App Router
//           </h2>
//           <p className="text-slate-600">
//             Modern routing system using the app directory
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
//           <h2 className="text-xl font-semibold text-blue-600 mb-2">
//             Tailwind CSS
//           </h2>
//           <p className="text-slate-600">
//             Utility-first styling for scalable UI
//           </p>
//         </div>
//       </div>

//       {/* Interactive Section */}
//       <div className="bg-white rounded-xl shadow-sm border p-8 text-center space-y-4">
//         <h3 className="text-lg font-semibold text-slate-800">
//           Client Component Example
//         </h3>
//         <Counter />
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useState } from "react";

// export default function HomePage() {
//   const [count, setCount] = useState(0);

//   return (
//     <section className="flex flex-col items-center justify-center gap-12 text-center">
      
//       {/* Header */}
//       <header className="space-y-4">
//         <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
//           Next.js Fundamentals
//         </h1>
//         <p className="text-lg text-slate-600">
//           App Router & File-based Routing
//         </p>
//       </header>

//       {/* Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        
//         {/* App Router Card */}
//         <div className="rounded-2xl bg-white shadow-lg border border-slate-200 p-6 hover:shadow-xl transition">
//           <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
//             App Router
//           </h2>
//           <p className="text-slate-600">
//             Modern routing system using the <span className="font-medium">app</span> directory
//             with layouts, nested routes, and server components.
//           </p>
//         </div>

//         {/* Tailwind Card */}
//         <div className="rounded-2xl bg-white shadow-lg border border-slate-200 p-6 hover:shadow-xl transition">
//           <h2 className="text-2xl font-semibold text-pink-600 mb-2">
//             Tailwind CSS
//           </h2>
//           <p className="text-slate-600">
//             Utility-first styling approach for building fast, scalable,
//             and consistent UI designs.
//           </p>
//         </div>
//       </div>

//       {/* Client Component */}
//       <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 p-8 text-white w-full max-w-md shadow-xl">
//         <h3 className="text-2xl font-semibold mb-4">
//           Client Component Example
//         </h3>

//         <button
//           onClick={() => setCount(count + 1)}
//           className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-full hover:bg-slate-100 transition"
//         >
//           Click Me
//         </button>

//         <p className="mt-4 text-lg">
//           Clicked <span className="font-bold">{count}</span> times
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <section className="
      max-w-6xl 
      mx-auto 
      my-12 
      px-6 
      py-16 
      rounded-3xl 
      bg-gradient-to-br from-indigo-50 via-pink-50 to-purple-50
      shadow-xl
      flex 
      flex-col 
      items-center 
      gap-12 
      text-center
    ">
      
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
