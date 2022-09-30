import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const useMemberFiltered = () => {
  const [org, setOrg] = useState("lemoncode");
  const [filter, setFilter] = useState("");
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const [debouncedFilter] = useDebounce(filter, 1000);
  const [debouncedOrg] = useDebounce(org, 1000);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then((json) =>
        setMembers(
          json.filter((data) => {
            return data.login.toUpperCase().search(filter.toUpperCase()) != -1;
          })
        )
      );
  }, [debouncedFilter, debouncedOrg]);

  return {
    members,
    filter,
    setFilter,
    org,
    setOrg,
  };
};
