import { createAsyncThunk } from "@reduxjs/toolkit";
import { ScheduleTaskInterface } from "../../interfaces/TaskScheduleInterface";
import api from "../../utils/axios";
import axios from "axios";

export const scheduleTask = createAsyncThunk(
  "schedule-task/create",
  async (scheduleTaskDetails: ScheduleTaskInterface, { rejectWithValue }) => {
    try {
      const { data } = await api.post("scheduledtasks", scheduleTaskDetails);
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

export const getScheduledTasks = createAsyncThunk(
  "schedule-tasks",
  async () => {
    try {
      const { data } = await api.get("scheduletasks");
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
  }
);
