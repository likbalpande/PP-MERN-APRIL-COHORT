import { useParams, useSearchParams } from "react-router-dom";
import Navbar from "../components/navbar";

const RandomPage = () => {
    const res = useParams();
    // let [searchParams, setSearchParams] = useSearchParams();
    return (
        <div>
            <Navbar />
            <h1>{JSON.stringify(res)}</h1>
            {/* <h1>{JSON.stringify(searchParams)}</h1> */}
        </div>
    );
};

export default RandomPage;
