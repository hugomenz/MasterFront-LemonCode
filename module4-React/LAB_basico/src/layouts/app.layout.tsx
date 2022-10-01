import React from "react";
import css from "../global-css/styles.css";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className={css.layoutAppContainer}>
      <div className={css.layoutAppHeader}>User logged in</div>
      {children}
    </div>
  );
};
