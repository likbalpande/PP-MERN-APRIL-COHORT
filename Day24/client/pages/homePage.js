import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/appContext";

const HomePage = () => {
    const { isLoggedIn, handleAppLogout, email, token } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignupRedirect = () => {
        navigate("/signup");
    };

    useEffect(async () => {
        const res = await fetch(`http://localhost:1900/api/v1/user/info`, {
            method: "GET",
            headers: {
                authorization: token,
            },
        });
        const data = await res.json();
        alert(data.status);
    }, []);
    return (
        <>
            <nav style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "24px" }}>
                {isLoggedIn ? (
                    <>
                        <h1>Welcome {email}</h1>
                        <button onClick={handleAppLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <button onClick={handleSignupRedirect}>Signup</button>
                    </>
                )}
            </nav>
            <div style={{ margin: "24px auto", width: "400px", backgroundColor: "yellow" }}>
                <h1>Website coming soon...</h1>
            </div>
        </>
    );
};

export default HomePage;
