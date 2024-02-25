import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

// Create Store
const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

// 27:11 min

// Export default
export default store;
