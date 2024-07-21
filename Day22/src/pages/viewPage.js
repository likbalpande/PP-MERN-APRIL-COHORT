import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const ViewPage = () => {
    const [data, setData] = useState({});
    let { recipeId } = useParams();

    const getInfo = async () => {
        const res = await fetch(`https://dummyjson.com/recipes/${recipeId}`);
        const temp = await res.json();
        setData(temp);
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>View Page</h1>
            <div style={{ backgroundColor: "yellow", width: "300px", margin: "24px auto" }}>
                <h3>Name: {data.name}</h3>
                <img width="250px" src={data.image} alt="product-image" />
            </div>
        </div>
    );
};

export default ViewPage;
