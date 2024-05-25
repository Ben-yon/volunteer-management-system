import axios from "axios";
import api from "../../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const allPrograms = createAsyncThunk("allPrograms", async () => {
  try {
    const { data } = await api.get("/programmes");
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data.message
    ) {
      return error.response.data;
    } else {
      return error;
    }
  }
});

export const program = createAsyncThunk("programs/id", async(id: string, {rejectWithValue}) => {
    try{
        const { data } = await api.get(`/programmes/${id}`);
        return data;
    }catch (error) {
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.data.message
        ) {
          return rejectWithValue(error.response.data);
        } else {
          return error;
        }
      }
});

