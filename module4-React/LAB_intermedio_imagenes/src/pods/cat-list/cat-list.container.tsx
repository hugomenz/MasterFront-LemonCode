import React from "react";
import { CatList } from "./cat-list.component";
import { PictureInfo, PictureInfoVM } from "@/common/models";
import { getCatList } from "./api/cat.api";
import { mapPicturesListFromApiToViewModel } from "@/common/components/img-list/pictures-list.mapper";
import { MyContext } from "@/common/context";

export const CatListContainer = () => {
  const [catList, setCatList] = React.useState<PictureInfoVM[]>([]);
  const myContext = React.useContext(MyContext);

  const onLoadCatsList = () => {
    const apiCatList: PictureInfo[] = getCatList();

    const viewModelCatsList: PictureInfoVM[] = mapPicturesListFromApiToViewModel(apiCatList);

    viewModelCatsList.map((cat) =>
      myContext.picturesCart.find((id) => id === cat.id) ? (cat.selected = true) : (cat.selected = false)
    );

    setCatList(viewModelCatsList);
  };
  const handleCheckCat = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const idSelected = event.target.id;

    const imgList = catList.map((cat: PictureInfoVM) => {
      if (cat.id === idSelected) !cat.selected;
      return cat;
    });
    setCatList(imgList);

    let idList = [...myContext.picturesCart];
    if (checked) {
      idList = idList.find((el) => el === idSelected) ? [...idList] : [...idList, idSelected];
    } else {
      idList = idList.filter((el) => el !== idSelected);
    }
    myContext.setPicturesCart(idList);
  };

  React.useEffect(() => {
    onLoadCatsList();
  }, [myContext.picturesCart]);

  return (
    <>
      <CatList
        cats={catList}
        title="Cool Cat List!"
        onCheckPicture={handleCheckCat}
        cartVisible={myContext.cartVisible}
      />
    </>
  );
};
