import { configureStore } from "@reduxjs/toolkit";
import registerVolunteerSlice from "./register/registerVolunteerSlice";
import authSlice from "./auth/authSlice";
import  volunteerSlice  from "./volunteer/volunteerSlice";
import adminRegisterSlice from './register/adminRegisterSlice';
import createProgramSlice from "./programs/createProgramSlice";
import programsSlice from "./programs/programsSlice";
import usersSlice from "./users/usersSlice";
import userSlice from "./users/userSlice";
import adminSlice from "./admins/adminSlice";
import fetchAdminsSlice from "./admins/fetchAdminsSlice";
import getMessagesSlice from "./messaging/getMessagesSlice";
import postMessagesSlice from "./messaging/postMessagesSlice";
import dashboardSlice from "./dashboard/dashboardSlice";
import createTaskSlice from "./task/createTaskSlice";
import getTasksSlice from "./task/getTasksSlice";

export const store = configureStore({
  reducer: {
    registerVolunteerSlice: registerVolunteerSlice,
    authSlice: authSlice,
    volunteerSlice: volunteerSlice,
    adminRegisterSlice: adminRegisterSlice,
    createProgramSlice: createProgramSlice,
    programsSlice: programsSlice,
    usersSlice: usersSlice,
    userSlice: userSlice,
    adminSlice: adminSlice,
    fetchAdminsSlice: fetchAdminsSlice,
    getMessagesSlice: getMessagesSlice,
    postMessageSlice: postMessagesSlice,
    dashboardSlice: dashboardSlice,
    createTaskSlice: createTaskSlice,
    getTasksSlice: getTasksSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

