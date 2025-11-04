import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";
import "./styles/tailwind.css";
import "./styles/slick.css";

// 👉 Tambahkan ini agar i18n aktif
import "./i18n/i18n";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
