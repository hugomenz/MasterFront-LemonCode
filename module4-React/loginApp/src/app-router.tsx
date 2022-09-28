import React from "react";
import { HashRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Login } from "./login";
import { List } from "./list";
import { Detail } from "./detail";

export const AppRouter = () => {
  const pathname = window.location.pathname;

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};
