import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegsiterStateInterface } from "../../interfaces/AuthInterface";
import { registerVolunteer } from "./authAction";


const initialState: RegsiterStateInterface = {
    loading: false,
    // userInfo: {},
    userInfo: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        daysAvailable: "",
        contact: "",
        email: "",
        address: "",
        streetAddress: "",
        city: "",
        region: "",
        zipCode: "",
        occupation: "",
        skills: "",
        interests: "",
        userId: "",
        id: ""
    },
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(registerVolunteer.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerVolunteer.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload
            state.success = true;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(registerVolunteer.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });
    }
})


export default authSlice.reducer;