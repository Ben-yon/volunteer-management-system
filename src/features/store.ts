import { configureStore } from "@reduxjs/toolkit";
import registerVolunteerSlice from "./register/registerVolunteerSlice";
import authSlice from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    registerVolunteerSlice: registerVolunteerSlice,
    authSlice: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
