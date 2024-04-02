import { createSlice } from "@reduxjs/toolkit";
import { AuthStateInterface } from "../../interfaces/AuthInterface";


const initialState: AuthStateInterface = {
    loading: false,
    userInfo: {},
    userToken: null,
    error: null,
    success: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {}
})