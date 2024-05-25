/* eslint-disable @typescript-eslint/no-explicit-any */
import { createProgram } from "./createProgramAction";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    success: false,
    error: null,
    programInfo: {}
}


const createProgramSlice = createSlice({
    name: 'createProgramSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createProgram.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null
        })
        .addCase(createProgram.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = null;
            state.success = true;
            state.programInfo = action.payload;
        })
        .addCase(createProgram.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    }
    });
    
    export default createProgramSlice.reducer;
