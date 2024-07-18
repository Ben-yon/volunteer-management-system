import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdminRegisterInterface } from "../../interfaces/AuthInterface";
import { createAdmin } from "./adminAction";


const initialState: AdminRegisterInterface = {
    loading: false,
    error: null,
    success: false,
    adminInfo: {
        id: "",
        createdBy: "",
        active: false,
        modifiedDate: "",
        modifiedBy: "",
        volunteer: undefined,
        roles: [
            {
                id: "",
                name: "",
                description: "",
                active: false,
                createdDate: "",
                createdBy: "",
                modifiedDate: "",
                modifiedBy: ""
            }
        ],
        email: "",
        firstName: "",
        lastName: "",
        profilePicture: "",
        contact: ""
    }
}

const adminSlice = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createAdmin.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false;
        })
        .addCase(createAdmin.fulfilled, (state, action: PayloadAction<any>) => {
            state.success = true;
            state.error = null;
            state.adminInfo = action.payload;
            state.loading = false;
        })
        .addCase(createAdmin.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        })
    }

});

export default adminSlice.reducer;