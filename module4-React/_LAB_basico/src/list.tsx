import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useMemberFiltered } from "./use-members-filtered.hook";

export const ListPage: React.FC = () => {
  const { members, filter, setFilter, org, setOrg } = useMemberFiltered();

  return (
    <>
      <h2>Hello from List page</h2>
      <div className="filter-box">
        <div className="filter">
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

      <div className="filter-box">
        <div className="filter">
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

      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
