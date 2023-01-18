import React from "react";
import { MemberDetailEntity } from "./detail.vm";
import css from "./detail.styles.css";

interface Props {
  member: MemberDetailEntity;
}

export const Detail = (props: Props) => {
  const { member } = props;

  return (
    <>
      <div className={css.detailsBox} style={{ width: "50vw" }}>
        <div className={css.header}>
          <h3>User Id: {member.id}</h3>
        </div>
        <div className={css.details}>
          <p>
            {" "}
            <b>id:</b> {member.id}
          </p>
          <p>
            {" "}
            <b>login:</b> {member.login}
          </p>
          <p>
            {" "}
            <b>name:</b> {member.name}
          </p>
          <p>
            {" "}
            <b>company:</b> {member.company}
          </p>
          <p>
            {" "}
            <b>bio:</b> {member.bio}
          </p>
        </div>
      </div>
    </>
  );
};
