import React from "react";
//import css from "./login.styles.css";
import scss from "./login.styles.scss";

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
    <>
      <div className={scss.bgImg}></div>
      <div className={scss.loginBox}>
        <h1>Access to Cats&Dogs!</h1>
        <form onSubmit={handleSubmit}>
          <div className={scss.credentialBox}>
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
          </div>
          <button className={scss.btnLogin} type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
