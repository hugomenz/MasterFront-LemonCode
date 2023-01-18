import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MemberEntity } from "../list.vm";

interface Props {
  member: MemberEntity;
  routes: any;
}

export const RowMemberList: React.FC<Props> = (props) => {
  const { member, routes } = props;

  let navigate = useNavigate();

  const routeChange = (member) => {
    navigate(routes.detail(member.login));
  };

  return (
    <TableRow hover onClick={() => routeChange(member)} style={{ cursor: "pointer" }}>
      <TableCell align="center">
        <img src={member.avatar_url} style={{ width: "5rem" }} />
      </TableCell>
      <TableCell align="center" style={{ width: "20rem" }}>
        {member.id}
      </TableCell>
      <TableCell align="center" style={{ width: "20rem" }}>
        {member.login}
      </TableCell>
    </TableRow>
  );
};
