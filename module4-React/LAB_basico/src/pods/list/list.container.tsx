import React from "react";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { getMemberCollection } from "./api/list.api";

import { List } from "./list.component";
import css from "./list.styles.css";
interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListContainer = () => {
  const [org, setOrg] = React.useState("lemoncode");
  const [filter, setFilter] = React.useState("");
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 1000);
  const [debouncedOrg] = useDebounce(org, 1000);

  React.useEffect(() => {
    getMemberCollection(org).then((json) =>
      setMembers(
        json.filter((data) => {
          return data.login.toUpperCase().search(filter.toUpperCase()) != -1;
        })
      )
    );
  }, [debouncedFilter, debouncedOrg]);

  /*   return {
    members,
    filter,
    setFilter,
    org,
    setOrg,
  }; */
  return (
    <>
      <div className={css.filterBox}>
        <div className={css.filter}>
          <label>Organization:</label>
          <input
            id="org-input"
            type="text"
            value={org}
            onChange={(e) => {
              setOrg(e.target.value);
            }}
          />
        </div>
      </div>

      <div className={css.filterBox}>
        <div className={css.filter}>
          <label>Member:</label>
          <input
            id="member-input"
            type="text"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
      </div>

      <List members={members} />
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
