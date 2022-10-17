import type { Member } from "@/types";

export const memberService = {
  async get(orgs: string): Promise<Member[]> {
    console.log(`Desde serivicio >>> ${orgs}`);
    const memberList = await fetch(
      `https://api.github.com/orgs/${orgs}/members`
    ).then((response) => response.json());
    return memberList;
  },
};
