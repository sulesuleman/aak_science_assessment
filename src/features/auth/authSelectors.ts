import { RootState } from "../../app/store";
import { AuthState } from "./authSlice";

export const isRegisterationInProcess = (state: RootState) =>
  (state.auth as AuthState).isRegisterLoading;
export const isRegisterationFailed = (state: RootState) =>
  (state.auth as AuthState).isRegisterFailure;
export const userInfo = (state: RootState) =>
  (state.auth as AuthState).userInfo;
