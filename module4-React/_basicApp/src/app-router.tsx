import React from "react";
import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { PageA } from "./page-a";
import { PageB } from "./page-b";

export const AppRouter = () => {
  const pathname = window.location.pathname;

  return (
    <HashRouter>
      <nav>
        <Link to="/">Page A</Link> - <Link to="/page-b">Page B</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PageA />} />
        <Route path="/page-b" element={<PageB />} />
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};
