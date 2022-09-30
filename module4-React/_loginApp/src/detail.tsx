import React from "react";
import { Link } from "react-router-dom";

export const Detail = () => {
  return (
    <>
      <h3>Hello Detail !!</h3>
      <Link to="/list">Go to list!</Link>
    </>
  );
};
