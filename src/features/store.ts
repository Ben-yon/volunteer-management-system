import { configureStore } from "@reduxjs/toolkit";
import registerVolunteerSlice from "./register/registerVolunteerSlice";
import authSlice from "./auth/authSlice";
import  volunteerSlice  from "./volunteer/volunteerSlice";
import adminRegisterSlice from './register/adminRegisterSlice';
import createProgramSlice from "./programs/createProgramSlice";

export const store = configureStore({
  reducer: {
    registerVolunteerSlice: registerVolunteerSlice,
    authSlice: authSlice,
    volunteerSlice: volunteerSlice,
    adminRegisterSlice: adminRegisterSlice,
    createProgramSlice: createProgramSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
