import { useState } from "react";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
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
    };

    return (
        <div>
            <h4>Login Page</h4>
            <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default LoginPage;
