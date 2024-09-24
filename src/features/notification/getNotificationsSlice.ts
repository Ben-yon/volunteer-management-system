/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getNotifications } from "./notificationAction";


const initialState = {
    loading: false,
    isNotify: false,
    error: null,
    notifications: null
}

const getNotificationsSlice = createSlice({
    name: "getNotificationsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotifications.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.notifications = action.payload;
            state.isNotify = true;
        })
        .addCase(getNotifications.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.isNotify = false;
        })
        .addCase(getNotifications.pending, (state) => {
            state.loading = true;
            state.isNotify = false;
            state.error = null;
        })
    }
});

export default getNotificationsSlice.reducer;