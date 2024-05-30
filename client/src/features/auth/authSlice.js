import { createSlice } from "@reduxjs/toolkit";
import {
	changeAuthPassword,
	getLoggedInUser,
	registerDonor,
	registerPatient,
	updateUserPhoto,
	userLogin,
	userLogout,
} from "./authApiSlice";

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
			})
			.addCase(userLogin.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(userLogin.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(userLogin.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
				state.user = action.payload.user;
				localStorage.setItem("loginUser", JSON.stringify(action.payload.user));
			})
			.addCase(userLogout.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(userLogout.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(userLogout.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
				state.user = null;
				localStorage.removeItem("loginUser");
			})
			.addCase(getLoggedInUser.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(getLoggedInUser.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
				state.user = null;
				localStorage.removeItem("loginUser");
			})
			.addCase(getLoggedInUser.fulfilled, (state, action) => {
				state.loader = false;
				state.user = action.payload.auth;
				localStorage.setItem("loginUser", JSON.stringify(action.payload.auth));
			})
			.addCase(changeAuthPassword.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(changeAuthPassword.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(changeAuthPassword.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
			})
			.addCase(updateUserPhoto.pending, (state, action) => {
				state.loader = true;
			})
			.addCase(updateUserPhoto.rejected, (state, action) => {
				state.loader = false;
				state.error = action.error.message;
			})
			.addCase(updateUserPhoto.fulfilled, (state, action) => {
				state.loader = false;
				state.message = action.payload.message;
				state.user = action.payload.user;
			});
	},
});

// Selectors
export const authSelector = (state) => state.auth;

// Actions
export const { alertMesasgeReset } = authSlice.actions;

// Reducer
export default authSlice.reducer;
