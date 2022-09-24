import React from "react";
import { createRoot } from "react-dom/client";
import { HolaComponent } from "./holamundoComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>Módulo 3 - Webpack</h1>
    <HolaComponent />
  </div>
);
