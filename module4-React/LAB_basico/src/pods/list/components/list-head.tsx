import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export const HeadMemberList: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center" style={{ width: "5rem" }}>
          Avatar
        </TableCell>
        <TableCell align="center" style={{ width: "20rem" }}>
          Id
        </TableCell>
        <TableCell align="center" style={{ width: "20rem" }}>
          Name
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
