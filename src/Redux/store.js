import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./reducers";

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
  },
});
