import React from "react";
import { Link } from "react-router-dom";

export const DogPage: React.FC = () => {
  return (
    <>
      <h2>Hello from PUPPIES page</h2>

      <Link to="/main">Back to main page</Link>
    </>
  );
};
