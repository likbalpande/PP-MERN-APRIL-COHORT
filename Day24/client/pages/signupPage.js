import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const res = await fetch("http://localhost:1900/api/v1/auth/signup", {
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
                navigate("/login");
            } else {
                alert("Error occurred: " + data.message);
            }
        } catch (err) {
            alert("Major error occurred: " + err.message);
        }
    };

    return (
        <div>
            <h4>Signup Page</h4>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Sign up</button>
            <Link to="/login">Go to Login Page</Link>
        </div>
    );
};

export default SignupPage;
