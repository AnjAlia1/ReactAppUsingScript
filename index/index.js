import React from "react"
import ReactDOM  from "react-dom"

// const Header = () =>(
// <h1>Hi</h1>
// );
       

// ReactDOM.render(<h1>Hi</h1>,document.getElementById("root"));
const ReactRoot = ReactDOM.createRoot(document.getElementById("root"));
console.log("root",document.getElementById("root"));
ReactRoot.render(<h1>Hi</h1>);
