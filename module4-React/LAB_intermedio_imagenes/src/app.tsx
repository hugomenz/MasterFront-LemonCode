import React from "react";
import { MyContextProvider } from "./common/context";
import { RouterComponent } from "./core/router";

export const App: React.FC = () => {
  return (
    //sdfdfd
    <MyContextProvider>
      <RouterComponent />
    </MyContextProvider>
  );
};
