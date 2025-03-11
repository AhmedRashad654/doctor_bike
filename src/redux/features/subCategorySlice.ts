import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { request } from "../../axios/axios";
import { ISubCategory, ISubCategoryRedux } from "../../types/subCategory";

const initialState: ISubCategoryRedux = {
  data: [],
  status: "idle",
};

export const fetchSubCategory = createAsyncThunk(
  "user/fetchSubCategory",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token_doctor_bike");
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }
      const response = await request.post(`/SupCategorys/GetAllSupCategories`, {
        paginationInfo: {
          pageIndex: 0,
          pageSize: 0,
        },
      });
      return response.data.rows;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch sub category");
    }
  }
);

export const subCategorySlice = createSlice({
  name: "subCategory",
  initialState,
  reducers: {
    setEditSubCategory: (state, action: PayloadAction<ISubCategory>) => {
      state.data = state?.data?.map((existingCategory) =>
        existingCategory?.id === action.payload.id
          ? action.payload
          : existingCategory
      );
    },
    setAddNewItemSubCategory: (state, action: PayloadAction<ISubCategory>) => {
      state?.data?.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSubCategory.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchSubCategory.rejected, (state) => {
        state.status = "failed";
        return { ...initialState };
      });
  },
});
export const { setEditSubCategory, setAddNewItemSubCategory } = subCategorySlice.actions;
export default subCategorySlice.reducer;
