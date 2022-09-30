import React from "react";
import { EditUser } from "./edit-user";

interface UserContext {
  username: string;
  setUsername: (username: string) => void;
}

export const MyContext = React.createContext<UserContext>({
  username: "",
  setUsername: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const MyProvider: React.FC<Props> = (props: Props) => {
  const { children } = props;
  const [username, setUsername] = React.useState("");

  console.log(username);

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {children}
    </MyContext.Provider>
  );
};

export const Demo = () => {
  return (
    <MyProvider>
      <EditUser />
    </MyProvider>
  );
};
