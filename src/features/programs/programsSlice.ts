/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { createProgram, program, programs } from "./programsActions";



const initialState = {
    loading: false,
    success: false,
    error: null,
    programInfo: {}
}


const programSlice = createSlice({
    name: 'programSlice',
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
        .addCase(program.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(program.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = true;
            state.programInfo = action.payload;
            state.error = null;
        })
        .addCase(program.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        })
        .addCase(programs.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(programs.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = true;
            state.programInfo = action.payload;
            state.error = null;
        })
        .addCase(programs.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        })
        
    }
});

export default programSlice.reducer;