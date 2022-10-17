import { defineStore } from "pinia";

export const useOrgStore = defineStore({
  id: "organization",
  state: () => ({
    orgs: "lemoncode",
  }),
});
