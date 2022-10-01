import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      navigate("/main");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <>
      <div className="bg-img"></div>
      <div className="login-box">
        <h1>Access to KittyPup!</h1>
        <form onSubmit={handleNavigation}>
          <div className="credential-box">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="credential-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
