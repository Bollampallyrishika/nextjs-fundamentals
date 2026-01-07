'use client';

import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { toggleSidebar } from '@/app/redux/slices/uiSlice';

export default function UiStateTest() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.ui.isSidebarOpen);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-semibold">Redux UI State Test</h2>

      <p>
        Sidebar Status:{" "}
        <span className="font-bold text-blue-600">
          {isOpen ? 'OPEN' : 'CLOSED'}
        </span>
      </p>

      <button
        onClick={() => dispatch(toggleSidebar())}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md"
      >
        Toggle Sidebar (Redux)
      </button>
    </div>
  );
}
