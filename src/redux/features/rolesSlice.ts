import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IRoleRedux } from "../../types/user";
import Cookies from "js-cookie";
import { request } from "../../axios/axios";

const initialState: IRoleRedux = {
  data: [],
  status: "idle",
};

export const fetchRole = createAsyncThunk(
  "user/fetchRole",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token_doctor_bike");
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }
      const response = await request.get(`/Role/GetAllRoles`);
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch roles");
    }
  }
);

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRole.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRole.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchRole.rejected, (state) => {
        state.status = "failed";
        return { ...initialState };
      });
  },
});

export default roleSlice.reducer;
