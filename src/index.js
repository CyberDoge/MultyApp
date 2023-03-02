import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./firebase";
import App from "./App";
import "core-js/full";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
