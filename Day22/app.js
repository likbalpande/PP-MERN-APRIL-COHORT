import "./styles.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/searchPage";
import ViewPage from "./src/pages/viewPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RandomPage from "./src/pages/randomPage";
import AppContext from "./context/appContext";
import Login from "./src/pages/login";
import Signup from "./src/pages/signup";

const App = () => {
    const [text, setText] = useState();
    const [cart, setCart] = useState();

    const handleChange = (e) => {
        setText(e.target.value);
    };
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/search",
            element: <SearchPage />,
        },
        {
            path: "/view/:recipeId",
            element: <ViewPage />,
        },
        {
            path: "/random/:oneID/:hello/constant/me",
            element: <RandomPage />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
    ]);

    const contextValues = {
        text,
        handleChange,
        cart,
        setCart,
    };

    return (
        <AppContext.Provider value={contextValues}>
            <RouterProvider router={appRouter} />
        </AppContext.Provider>
    );
};

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
