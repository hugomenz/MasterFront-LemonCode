import { ImgListLayout } from "@/layouts/img-list.layout";
import { DogListContainer } from "@/pods/dog-list/dog.container";
import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../core/router/routes";

export const DogScene: React.FC = () => {
  return (
    <ImgListLayout>
      <Link to={switchRoutes.cat}> CAT page</Link>
      <Link to={switchRoutes.dog}> DOG page</Link>
      <ImgListLayout>
        <DogListContainer />
      </ImgListLayout>
    </ImgListLayout>
  );
};
