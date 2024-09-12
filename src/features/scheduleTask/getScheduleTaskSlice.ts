/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GetScheduledTasksInitialStateInterface } from "../../interfaces/TaskScheduleInterface";
import { getScheduledTasks } from "./scheduleTaskActions";


const initialState: GetScheduledTasksInitialStateInterface = {
    loading: false,
    success: false,
    error: null,
    scheduledTasks: [{
        id: "",
        taskId: "",
        startDateTime: "",
        endDateTime: "",
        status: "",
        notes: "",
        createdDate: "",
        createdBy: "",
        modifiedDate: "",
        modifiedBy: ""
    }]
}

const getScheduledTaskSlice = createSlice({
    name: "getScheduledTaskSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getScheduledTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        })
        .addCase(getScheduledTasks.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.scheduledTasks = action.payload;
            state.success = true;
        })
        .addCase(getScheduledTasks.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    }
});
export default getScheduledTaskSlice.reducer;