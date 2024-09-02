/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTasks } from "./schehuleActions";
import {  GetTasksInitialStateInterface } from "../../interfaces/TaskScheduleInterface";

const initialState: GetTasksInitialStateInterface = {
    loading: false,
    success: false,
    error: null,
    tasks : [{
        id: "",
        name: "",
        description: "",
        notes: "",
        createdDate: "",
        createdBy: "",
        modifiedDate: "",
        modifiedBy: ""
    }]
}

const getTasksSlice = createSlice({
    name: "getTasksSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTasks.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(getTasks.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = true;
            state.tasks = action.payload;
        })
        .addCase(getTasks.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        })
    }
});
export default getTasksSlice.reducer;