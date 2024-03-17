import { createSlice } from "@reduxjs/toolkit";
import { registerDonor, registerPatient } from "./authApiSlice";

// Create Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("loginUser")
      ? JSON.parse(localStorage.getItem("loginUser"))
      : null,
    message: null,
    error: null,
    loader: false,
  },
  reducers: {
    alertMesasgeReset: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPatient.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(registerPatient.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(registerPatient.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      })
      .addCase(registerDonor.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(registerDonor.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })
      .addCase(registerDonor.fulfilled, (state, action) => {
        state.loader = false;
        state.message = action.payload.message;
      });
  },
});

// Selectors
export const authSelector = (state) => state.auth;

// Actions
export const { alertMesasgeReset } = authSlice.actions;

// Reducer
export default authSlice.reducer;
