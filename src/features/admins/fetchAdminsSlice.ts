import { FetchAdminsInterface } from '../../interfaces/AuthInterface';
import { fetchAdmins } from './adminAction';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FetchAdminsInterface = {
    loading: false,
    error: null,
    success: false,
    adminsInfo: [{
        id: "",
        createdBy: "",
        active: false,
        contact: "",
        modifiedDate: "",
        modifiedBy: "",
        volunteer: undefined,
        roles: [],
        email: "",
        firstName: "",
        lastName: "",
        profilePicture: ""
    }]
}

const fetchAdminsSlice = createSlice({
    name: 'fetchAdminsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAdmins.pending, (state) => {
            state.error = null;
            state.loading = true;
            state.success = false;
        })
        .addCase(fetchAdmins.fulfilled, (state, action: PayloadAction<any>) => {
            state.success = true;
            state.error = null;
            state.adminsInfo = action.payload;
            state.loading = false;
        })
        .addCase(fetchAdmins.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        })
    }
    
});
export default fetchAdminsSlice.reducer;