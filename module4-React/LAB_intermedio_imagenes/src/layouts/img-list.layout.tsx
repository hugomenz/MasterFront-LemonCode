import React from "react";
import scss from "@/global-scss/styles.scss";

interface Props {
  children: React.ReactNode;
}

export const ImgListLayout: React.FC<Props> = ({ children }) => {
  return <div className={scss.listBox}>{children}</div>;
};
