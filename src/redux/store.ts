import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import roleSlice from "./features/rolesSlice";
import mainCategorySlice from "./features/mainCategorySlice";
import subCategorySlice from "./features/subCategorySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    role: roleSlice,
    mainCategory: mainCategorySlice,
    subCategory: subCategorySlice,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
