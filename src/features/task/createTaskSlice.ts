/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTask } from "./taskActions";
import { CreateTaskIntialStateInterface } from "../../interfaces/TaskScheduleInterface";

const initialState: CreateTaskIntialStateInterface = {
    loading: false,
    isTaskCreated: false,
    error: null,
    task : {
        id: "",
        name: "",
        description: "",
        notes: "",
        createdDate: "",
        createdBy: "",
        modifiedDate: "",
        modifiedBy: ""
    }
}

const createTasksSlice = createSlice({
    name: "CreateTasksSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createTask.pending, (state) => {
            state.loading = true;
            state.isTaskCreated = false;
            state.error = null;
        })
        .addCase(createTask.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.isTaskCreated = true;
            state.task = action.payload;
        })
        .addCase(createTask.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.isTaskCreated = false;
            state.error = action.payload;
        })
    }
});
export default createTasksSlice.reducer;