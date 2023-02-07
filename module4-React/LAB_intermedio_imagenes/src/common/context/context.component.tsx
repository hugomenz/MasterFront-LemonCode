import React from "react";

interface Context {
  picturesCart: string[];
  setPicturesCart: (pictureId: string[]) => void;
  cartVisible: boolean;
  setCartVisible: (state: boolean) => void;
}

export const MyContext = React.createContext<Context>({
  picturesCart: [],
  setPicturesCart: (value) => {},
  cartVisible: true,
  setCartVisible: (value) => {},
});

interface Props {
  children: React.ReactNode;
}
export const MyContextProvider: React.FC<Props> = (props) => {
  const { children } = props;
  const [picturesCart, setPicturesCart] = React.useState<string[]>([]);
  const [cartVisible, setCartVisible] = React.useState<boolean>(true);

  return (
    <MyContext.Provider
      value={{
        picturesCart,
        setPicturesCart,
        cartVisible,
        setCartVisible,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
