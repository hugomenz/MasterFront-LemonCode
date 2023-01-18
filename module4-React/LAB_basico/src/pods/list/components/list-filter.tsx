import { Button, TextField } from "@mui/material";
import React from "react";

interface Props {
  org: string;
  onChangeOrg: (org: string) => void;
  getMemberList: (org: string) => void;
}

export const Filter: React.FC<Props> = (props) => {
  const { org, onChangeOrg, getMemberList } = props;
  return (
    <>
      <div>
        <TextField
          label="Organization"
          id="org-input"
          defaultValue={org}
          variant="standard"
          color="primary"
          size="small"
          onChange={(e) => onChangeOrg(e.target.value)}
        />

        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            getMemberList(org);
          }}
        >
          Load
        </Button>
      </div>
    </>
  );
};
