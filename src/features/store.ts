import { configureStore } from "@reduxjs/toolkit";
import registerVolunteerSlice from "./register/registerVolunteerSlice";
import authSlice from "./auth/authSlice";
import  volunteerSlice  from "./volunteer/volunteerSlice";
import adminRegisterSlice from './register/adminRegisterSlice';
import createProgramSlice from "./programs/createProgramSlice";
import programsSlice from "./programs/programsSlice";
import userSlice from "./users/userSlice";

export const store = configureStore({
  reducer: {
    registerVolunteerSlice: registerVolunteerSlice,
    authSlice: authSlice,
    volunteerSlice: volunteerSlice,
    adminRegisterSlice: adminRegisterSlice,
    createProgramSlice: createProgramSlice,
    programsSlice: programsSlice,
    userSlice: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
