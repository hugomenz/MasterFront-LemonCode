import React from "react";
import { PictureInfo, PictureInfoVM } from "@/common/models/";
import { ImgListComponent } from "@/common/components/img-list";
import { ToolBarComponent } from "@/common/components/tool-bar/tool-bar.component";
import scss from "./cat-list.styles.scss";
import { CartContainer } from "@/common/components/cart";

interface Props {
  cats: PictureInfoVM[];
  title: string;
  onCheckPicture: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  cartVisible: boolean;
}

export const CatList = (props: Props) => {
  const { cats, title, cartVisible, onCheckPicture } = props;

  return (
    <>
      <ToolBarComponent />
      <div className={scss.pageContent}>
        <div className={scss.pageMain}>
          <ImgListComponent list={cats} title={title} onCheckPicture={onCheckPicture} />
        </div>
        {cartVisible && (
          <div className={scss.pageSidebar}>
            <CartContainer />
          </div>
        )}
      </div>
    </>
  );
};
