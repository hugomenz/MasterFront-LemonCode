import React from "react";
import { AuthLayout } from "@/layouts/auth.layout";
import css from "./login.styles.css";

interface Props {
  onLogin: (username: string, password: string) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [infoForm, setInfoForm] = React.useState<InfoForm>({
    user: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfoForm({
      ...infoForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onLogin(infoForm.user, infoForm.password);
  };

  return (
    <AuthLayout>
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className={css.loginContainer}>
          <input
            type="text"
            name="user"
            value={infoForm.user}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={infoForm.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </AuthLayout>
  );
};
