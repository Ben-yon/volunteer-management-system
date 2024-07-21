/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserById, updateUser } from "./userActions";
import { UpdateAdmin } from "../../interfaces/AuthInterface";


const initialState: UpdateAdmin = {
    loading: false,
    error: null,
    success: false,
    userInfo: {
        contact: "",
        designation: "",
        email: "",
        firstName: "",
        lastName: "",
        profilePicture: ""
    }
}


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false
        })
        .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<any>) => {
            state.error = null;
            state.loading = false;
            state.success = true;
            state.userInfo = action.payload;
        })
        .addCase(fetchUserById.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        })
        .addCase(updateUser.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false;
        })
        .addCase(updateUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.error = null;
            state.loading = false;
            state.success = action.payload
        })
        .addCase(updateUser.rejected, (state) => {
            state.error = null;
            state.loading = false;
            state.success = false
        })
    }
})

export default userSlice.reducer;