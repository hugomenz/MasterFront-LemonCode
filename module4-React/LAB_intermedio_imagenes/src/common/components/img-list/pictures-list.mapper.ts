import { PictureInfo } from "@/common/models";

export const mapPicturesListFromApiToViewModel = (picturesList: PictureInfo[]) => {
  return picturesList.map((picture) => mapPictureFromApiToViewModel(picture));
};

const mapPictureFromApiToViewModel = (picture: PictureInfo) => {
  return {
    ...picture,
    selected: false,
  };
};
