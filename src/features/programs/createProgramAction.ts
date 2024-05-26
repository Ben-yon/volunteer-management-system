import axios from "axios";
import api from "../../utils/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProgramInterface } from "../../interfaces/ProgramsInterface";

export const createProgram = createAsyncThunk(
  "programs",
  async (programDetails: ProgramInterface, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/programmes", programDetails, {
        headers: {
            'Content-Type': 'application/json'
          }
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
