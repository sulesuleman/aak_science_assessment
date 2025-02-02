import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignup } from "../../types/models";
import { HttpService } from "../../services";
import { AxiosError } from "axios";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload: ISignup, { rejectWithValue }) => {
    const http = new HttpService();
    try {
      const response: ISignup = await http.service().push("/signup/", payload);
      console.log("response values: ", response);
      return response;
    } catch (error: AxiosError | any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.response.data.message);
      }
    }
  }
);
