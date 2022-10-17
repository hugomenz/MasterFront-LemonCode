import type { MemberDetailEntity } from "@/types";

export const userDetailService = {
  async get(login: MemberDetailEntity["login"]): Promise<MemberDetailEntity> {
    const userDetailList = await fetch(
      `https://api.github.com/users/${login}`
    ).then((response) => response.json());
    return userDetailList;
  },
};
