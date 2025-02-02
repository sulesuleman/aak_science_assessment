import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { registerUser } from "./authAction";
import { ISignup } from "../../types/models";

// Define a type for the slice state
export interface AuthState {
  isRegisterLoading: boolean;
  isRegisterSuccess: boolean;
  isRegisterFailure: boolean;
  userInfo: Object;
  userToken: null | string;
}

// Define the initial state using that type
const initialState: AuthState = {
  isRegisterLoading: false,
  isRegisterSuccess: false,
  isRegisterFailure: false,
  userInfo: {},
  userToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isRegisterLoading = true;
    });
    builder.addCase(
      registerUser.fulfilled,
      (state, action: PayloadAction<ISignup>) => {
        state.isRegisterLoading = false;
        state.isRegisterSuccess = true;
        state.userInfo = action.payload;
      }
    );
    builder.addCase(registerUser.rejected, (state) => {
      state.isRegisterLoading = false;
      state.isRegisterFailure = true;
    });
  },
});

export default authSlice.reducer;
