import React from "react";
import { PictureInfo } from "@/common/models/";
import { ImgListComponent } from "@/common/components/img-list";

interface Props {
  dogs: PictureInfo[];
}

export const DogList = (props: Props) => {
  const { dogs } = props;

  return (
    <>
      <ImgListComponent imgList={dogs} />
    </>
  );
};
