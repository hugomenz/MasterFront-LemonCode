import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScene, CatScene, DogScene } from "@/scenes";

import { switchRoutes } from "./routes";
import { CheckOutScene } from "../../scenes/checkout.scene";

export const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginScene />} />
        <Route path={switchRoutes.cat} element={<CatScene />} />
        <Route path={switchRoutes.dog} element={<DogScene />} />
        <Route path={switchRoutes.checkout} element={<CheckOutScene />} />
      </Routes>
    </Router>
  );
};
