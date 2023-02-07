import React from "react";
import { MyContext } from "common/context";
import { CheckOutComponent } from "./checkout.component";
import { getCatList } from "pods/cat-list/api/cat.api";
import { getDogList } from "pods/dog-list/api/dog.api";
import { PictureInfo } from "@/common/models";

export const CheckOutContainer: React.FC = () => {
  const myContext = React.useContext(MyContext);
  const [cartList, setCartList] = React.useState<PictureInfo[]>([]);

  const getDetails = () => {
    const pictures: PictureInfo[] = [...getCatList(), ...getDogList()];
    const cart: PictureInfo[] = myContext.picturesCart.map((el) => pictures.find((pic) => pic.id === el));
    setCartList(cart);
  };

  React.useEffect(() => {
    getDetails();
  }, [myContext.picturesCart]);

  return <CheckOutComponent cartList={cartList} />;
};
