import { Layouts } from "../components/Layouts/Layouts";
import Dashboard from "../pages/Dashboard/Dashboard";
import SecurePrivateRoute from "./SecurePrivateRoute";

// Create Private Router
export const privateRouter = [
  {
    element: <SecurePrivateRoute />,
    children: [
      {
        element: <Layouts />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
];
