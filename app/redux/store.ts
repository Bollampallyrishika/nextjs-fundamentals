import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";

// Create Redux store
export const store = configureStore({
  reducer: {
    ui: uiReducer, // 👈 ui slice registered here
  },
});

// ✅ Type of entire Redux state
export type RootState = ReturnType<typeof store.getState>;

// ✅ Type of dispatch
export type AppDispatch = typeof store.dispatch;
