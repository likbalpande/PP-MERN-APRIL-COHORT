import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {};

    return (
        <div>
            <Navbar />
            <input />
            <br />
            <input />
            <br />
            <button onClick={handleSubmit}>Login</button>
            <Link to="/signup">GO to Sign up</Link>
        </div>
    );
};

export default Login;
