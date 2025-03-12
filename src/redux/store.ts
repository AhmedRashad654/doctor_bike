import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import roleSlice from "./features/rolesSlice";
import mainCategorySlice from "./features/mainCategorySlice";
import subCategorySlice from "./features/subCategorySlice";
import citySlice from "./features/citySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    role: roleSlice,
    mainCategory: mainCategorySlice,
    subCategory: subCategorySlice,
    city: citySlice,
  },
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
