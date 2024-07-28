import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./context/appContext";

const AppRouter = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
            path: "/",
            element: isLoggedIn ? <HomePage /> : <Navigate to="/login" />,
        },
        {
            path: "/signup",
            element: isLoggedIn ? <Navigate to="/" /> : <SignupPage />,
        },
        {
            path: "/login",
            element: isLoggedIn ? <Navigate to="/" /> : <LoginPage />,
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
};

export default AppRouter;
