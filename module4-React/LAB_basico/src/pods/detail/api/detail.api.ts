import { MemberDetailEntity } from "./api.models";

export const getUserDetail = (login): Promise<MemberDetailEntity> => {
  return fetch(`https://api.github.com/users/${login}`).then((response) =>
    response.json()
  );
};
