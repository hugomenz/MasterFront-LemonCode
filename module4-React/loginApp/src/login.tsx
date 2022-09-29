import React from "react";
import { useNavigate } from "react-router-dom";

interface InfoForm {
  user: string;
  password: string;
}

export const Login = () => {
  const [infoForm, setInfoForm] = React.useState<InfoForm>({
    user: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (infoForm.user == "admin" && infoForm.password == "admin") {
      navigate("/list");
    } else {
      alert("PSSSSSSssss....wrong user or password");
    }
  };

  const handleChange =
    (field: keyof InfoForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setInfoForm({
        ...infoForm,
        [field]: e.target.value,
      });
    };

  return (
    <>
      <h3>Hello Login !!</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={infoForm.user}
          onChange={handleChange("user")}
        />
        <input
          type="password"
          value={infoForm.password}
          onChange={handleChange("password")}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};
