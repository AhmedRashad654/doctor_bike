import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";

export const store = configureStore({
  reducer: { user: userSlice },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
