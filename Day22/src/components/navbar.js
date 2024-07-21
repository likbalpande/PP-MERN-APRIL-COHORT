import { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../context/appContext";

const Navbar = () => {
    const { text, handleChange, cart } = useContext(AppContext);

    return (
        <nav>
            <input value={text} onChange={handleChange} />
            <br />
            <Link to="/search">Search</Link>
            <br />
            <Link to="/">Home</Link>
            <br />
            <p title={JSON.stringify(cart)}>Cart</p>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up</Link>
        </nav>
    );
};

export default Navbar;
