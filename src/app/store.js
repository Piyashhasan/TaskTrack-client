import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import taskSlice from "../features/task/tasksSlice";
import { apiSlice } from "../features/apislice/apiSlice";

// --- create store ---
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSlice,
    tasks: taskSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

  devTools: false,
});
