'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setCount(count + 1)}
        className="
          px-6 py-3
          rounded-lg
          bg-blue-600
          text-white
          font-medium
          hover:bg-blue-700
          active:scale-95
          transition
        "
      >
        Click Me
      </button>

      <p className="text-slate-600">
        Clicked <span className="font-semibold">{count}</span> times
      </p>
    </div>
  );
}
