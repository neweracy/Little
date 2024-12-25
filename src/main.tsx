import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./font/Bebas_Neue/BebasNeue-Regular.ttf";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
