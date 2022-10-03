import React from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./login.component";
import { switchRoutes } from "../../core/router/routes";

export const LoginContainer = () => {
  const navigate = useNavigate();

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      navigate(switchRoutes.cat);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <Login onLogin={handleLogin} />
    </>
  );
};
