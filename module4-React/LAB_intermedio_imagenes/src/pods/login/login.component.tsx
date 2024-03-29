import React from "react";
//import css from "./login.styles.css";
import scss from "./login.styles.scss";
import Card from "@mui/material/Card";
import { CardHeader, CardContent, Button } from "@mui/material";

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
      <Card sx={{ padding: "20px" }} className={scss.loginBox}>
        <CardHeader title="Access to CatsDogs!" className={scss.title} />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className={scss.credentialBox}>
              <input type="text" name="user" value={infoForm.user} onChange={handleChange} />
              <input type="password" name="password" value={infoForm.password} onChange={handleChange} />
            </div>
            <Button variant="contained" className={scss.btnLogin} type="submit">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
