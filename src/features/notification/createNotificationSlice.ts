/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sendNotification } from "./notificationAction";


const initialState = {
    loading: false,
    isNotify: false,
    error: null,
    notifications: null
}

const createNotificationSlice = createSlice({
    name: "createNotificationSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendNotification.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.notifications = action.payload;
            state.isNotify = true;
        })
        .addCase(sendNotification.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.isNotify = false;
        })
        .addCase(sendNotification.pending, (state) => {
            state.loading = true;
            state.isNotify = false;
            state.error = null;
        })
    }
});

export default createNotificationSlice.reducer;