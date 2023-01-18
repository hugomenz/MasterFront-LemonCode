import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScene, ListScene, DetailScene } from "@/scenes";
import { switchRoutes } from "./routes";
import { MyProvider } from "@/common/context";

export const App = () => {
  const [org, setOrg] = React.useState("");

  return (
    <MyProvider initialOrg="lemoncode">
      <Router>
        <Routes>
          <Route path={switchRoutes.root} element={<LoginScene />} />
          <Route path={switchRoutes.list} element={<ListScene />} />
          <Route path={switchRoutes.detail} element={<DetailScene />} />
        </Routes>
      </Router>
    </MyProvider>
  );
};
