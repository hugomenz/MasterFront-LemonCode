import React from "react";
import { MemberRow } from "./member-row";
import { Member } from "./member-row.model";
import { TableHeader } from "./table-header";

interface Props {
  org: string;
}

export const MembersTable = (props: Props) => {
  const { org } = props;
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then((response) => {
        setMembers(response);
      });
  }, []);

  return (
    <div className="user-list-container">
      <TableHeader />
      {members.map((item) => (
        <MemberRow key={item.id} item={item} />
      ))}
    </div>
  );
};
