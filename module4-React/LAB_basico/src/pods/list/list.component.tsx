import { routes } from "@/core/router/routes";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "./list.vm";
import css from "./list.styles.css";

interface Props {
  members: MemberEntity[];
}

export const List = (props: Props) => {
  const { members } = props;

  return (
    <>
      <div className={css.userListContainer}>
        <span className={css.header}>Avatar</span>
        <span className={css.header}>Id</span>
        <span className={css.header}>Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={routes.detail(member.login)}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};
