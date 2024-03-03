import { Layouts } from "../components/Layouts/Layouts";
import DonorRegister from "../pages/Auth/DonorRegister";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Dashboard from "../pages/Dashboard/Dashboard";

// Create Public Route
export const publicRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
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
];
