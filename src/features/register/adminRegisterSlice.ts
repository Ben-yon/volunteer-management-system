/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AdminRegisterInterface } from "../../interfaces/AuthInterface"
import { adminRegister } from "./adminRegisterAction"

const initialState: AdminRegisterInterface = {
    loading: false,
    adminInfo: {
        id: "",
        email: "",
        firstName: "",
        lastName: "",
        active: false,
        profilePicture: "",
        createdBy: "",
        modifiedBy: "",
        modifiedDate: "",
        volunteer: null,
        roles: []
    },
    success: false,
    error: null
}

const adminRegisterSlice = createSlice({
    name: 'adminRegisterSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminRegister.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.success = false
        })
        .addCase(adminRegister.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.adminInfo = action?.payload;
        })
        .addCase(adminRegister.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = false;
            state.error = action?.payload
        })
    }
});

export default adminRegisterSlice.reducer;