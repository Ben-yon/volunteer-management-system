/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CreateScheduleTaskInitialStateInterface } from "../../interfaces/TaskScheduleInterface";
import { scheduleTask } from "./scheduleTaskActions";


const initialState: CreateScheduleTaskInitialStateInterface = {
    loading: false,
    error: null,
    success: false,
    scheduledTask: {
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
    }
}

const createScheduleTaskSlice = createSlice({
    name: "scheduleTaskSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(scheduleTask.pending, (state) => {
            state.error = null;
            state.loading = true;
            state. success = false
        })
        .addCase(scheduleTask.fulfilled, (state, action: PayloadAction<any>) => {
            state.error = null; 
            state.scheduledTask = action.payload;
            state.success = true;
            state.loading = false;
        })
        .addCase(scheduleTask.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        })
    }

});

export default createScheduleTaskSlice.reducer;