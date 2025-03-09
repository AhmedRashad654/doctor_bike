import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IDataUser, IUser, TokenPayload } from "../../types/user";
import Cookies from "js-cookie";
import { request } from "../../axios/axios";
import { jwtDecode } from "jwt-decode";

const initialState: IUser = {
  otp: null,
  data: {
    id: "",
    userName: "",
    normalizedUserName: "",
    email: "",
    normalizedEmail: "",
    emailConfirmed: false,
    passwordHash: "",
    securityStamp: "",
    concurrencyStamp: "",
    phoneNumber: null,
    phoneNumberConfirmed: false,
    twoFactorEnabled: false,
    lockoutEnd: null,
    lockoutEnabled: false,
    accessFailedCount: 0,
    address: null,
    block: false,
    fullName: null,
    phoneNumber2: null,
    typeUser: null,
    dateAdd: "",
    userUpdate: "",
    dateUpdate: "",
    cityId: null,
    city: null,
    mainOrders: [],
    roles: [],
  },
  status: "idle",
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, thunkAPI) => {
    try {
      const token = Cookies.get("token_doctor_bike");
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }
      const decoded: TokenPayload = jwtDecode(token);
      const userId = decoded.nameid;
      const response = await request.post(`/Users/GetById?id=${userId}`, {
        paginationInfo: {
          pageIndex: 0,
          pageSize: 0,
        },
      });
      const roles = response?.data?.roles;
      const isSuberAdmin = roles.some(
        (role: { name: string }) => role.name === "SuperAdmin"
      );
      if (!isSuberAdmin) {
        return thunkAPI.rejectWithValue("Unauthorized: User is not SuperAdmin");
      }
      return response.data;
    } catch {
      return thunkAPI.rejectWithValue("Failed to fetch user data");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IDataUser>) => {
      state.data = action.payload;
    },
    setLogout: () => {
      Cookies.remove("token_doctor_bike");
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.status = "succeeded";
          state.data = action.payload;
        }
      })
      .addCase(fetchUser.rejected, (state) => {
        state.status = "failed";
        Cookies.remove("token_doctor_bike");
        return { ...initialState };
      });
  },
});

export const { setUser, setLogout } = userSlice.actions;
export default userSlice.reducer;
