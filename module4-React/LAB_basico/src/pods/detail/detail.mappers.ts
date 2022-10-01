import * as am from "./api/api.models";
import * as vm from "./detail.vm";

export const mapMemberDetailToVm = (
  member: am.MemberDetailEntity
): vm.MemberDetailEntity => {
  return {
    id: member.id,
    login: member.login,
    name: member.name.replace(/([A-Z])/g, " $1").trim(),
    company: member.company.replace("@", ""),
    bio: member.bio,
  };
};
