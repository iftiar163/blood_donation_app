import mongoose from "mongoose";

// Create User Schema
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      // unique: true,
    },
    phone: {
      type: String,
      trim: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: null,
      trim: true,
    },
    address: {
      type: String,
      default: null,
      trim: true,
    },
    bloodType: {
      type: String,
      default: null,
      trim: true,
    },
    bio: {
      type: String,
      default: null,
      trim: true,
    },
    birthDate: {
      type: String,
      default: null,
      trim: true,
    },
    lastDonation: {
      type: String,
      default: null,
      trim: true,
    },
    gallery: {
      type: [String],
    },
    role: {
      type: String,
      default: "patient",
      enum: ["patient", "donor", "admin"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    accessToken: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// export default
export default mongoose.model("User", userSchema);
