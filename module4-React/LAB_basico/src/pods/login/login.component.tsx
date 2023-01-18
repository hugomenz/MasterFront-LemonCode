import React from "react";
import { AuthLayout } from "@/layouts/auth.layout";
import css from "./login.styles.css";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
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
    console.log(infoForm);
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
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="user"
              autoFocus
              value={infoForm.user}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={infoForm.password}
              onChange={handleChange}
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </AuthLayout>
  );
};

{
  /* 
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
       */
}
