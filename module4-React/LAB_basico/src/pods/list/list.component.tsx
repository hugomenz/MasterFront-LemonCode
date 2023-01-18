import { routes } from "@/core/router/routes";
import React from "react";
import { MemberEntity } from "./list.vm";
import { HeadMemberList } from "./components/list-head";
import { RowMemberList } from "./components/list-row";

interface Props {
  members: MemberEntity[];
}

export const List = (props: Props) => {
  const { members } = props;

  return (
    <>
      <HeadMemberList />
      {members.map((member) => (
        <RowMemberList key={member.id} member={member} routes={routes} />
      ))}
    </>
  );
};
