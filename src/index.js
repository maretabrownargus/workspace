import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";
import Weather from "./Weather";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <h1> Weather App </h1>
    <p>
    <a href "https://github.com/maretabrownargus/workspace.git"> Open-source code by Mareta Brown </a>
    </p>
    <Weather />
  </StrictMode>
);
