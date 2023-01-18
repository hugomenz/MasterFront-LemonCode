import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export const HeadMemberList: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Avatar</TableCell>
        <TableCell align="center">Id</TableCell>
        <TableCell align="center">Name</TableCell>
      </TableRow>
    </TableHead>
  );
};
