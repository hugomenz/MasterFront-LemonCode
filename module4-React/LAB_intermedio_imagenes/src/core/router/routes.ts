import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  cat: string;
  dog: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  cat: "/cat",
  /* cat: "/cat/:login", */
  dog: "/dog",
};
