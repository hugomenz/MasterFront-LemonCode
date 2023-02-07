import React from "react";

import { PictureInfo, PictureInfoVM } from "@/common/models";
import { getDogList } from "./api/dog.api";
import { mapPicturesListFromApiToViewModel } from "@/common/components/img-list/pictures-list.mapper";
import { MyContext } from "common/context";
import { DogList } from "./dog-list.component";

export const DogListContainer = () => {
  const [dogList, setDogList] = React.useState<PictureInfoVM[]>([]);
  const myContext = React.useContext(MyContext);

  const onLoadDogsList = () => {
    const apiDogList: PictureInfo[] = getDogList();

    const viewModelDogsList: PictureInfoVM[] = mapPicturesListFromApiToViewModel(apiDogList);

    viewModelDogsList.map((dog) =>
      myContext.picturesCart.find((id) => id === dog.id) ? (dog.selected = true) : (dog.selected = false)
    );

    setDogList(viewModelDogsList);
  };
  const handleCheckDog = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const idSelected = event.target.id;

    const imgList = dogList.map((dog: PictureInfoVM) => {
      if (dog.id === idSelected) !dog.selected;
      return dog;
    });
    setDogList(imgList);

    let idList = [...myContext.picturesCart];
    if (checked) {
      idList = idList.find((el) => el === idSelected) ? [...idList] : [...idList, idSelected];
    } else {
      idList = idList.filter((el) => el !== idSelected);
    }
    myContext.setPicturesCart(idList);
  };

  React.useEffect(() => {
    onLoadDogsList();
  }, [myContext.picturesCart]);

  return (
    <>
      <DogList
        dogs={dogList}
        title="Cool Dog List!"
        onCheckPicture={handleCheckDog}
        cartVisible={myContext.cartVisible}
      />
    </>
  );
};
