import { Layouts } from "../components/Layouts/Layouts";
import DonorRegister from "../pages/Auth/DonorRegister";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import SecurePublicRoute from "./SecurePublicRoute";

// Create Public Route
export const publicRouter = [
  {
    element: <SecurePublicRoute />,
    children: [
      {
        element: <Layouts />,
        children: [
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          },
          {
            path: "/donor-register",
            element: <DonorRegister />,
          },
        ],
      },
    ],
  },
];
