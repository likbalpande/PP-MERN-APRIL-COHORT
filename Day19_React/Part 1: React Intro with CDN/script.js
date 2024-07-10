// const li1D = document.createElement("li");
// li1D.style.color = "brown";
// li1D.innerText = "Item 1";
// console.log(li1D);

// const li2 = document.createElement("li");
// li2.innerText = "Item 2";

// const ul = document.createElement("ul");
// ul.className = "un-list";
// ul.appendChild(li1D);
// ul.appendChild(li2);

// const parent = document.getElementById("parent");
// parent.appendChild(ul);

// -------------------------- SAME THING WITH REACT ----------------------

// const li1R = React.createElement("li", { style: { color: "brown" } }, "Item 1");
// console.log(li1R);

// const li2 = React.createElement("li", {}, "Item 2");

// const ul = React.createElement("ul", { className: "un-list" }, [li1R, li2]);

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// root.render(ul);

// ---------------------------- MY OWN REACT OBJECT ---------------------

// const myOwnObject = {
//     $$typeof: Symbol.for("react.element"),
//     type: "ul",
//     ref: null,
//     props: {
//         className: "un-list",
//         children: [
//             {
//                 $$typeof: Symbol.for("react.element"),
//                 type: "li",
//                 ref: null,
//                 props: {
//                     children: "Item 1",
//                     style: {
//                         color: "brown",
//                     },
//                 },
//             },
//             {
//                 $$typeof: Symbol.for("react.element"),
//                 type: "li",
//                 ref: null,
//                 props: {
//                     children: "Item 2",
//                 },
//             },
//         ],
//     },
// };

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// root.render(myOwnObject);

// ----------------------- JSX -------------------------

// const myCustomStyles = {
//     color: "brown",
// };

// const li1 = <li style={myCustomStyles}>Item 1</li>;
// const li2 = <li>Item 2</li>;
// const ul = (
//     <ul className="un-list">
//         {li1 /*js expression */}
//         {li2}
//     </ul>
// );

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// root.render(ul);

// ------------------------------ JSX Nested Way ----------------------

// const myCustomStyles = {
//     color: "brown",
// };

// const ul = (
//     <ul className="un-list">
//         <li style={myCustomStyles}>Item 1</li>
//         <li>Item 2</li>
//     </ul>
// );

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// root.render(ul);

// ---------------------------- Compacted Styles in JSX -------------------------

// const ul = (
//     <ul className="un-list">
//         <li style={{ color: "brown" }}>Item 1</li>
//         <li>Item 2</li>
//     </ul>
// );

// const parent = document.getElementById("parent");
// const root = ReactDOM.createRoot(parent);
// root.render(ul);
