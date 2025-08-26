import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light", 
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLightMode: (state) => {
      state.mode = "light";
    },
    setDarkMode: (state) => {
      state.mode = "dark";
    },
  },
});

export const { toggleTheme, setLightMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
