/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";

export const passwordReset = createAsyncThunk(
  'user/passwordReset',
  async (email: string, { rejectWithValue }) => {
    try {
      const response = await api.patch(`Users/${email}/password-update`);
      return response.data; 
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      } else if (error.request) {
        return rejectWithValue('No response from server');
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
