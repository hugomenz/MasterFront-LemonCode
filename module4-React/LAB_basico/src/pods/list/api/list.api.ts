import { MemberEntity } from "../list.vm";

export const getMemberCollection = (org): Promise<MemberEntity[]> => {
  return fetch(`https://api.github.com/orgs/${org}/members`).then((response) =>
    response.json()
  );
};
