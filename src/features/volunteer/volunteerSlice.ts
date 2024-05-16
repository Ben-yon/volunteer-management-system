import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VolunteerStateInterface } from "../../interfaces/AuthInterface";
import { getVolunteers } from "./volunteerAction";

const initialState: VolunteerStateInterface = {
    loading: false,
    userInfo:  
        [{
            userId: "",
            id: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            daysAvailable: 0,
            contact: "",
            email: "",
            address: "",
            streetAddress: "",
            city: "",
            region: "",
            zipCode: "",
            occupation: "",
            skills: "",
            confirmed: false,
            profilePicture: "",
            interests: "",
            createdDate: "",
            createdBy: "",
            active: false,
            modifiedDate: "",
            modifiedBy: "",
            user: {
                id: "",
                firstName: "",
                lastName: "",
                otherNames: "",
                email: "",
                telephone: "",
                active: false,
                token: "",
                role: []
        }
        }]
    ,
    success: false,
    error: null
}


const volunteerSlice = createSlice({
    name: 'volunteerSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
            builder.addCase(getVolunteers.pending, (state) =>{
                state.error = null;
                state.loading = true;
                state.success = false
            })
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .addCase(getVolunteers.fulfilled, (state, action: PayloadAction<any>) => {
                state.error = null;
                state.userInfo = action.payload;
                state.success = true;
                state.loading = false;

            })
    }
})

export default volunteerSlice.reducer