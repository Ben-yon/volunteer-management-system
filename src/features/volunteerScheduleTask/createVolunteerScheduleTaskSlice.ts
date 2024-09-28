/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createVolunteerScheduleTask } from "./volunteerScheduleTaskAction";

const initialState = {
    loading: false,
    isVolunteerScheduledTask: false,
    volunteerScheduleTask: {},
    error: null,
};

const createVolunteerScheduleTaskSlice = createSlice({
    name: "createVolunteerScheduleTaskSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createVolunteerScheduleTask.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.isVolunteerScheduledTask = false;
        })
        .addCase(createVolunteerScheduleTask.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.isVolunteerScheduledTask = true;
            state.volunteerScheduleTask = action.payload;
        })
        .addCase(createVolunteerScheduleTask.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.isVolunteerScheduledTask = false;
        })
    }
});

export default createVolunteerScheduleTaskSlice.reducer