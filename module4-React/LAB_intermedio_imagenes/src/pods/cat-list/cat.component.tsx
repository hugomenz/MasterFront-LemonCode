import React from "react";
import { PictureInfo } from "@/common/models/";
import { ImgListComponent } from "@/common/components/img-list";

interface Props {
  cats: PictureInfo[];
}

export const CatList = (props: Props) => {
  const { cats } = props;

  return (
    <>
      <ImgListComponent imgList={cats} />
    </>
  );
};
