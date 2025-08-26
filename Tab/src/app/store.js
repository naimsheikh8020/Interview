import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Features/themeSlice";
import profileReducer from "../Features/profileSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    profile: profileReducer,
  },
});
