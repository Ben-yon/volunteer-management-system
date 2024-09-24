import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateNotificationInterface } from "../../interfaces/NotificationInterface";
import api from "../../utils/axios";
import axios from "axios";

export const sendNotification = createAsyncThunk(
  "notification/create",
  async (
    notificationDetails: CreateNotificationInterface,
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.post("notifications", notificationDetails);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error);
      }
    }
  }
);

export const getNotifications = createAsyncThunk(
  "notifications/all",
  async () => {
    try {
      const { data } = await api.get("notifications");
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response && error.response.data) {
        return error.response.data;
      } else {
        return error;
      }
    }
  }
);
