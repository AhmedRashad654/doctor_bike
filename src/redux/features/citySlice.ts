import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { request } from "../../axios/axios";
import { ICity, ICityRedux } from "../../types/cities";

const initialState: ICityRedux = {
  data: [],
  status: "idle",
};

export const fetchCity = createAsyncThunk(
  "user/fetchCity",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token_doctor_bike");
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }
      const response = await request.post(`/Cities/GetAllCities`, {
        paginationInfo: {
          pageIndex: 0,
          pageSize: 0,
        },
      });
      return response.data.rows;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch city");
    }
  }
);

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setEditCity: (state, action: PayloadAction<ICity>) => {
      state.data = state?.data?.map((existingCategory) =>
        existingCategory?.id === action.payload.id
          ? action.payload
          : existingCategory
      );
    },
    setAddCity: (state, action: PayloadAction<ICity>) => {
      state?.data?.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCity.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchCity.rejected, (state) => {
        state.status = "failed";
        return { ...initialState };
      });
  },
});
export const { setEditCity, setAddCity } = citySlice.actions;
export default citySlice.reducer;
