import React from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/core/router/routes";
import { Login } from "./login.component";

export const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      navigate(routes.list);
    } else {
      alert("Psssst... wrong user or password: admin/test");
    }
  };

  return <Login onLogin={handleLogin} />;
};
