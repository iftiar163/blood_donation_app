import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

// Register Patient api Slice
export const registerPatient = createAsyncThunk(
	"auth/registerPatient",
	async (data) => {
		try {
			const response = await API.post(`/api/v1/auth/register`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Register Donor Slice
export const registerDonor = createAsyncThunk(
	"auth/registerDonor",
	async (data) => {
		try {
			const response = await API.post(`/api/v1/auth/register`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Register Donor Slice
export const userLogin = createAsyncThunk("auth/userLogin", async (data) => {
	try {
		const response = await API.post(`/api/v1/auth/login`, data);
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// Logout User Slice
export const userLogout = createAsyncThunk("auth/userLogout", async () => {
	try {
		const response = await API.post(`/api/v1/auth/logout`);
		return response.data;
	} catch (error) {
		throw new Error(error.response.data.message);
	}
});

// Get Loggedin User Slice
export const getLoggedInUser = createAsyncThunk(
	"auth/getLoggedInUser",
	async () => {
		try {
			const response = await API.get(`/api/v1/auth/me`);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Change Password API
export const changeAuthPassword = createAsyncThunk(
	"auth/changeAuthPassword",
	async (data) => {
		try {
			const response = await API.post(`/api/v1/auth/change-password`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Update User Photo API
export const updateUserPhoto = createAsyncThunk(
	"auth/updateUserPhoto",
	async (data) => {
		try {
			const response = await API.post(`/api/v1/auth/profile-photo`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);

// Update User Profile data
export const updateProfileData = createAsyncThunk(
	"auth/updateProfileData",
	async (data) => {
		try {
			const response = await API.post(`/api/v1/auth/profile-update`, data);
			return response.data;
		} catch (error) {
			throw new Error(error.response.data.message);
		}
	}
);
