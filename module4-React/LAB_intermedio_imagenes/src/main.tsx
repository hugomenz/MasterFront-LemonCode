import React from "react";
import { Link } from "react-router-dom";

export const MainPage: React.FC = () => {
  return (
    <>
      <h2>Hello from main!</h2>
      <Link to="/cat">Kitties</Link>
      <Link to="/dog">Puppies</Link>
    </>
  );
};
