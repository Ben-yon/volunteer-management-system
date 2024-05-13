import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginInterface } from '../../interfaces/AuthInterface';
import { adminLogin } from './authAction';


const initialState: LoginInterface = {
    loading: false,
    // userInfo: {},
    userInfo: {
    id: "",
    firstName: "",
    lastName: "",
    otherNames: "",
    email: "",
    telephone: "",
    active: false,
    token: "",
    role: [],
    },
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(adminLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(adminLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.userInfo = action.payload
            state.success = true;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(adminLogin.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        });
    }
});

export default authSlice.reducer;