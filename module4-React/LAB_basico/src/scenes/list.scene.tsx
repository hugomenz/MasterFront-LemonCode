import React, { Fragment } from "react";
import { AppLayout } from "@/layouts/app.layout";
import { ListContainer } from "@/pods/list/list.container";
import { MyProvider } from "@/common/context";

export const ListScene: React.FC = () => {
  return (
    <>
      <AppLayout>
        <ListContainer />
      </AppLayout>
    </>
  );
};
