import axios from "axios";
import api from "../../utils/axios";
import { ProgramsInterface } from "./../../interfaces/ProgramsInterface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProgram = createAsyncThunk(
  "programs",
  async (programData: ProgramsInterface, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/programmes", {
        programData,
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

export const programs = createAsyncThunk("programs", async () => {
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

