import { Layouts } from "../components/Layouts/Layouts";
import PasswordChange from "../pages/Auth/PasswordChange";
import ProfileSettings from "../pages/Auth/ProfileSettings";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardElements from "../pages/Dashboard/DashboardElements";
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
						children: [
							{
								path: "profile-settings",
								element: <ProfileSettings />,
							},
							{
								path: "change-password",
								element: <PasswordChange />,
							},
							{
								path: "dashboard-ui",
								element: <DashboardElements />,
							},
						],
					},
				],
			},
		],
	},
];
