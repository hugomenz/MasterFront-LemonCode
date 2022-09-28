import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/list");
  };

  return (
    <>
      <h3>Hello Login !!</h3>
      <button onClick={handleClick}>Login</button>
    </>
  );
};
