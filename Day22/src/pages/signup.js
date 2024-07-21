import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

const Signup = () => {
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
            <button onClick={handleSubmit}>Sign up</button>
            <Link to="/login">GO to Login</Link>
        </div>
    );
};

export default Signup;
