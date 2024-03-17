import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Register Patient api Slice
export const registerPatient = createAsyncThunk(
  "auth/registerPatient",
  async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/register`,
        data,
        {
          withCredentials: true,
        }
      );
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
      const response = await axios.post(
        `http://localhost:5050/api/v1/auth/register`,
        data,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
