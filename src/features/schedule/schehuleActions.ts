import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateTaskInterface } from "../../interfaces/TaskScheduleInterface";
import api from "../../utils/axios";
import axios from "axios";

export const createTask = createAsyncThunk(
  "task/create",
  async (taskDetails: CreateTaskInterface, { rejectWithValue }) => {
    try {
      const { data } = await api.post("tasks", taskDetails);

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

export const getTasks = createAsyncThunk("tasks", async () => {
  try {
    const { data } = await api.get("tasks");
    return data;
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.data.message
    ) {
      return error.response.data.message;
    } else {
      return error;
    }
  }
});
