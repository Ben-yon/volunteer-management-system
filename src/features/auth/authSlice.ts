import { LoginInterface } from './../../interfaces/AuthInterface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
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
    success: false,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token');
            localStorage.removeItem('userInfo')
            state.loading = false;
            state.isAuthenticated = false;
            state.success = false;
            state.userInfo = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(adminLogin.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(adminLogin.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.userInfo = action.payload
            state.success = true;
            state.isAuthenticated = true;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(adminLogin.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
            state.isAuthenticated = false;
        });
    }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;