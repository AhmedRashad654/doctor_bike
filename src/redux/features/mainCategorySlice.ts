import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { request } from "../../axios/axios";
import { IMainCategory, IMainCategoryRedux } from "../../types/category";

const initialState: IMainCategoryRedux = {
  data: [],
  status: "idle",
};

export const fetchMainCategory = createAsyncThunk(
  "user/fetchMainCategory",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token_doctor_bike");
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }
      const response = await request.post(`/MainCategorys/GetAllMainCategory`, {
        paginationInfo: {
          pageIndex: 0,
          pageSize: 0,
        },
      });
      return response.data.rows;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch main category");
    }
  }
);

export const mainCategorySlice = createSlice({
  name: "mainCategory",
  initialState,
  reducers: {
    setEditMainCategory: (
      state,
      action: PayloadAction<IMainCategory>
    ) => {
      state.data = state?.data?.map((existingCategory) =>
        existingCategory?.id === action.payload.id
          ? action.payload 
          : existingCategory
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMainCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMainCategory.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchMainCategory.rejected, (state) => {
        state.status = "failed";
        return { ...initialState };
      });
  },
});
export const { setEditMainCategory } = mainCategorySlice.actions;
export default mainCategorySlice.reducer;
