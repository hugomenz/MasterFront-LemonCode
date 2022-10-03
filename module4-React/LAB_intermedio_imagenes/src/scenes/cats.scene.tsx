import React from "react";
import { Link } from "react-router-dom";
import { CatListContainer } from "@/pods/cat-list/cat.container";
import { switchRoutes } from "../core/router/routes";
import { ImgListLayout } from "../layouts/img-list.layout";

export const CatScene: React.FC = () => {
  return (
    <ImgListLayout>
      <CatListContainer />
      <Link to={switchRoutes.dog}>Navigate to DOG page</Link>
    </ImgListLayout>
  );
};
