import { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/appContext";

const SearchPage = () => {
    const [data, setData] = useState({ recipes: [] });
    const { text, cart, setCart } = useContext(AppContext);

    console.log("\n✅ : cart:", cart);

    const navigate = useNavigate();

    const getData = async () => {
        console.log("------ API called ------");
        const res = await fetch(`https://dummyjson.com/recipes/search?q=${text}`);
        let temp = await res.json();
        setData(temp);
    };

    useEffect(() => {
        getData();
    }, [text]);

    console.log("--- Rendered ----");

    const handleMore = (id) => {
        alert("redirecting...");
        navigate(`/view/${id}`);
    };

    const addItem = (elem) => {
        setCart({ ...cart, [elem.id]: elem });
    };

    return (
        <div>
            <Navbar />
            <h1>Search Page</h1>
            <div
                style={{
                    width: "400px",
                    backgroundColor: "lime",
                    margin: "24px auto",
                    padding: "24px",
                }}
            >
                {data.recipes.map((elem) => {
                    return (
                        <div
                            style={{
                                padding: "16px",
                                backgroundColor: "lightgrey",
                                margin: "4px",
                            }}
                            key={elem.id}
                        >
                            <h3>{elem.name}</h3>
                            <img src={elem.image} height="100" />
                            <p>Cuisine: {elem.cuisine}</p>
                            <button onClick={() => addItem(elem)}>++</button>
                            <button onClick={() => removeItem(elem)}>--</button>
                            <br />
                            <Link to={`/view/${elem.id}`}>View More</Link>
                            <br />
                            <button onClick={() => handleMore(elem.id)}>View More</button>
                            <br />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SearchPage;
