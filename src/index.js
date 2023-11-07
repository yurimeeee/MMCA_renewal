import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(process.env.PUBLIC_URL);

const publicc = "https://yurimeeee.github.io/MMCA_renewal";
console.log(publicc);
root.render(
  // <BrowserRouter basename={process.env.PUBLIC_URL}>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>
);
