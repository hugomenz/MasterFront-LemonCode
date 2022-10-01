import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { CatPage } from "./cat";
import { DogPage } from "./dog";
import { MainPage } from "./main";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/dog" element={<DogPage />} />
      </Routes>
    </Router>
  );
};
