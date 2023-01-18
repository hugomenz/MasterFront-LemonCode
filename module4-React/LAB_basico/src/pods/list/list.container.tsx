import React from "react";
import { Link } from "react-router-dom";
import { getMemberCollection } from "./api/list.api";
import { List } from "./list.component";
import { Filter } from "./components/list-filter";
import { OrgContext } from "../../common/context/org-context.component";
import { MemberContext } from "../../common/context/list-context.component";

export const ListContainer = () => {
  const { org, setOrg } = React.useContext(OrgContext);
  const { memberList, setMemberList } = React.useContext(MemberContext);

  const getMemberList = (org: string) => {
    if (org !== "") {
      getMemberCollection(org).then((json) =>
        setMemberList(
          json.filter((data) => {
            return data.login.toUpperCase();
          })
        )
      );
    } else {
      setMemberList([]);
    }
  };

  return (
    <>
      <Filter org={org} getMemberList={getMemberList} onChangeOrg={setOrg} />
      <List members={memberList} />
      {!memberList && <Link to="/detail">Navigate to detail page</Link>}
    </>
  );
};
