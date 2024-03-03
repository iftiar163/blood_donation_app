import { createSlice } from "@reduxjs/toolkit";

// Create Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {},
});

// Selectors

// Actions
export const {} = authSlice.actions;

// Reducer
export default authSlice.reducer;
