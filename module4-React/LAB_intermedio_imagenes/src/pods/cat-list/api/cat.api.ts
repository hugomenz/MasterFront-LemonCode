import { catData } from "./cat.data";
import { PictureInfo } from "@/common/models";

export const getCatList = (): PictureInfo[] => {
  return [...catData];
};
