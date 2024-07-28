import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./appRouter";
import AuthContext from "./context/appContext";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });
    const [email, setEmail] = useState(() => {
        return localStorage.getItem("email");
    });
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token");
    });

    const handleAppLogin = ({ email, token }) => {
        setIsLoggedIn(true);
        setEmail(email);
        setToken(token);
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("email", email);
        localStorage.setItem("token", token);
    };

    const handleAppLogout = () => {
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", false);
        localStorage.setItem("email", "");
        localStorage.setItem("token", "");
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleAppLogin, handleAppLogout, email, token }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);
// root.render(App());
root.render(<App />);
