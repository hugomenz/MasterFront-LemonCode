import React from "react";
import { Link } from "react-router-dom";

export const List = () => {
  return (
    <>
      <h3>Hello List !!</h3>
      <Link to="/detail">Go to detail!</Link>
    </>
  );
};
