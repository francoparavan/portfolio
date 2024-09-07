// Import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// Include your styles into the webpack bundle
import "../styles/index.css";

// Import your own components
import Home from "./component/home.jsx";

// Create a root and render your react application
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Home />);