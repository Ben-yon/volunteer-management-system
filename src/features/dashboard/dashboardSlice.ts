/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  activeVolunteers,
  newVolunteerSincePreviousMonth,
  numberOfAdminsSincePreviousMonth,
  totalNumberOfVolunteers,
  getUpcomingPrograms,
  usersAvailableOnline,
  volunteersNotMoreThanAWeek,
  volunteersNotMorethanTwoWeeks,
} from "./dashboardAction";

const initialState = {
  loading: false,
  success: false,
  error: null,
  volunteersAWeekOld: [],
  volunteersTwoWeeksOld: [],
  activeVolunteers: [],
  usersAvailableOnline: [],
  numberOfAdminsPreviousMonth: null,
  newVolunteersPreviousMonth: [],
  totalNumberVolunteers: null,
  upcomingPrograms: []
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(volunteersNotMoreThanAWeek.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.volunteersAWeekOld = action.payload
      state.success = true;
    })
    .addCase(volunteersNotMoreThanAWeek.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false
    })
    .addCase(volunteersNotMoreThanAWeek.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
    })
    .addCase(volunteersNotMorethanTwoWeeks.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null
    })
    .addCase(volunteersNotMorethanTwoWeeks.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.volunteersTwoWeeksOld = action.payload;
        state.success = true;
    })
    .addCase(activeVolunteers.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null
    })
    .addCase(activeVolunteers.fulfilled, ( state, action: PayloadAction<any> ) => {
        state.loading = false;
        state.activeVolunteers = action.payload;
        state.success = true;
    })
    .addCase( activeVolunteers.rejected, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload
    })
    .addCase(totalNumberOfVolunteers.pending, ( state ) => {
        state.loading = true;
        state.success = false;
        state.error = null;
    })
    .addCase(totalNumberOfVolunteers.fulfilled, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.totalNumberVolunteers = action.payload
    })
    .addCase(totalNumberOfVolunteers.rejected, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload
    })
    .addCase(usersAvailableOnline.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null
    })
    .addCase( usersAvailableOnline.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.usersAvailableOnline = action.payload;
    })
    .addCase(usersAvailableOnline.rejected, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
    })
    .addCase(getUpcomingPrograms.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null
    })
    .addCase( getUpcomingPrograms.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.upcomingPrograms = action.payload;
    })
    .addCase(getUpcomingPrograms.rejected, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
    })
    .addCase(numberOfAdminsSincePreviousMonth.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null
    })
    .addCase( numberOfAdminsSincePreviousMonth.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.success = true;
        state.numberOfAdminsPreviousMonth = action.payload;
    })
    .addCase(numberOfAdminsSincePreviousMonth.rejected, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
    })
    .addCase(newVolunteerSincePreviousMonth.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null
    })
    .addCase( newVolunteerSincePreviousMonth.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;

        state.success = true;
        state.newVolunteersPreviousMonth = action.payload;
    })
    .addCase(newVolunteerSincePreviousMonth.rejected, ( state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
    })
  },
});

export default dashboardSlice.reducer;
