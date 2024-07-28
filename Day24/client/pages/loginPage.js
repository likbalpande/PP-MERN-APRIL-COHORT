import { useContext, useState } from "react";
import AuthContext from "../context/appContext";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { handleAppLogin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        try {
            const res = await fetch("http://localhost:1900/api/v1/auth/login", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    "content-type": "application/json",
                },
            });
            const data = await res.json();
            if (data.status === "success") {
                alert(data.message);
                handleAppLogin({ email: data.data.user.email, token: data.data.token });
            } else {
                alert("Error occurred: " + data.message);
            }
        } catch (err) {
            alert(err.message);
        }
    };

    return (
        <div>
            <h4>Login Page</h4>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
            <Link to="/signup">Go to Signup Page</Link>
        </div>
    );
};

export default LoginPage;
