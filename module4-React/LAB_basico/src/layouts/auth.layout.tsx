import React from "react";
import css from "../global-css/styles.css";

interface Props {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<Props> = ({ children }) => {
  return <div className={css.layoutCenter}>{children}</div>;
};
