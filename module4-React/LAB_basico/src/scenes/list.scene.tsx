import React, { Fragment } from "react";
import { AppLayout } from "@/layouts/app.layout";
import { ListContainer } from "@/pods/list/list.container";

export const ListScene: React.FC = () => {
  return (
    <AppLayout>
      <ListContainer />
    </AppLayout>
  );
};
