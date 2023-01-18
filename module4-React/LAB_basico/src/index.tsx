import React from "react";

import { App } from "./core/router/app-router";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
