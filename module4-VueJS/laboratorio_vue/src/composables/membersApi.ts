import { ref } from "vue";
import type { Ref } from "vue";
import { memberService } from "../services/members";
import type { Member } from "@/types";

export default async function useMembersApi(text: string) {
  const memberList: Ref<Member[]> = ref([]);

  console.log(`Texto desde composable >> ${text}`);

  memberList.value = await memberService.get(text);

  return memberList;
}
