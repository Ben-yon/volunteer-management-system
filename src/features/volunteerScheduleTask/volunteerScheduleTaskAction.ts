import { createAsyncThunk } from "@reduxjs/toolkit";
import { VolunteerScheduleTask } from "../../interfaces/TaskScheduleInterface";
import api from "../../utils/axios";
import axios from "axios";

export const createVolunteerScheduleTask = createAsyncThunk(
  "volunteerScheduleTask/create",
  async (
    volunteerScheduleTaskDetails: VolunteerScheduleTask,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.post(
        "volunteer-scheduled-tasks",
        volunteerScheduleTaskDetails
      );
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

export const getVolunteerScheduledTasks = createAsyncThunk(
  "volunteerScheduleTask/get",
  async () => {
    try {
      const { data } = await api.get("volunteer-scheduled-task");
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
