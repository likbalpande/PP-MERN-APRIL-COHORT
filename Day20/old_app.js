// import React from "react";
// import ReactDOM from "react-dom/client";

// // const Heading = React.createElement("h1", {}, "Hello from React!!!"); // PURE Way
// // JSX --> R.Ce --> this is a function which returns an Object

// // React Element
// const Heading = <h1>Hello from React!</h1>; // JSX

// // React Component
// // Always write the component name in Pascal Case
// const GetHeading = () => {
//     // ...more code (some logic)
//     return <h1>Hello from React!!!!</h1>;
// };

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// // passing an element to root
// // root.render(Heading);

// // passing a component to root
// // Old way to call a component
// // root.render(GetHeading());

// // JSX way to call a component
// root.render(<GetHeading />);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const Navbar = () => {
    return <nav>Navbar</nav>;
};

const ProductAdCard = (props) => {
    const { title, products } = props;
    return (
        <div className="product-ad-card">
            <h4>{title}</h4>
            <div className="product-item-parent-container">
                {products.map((elem) => {
                    return (
                        <div key={elem.title} className="product-item">
                            <img src={elem.imgSrc} />
                            <h5>{elem.title}</h5>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const dummy = [
    {
        title: "Revamp your home in style",
        products: [
            {
                title: "Cushion Covers & Bedsheets",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_furnishings_2._SY232_CB555629502_.jpg",
            },
            {
                title: "Figurine, vases and more",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_decor_1._SY232_CB555629502_.jpg",
            },
            {
                title: "Home Storage",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_storage_1._SY232_CB555629502_.jpg",
            },
            {
                title: "Lighting Solutions",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/2x/372x232_Home_lighting_2_-_Copy._SY232_CB555629502_.jpg",
            },
        ],
    },
    {
        title: "Appliances for your home",
        products: [
            {
                title: "Air Conditioners",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
            },
            {
                title: "Refrigerators",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            },
            {
                title: "Microwaves",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
            },
            {
                title: "Washing Machines",
                imgSrc: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
    {
        title: "Starting ₹149 ",
        products: [],
    },
    {
        title: "Automotive essentials",
        products: [],
    },
];

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>Image</h1>
            <div className="product-ad-card-container">
                {/* you can write any javascript expression here */}
                {/* {alert("hello")} This works*/}
                {/* {const a = 1} This doesn't work*/}
                {dummy.map((elem, idx) => {
                    // console.log(elem, idx);
                    // return ProductAdCard({
                    //   title: elem.title,
                    //   idx: idx,
                    // });
                    return <ProductAdCard key={elem.title} title={elem.title} idx={idx} products={elem.products} />;
                })}
            </div>
        </div>
    );
};

const parent = document.getElementById("parent");
const root = ReactDOM.createRoot(parent);
root.render(<App />);
