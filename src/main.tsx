import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";
import "./styles/tailwind.css";
import "./styles/slick.css";
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
