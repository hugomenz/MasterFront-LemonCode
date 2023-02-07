import React from "react";

import { MyContext } from "common/context";

import { CartComponent } from "./cart.component";
import { PictureInfo } from "../img-list";
import { getCatList } from "pods/cat-list/api/cat.api";
import { getDogList } from "pods/dog-list/api/dog.api";

export const CartContainer: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

  const getDetails = () => {
    const pictures: PictureInfo[] = [...getCatList(), ...getDogList()];
    const cart: PictureInfo[] = myContext.picturesCart.map((el) => pictures.find((pic) => pic.id === el));
    setCartList(cart);
  };

  const onDeleteItem = (event: React.FormEvent<HTMLButtonElement>) => {
    const cart = myContext.picturesCart.filter((el) => el !== event.currentTarget.id.slice(5));
    myContext.setPicturesCart(cart);
  };

  const onDeleteAll = (event: React.FormEvent<HTMLButtonElement>) => {
    myContext.setPicturesCart([]);
  };

  React.useEffect(() => {
    getDetails();
  }, [myContext.picturesCart]);

  return (
    <>
      <CartComponent
        cartList={cartList}
        contextCart={myContext.picturesCart}
        onDeleteAll={onDeleteAll}
        onDeleteItem={onDeleteItem}
      />
    </>
  );
};
