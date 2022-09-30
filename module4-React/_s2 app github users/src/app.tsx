import React from "react";
import { MembersTable } from "./members-table";

interface MemberEntity {
  avatar_url: string;
  id: string;
  login: string;
}

export const App = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  return (
    <>
      <MembersTable org="lemoncode" />;
    </>
  );
};
