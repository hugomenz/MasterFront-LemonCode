import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  cat: string;
  dog: string;
  checkout: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  cat: "/cats",
  dog: "/dogs",
  checkout: "/checkout",
};
