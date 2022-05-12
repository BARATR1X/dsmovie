import React from "react";
import ReactDOM from "react-dom/client";
import "./Global.style.css";
import { Home } from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
