/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { program, allPrograms } from "./programsActions";
import { ProgramsPayloadInterface } from "../../interfaces/ProgramsInterface";



const initialState = {
    loading: false,
    success: false,
    error: null,
    programInfo: Array<ProgramsPayloadInterface>,
}


const programSlice = createSlice({
    name: 'programSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(program.pending, (state) => {
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
        .addCase(allPrograms.pending, (state) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(allPrograms.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = true;
            state.programInfo = action.payload;
            state.error = null;
        })
        .addCase(allPrograms.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload;
        })
        
    }
});

export default programSlice.reducer;