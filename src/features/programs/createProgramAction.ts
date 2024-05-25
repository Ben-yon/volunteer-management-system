import axios from "axios";
import api from "../../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProgram = createAsyncThunk(
  "programs",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/programmes", {
        formData,
      });
      return data;
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);