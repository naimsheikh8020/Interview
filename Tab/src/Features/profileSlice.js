import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: "",
  profile: "",
  techStack: "",
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      const { name, age, profile, techStack } = action.payload;
      state.name = name;
      state.age = age;
      state.profile = profile;
      state.techStack = techStack;
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
