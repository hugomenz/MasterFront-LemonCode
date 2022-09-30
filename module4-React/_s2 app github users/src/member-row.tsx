import React from "react";
import * as vm from "./member-row.model";

interface Props {
  item: vm.Member;
}

export const MemberRow = (props: Props) => {
  const { item } = props;

  return (
    <React.Fragment key={item.id}>
      <img src={item.avatar_url} />
      <span>{item.id}</span>
      <span>{item.login}</span>
      <span>
        Perfil de <a href={item.html_url}>{item.login}</a>
      </span>
    </React.Fragment>
  );
};
