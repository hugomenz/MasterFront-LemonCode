import React from "react";
import { DogList } from "./dog.component";
import { PictureInfo } from "@/common/models";
import { getDogList } from "./api/dog.api";

export const DogListContainer = () => {
  const [dogs, setDogs] = React.useState<PictureInfo[]>([]);

  React.useEffect(() => {
    setDogs(getDogList());
  }, []);

  return (
    <>
      <DogList dogs={dogs} />
    </>
  );
};
