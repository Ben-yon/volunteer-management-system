/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users } from "./userAction";
import { UserPayload } from "../../interfaces/AuthInterface";


const initialState = {
    loading: false,
    error: null,
    success: false,
    userInfo: Array<UserPayload>
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(users.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false
        })
        .addCase(users.fulfilled, (state, action: PayloadAction<any>) => {
            state.error = null;
            state.loading = false;
            state.success = true;
            state.userInfo = action.payload;
        })
        .addCase(users.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        })
    }
})

export default userSlice.reducer;