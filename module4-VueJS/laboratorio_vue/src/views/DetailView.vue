<template>
  <div class="details-box">
    <div class="header">
      <h3>User Id: {{ userDetail.id }}</h3>
    </div>
    <div class="details">
      <p><b>id:</b> {{ userDetail.id }}</p>
      <p><b>login:</b> {{ userDetail.login }}</p>
      <p><b>name:</b> {{ userDetail.name }}</p>
      <p><b>company:</b> {{ userDetail.company }}</p>
      <p><b>bio:</b> {{ userDetail.bio }}</p>
    </div>
  </div>
  <router-link :to="`/`">
    <button>Go Back</button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { RouteLocation } from "vue-router";
import type { MemberDetailEntity } from "../types/index";
import { userDetailService } from "../services/userDetail";

export default defineComponent({
  data: () => ({
    userDetail: {} as MemberDetailEntity,
  }),
  computed: {
    login(): string {
      return String((this.$route as RouteLocation).params.login);
    },
  },
  created() {
    userDetailService.get(this.login).then((userDetail: MemberDetailEntity | undefined) => {
      if (userDetail) {
        this.userDetail = userDetail;
      }
    });
  },
});
</script>
