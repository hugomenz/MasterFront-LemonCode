import React from "react";
import { Link } from "react-router-dom";

export const CatPage: React.FC = () => {
  return (
    <>
      <h2>Hello from KITTIES!</h2>
      <Link to="/main">Navigate to main page</Link>
    </>
  );
};
