import React from "react";
import { Link } from "react-router-dom";
import { CatListContainer } from "@/pods/cat-list/cat.container";
import { switchRoutes } from "../core/router/routes";
import { ImgListLayout } from "../layouts/img-list.layout";

export const CatScene: React.FC = () => {
  return (
    <ImgListLayout>
      <Link to={switchRoutes.cat}> CAT page</Link>
      <Link to={switchRoutes.dog}> DOG page</Link>
      <CatListContainer />
    </ImgListLayout>
  );
};
