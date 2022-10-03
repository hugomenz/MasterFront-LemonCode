import React from "react";
import { CatList } from "./cat.component";
import { PictureInfo } from "@/common/models";
import { getCatList } from "./api/cat.api";

export const CatListContainer = () => {
  const [cats, setCats] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    setCats(getCatList());
  }, []);

  return (
    <>
      <CatList cats={cats} />
    </>
  );
};
