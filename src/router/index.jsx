import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../layouts/root-layout";
import { HomePage } from "../pages/home-page";
import { LoginPage } from "../pages/login-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
		],
	},
]);

export const AppRouter = () => {
	return <RouterProvider router={router} />;
};
