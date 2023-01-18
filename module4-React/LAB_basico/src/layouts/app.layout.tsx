import React from "react";
import css from "@/global-css/styles.css";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout-app-container">
      <div className="layout-app-header">User logged in</div>
      <div className="layout-app-content">{children}</div>
    </div>
  );
};
