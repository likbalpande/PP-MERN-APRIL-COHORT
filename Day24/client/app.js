import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <div>Hello world!</div>,
        },
        {
            path: "/signup",
            element: <SignupPage />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
    ]);
    return <RouterProvider router={router}></RouterProvider>;
};

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);
// root.render(App());
root.render(<App />);
