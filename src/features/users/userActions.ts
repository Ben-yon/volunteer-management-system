import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/axios";
import axios from "axios";
import { UpdateUserInfo } from "../../interfaces/UpdateUserInfoInterface";

export const users = createAsyncThunk("users", async () => {
  try {
    const { data } = await api.get("/Users");
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

export const fetchUserById = createAsyncThunk(
  "user/:id",
  async (id: string) => {
    try {
      const { data } = await api.get(`/Users/${id}`);

      if (!data) {
        throw new Error("User not found");
      }

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
  }
);

export const updateUser = createAsyncThunk(
  "user/update",
  async ({
    id,
    firstName,
    lastName,
    email,
    contact,
    profilePicture,
    designation,
    roles
  }: UpdateUserInfo) => {
    try {
      const response = api.patch(`Users/${id}/user-information`, {
        id,
        firstName,
        lastName,
        email,
        profilePicture,
        contact,
        designation,
        roles
      });

      if (!response) {
        throw new Error("Update was not suucessful");
      }
      return (await response)?.data;
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
  }
);
