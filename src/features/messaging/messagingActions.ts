import { createAsyncThunk } from "@reduxjs/toolkit";
import { PostMessagesPayload } from "../../interfaces/MessagingInterface";
import api from "../../utils/axios";
import axios from "axios";

export const postMessages = createAsyncThunk(
  "messaging/send",
  async (messageDetails: PostMessagesPayload, { rejectWithValue }) => {
    try {
      const { data } = await api.post("messages", messageDetails);
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

export const getMessages = createAsyncThunk("messaging/retrieve", async () => {
  try {
    const { data } = await api.get("messages");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return error.response.data;
    } else {
      return error;
    }
  }
});
