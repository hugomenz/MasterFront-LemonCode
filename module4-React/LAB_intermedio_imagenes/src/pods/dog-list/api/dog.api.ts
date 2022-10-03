import { dogData } from "./dog.data";
import { PictureInfo } from "@/common/models";

export const getDogList = (): PictureInfo[] => {
  return [...dogData];
};
