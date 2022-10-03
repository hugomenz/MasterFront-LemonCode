import React from "react";
import { PictureInfo } from "@/common/models/";
import scss from "./img-list.styles.scss";

interface Props {
  imgList: PictureInfo[];
}

export const ImgListComponent: React.FC<Props> = (props: Props) => {
  const { imgList } = props;

  return (
    <>
      {imgList.map((list) => (
        <React.Fragment key={list.id}>
          <div className={scss.imgBox}>
            <img src={list.picUrl} />
            <span>{list.title}</span>
            <input type="checkbox" />
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
