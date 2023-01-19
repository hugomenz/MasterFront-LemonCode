<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Members</h1>
    </div>

    <form @submit.prevent="filterList">
      <v-text-field
        v-model="store.orgs"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-btn color="primary" elevation="4" outlined x-large @click="filterList">Filter!</v-btn>
    </form>

    <v-table hover fixed-header style="cursor: pointer">
      <thead>
        <tr>
          <th class="text-left">Picture</th>
          <th class="text-left">Login ID</th>
          <th class="text-left">Username</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="member in memberList" :key="member.id" @click="navigateTo(member.login)">
          <td><img class="avatar" :src="member.avatar_url" alt="member.login" /></td>
          <td>{{ member.id }}</td>
          <td>{{ member.login }}</td>
        </tr>
      </tbody>
    </v-table>
  </section>
</template>

<script setup lang="ts">
import useMembersApi from "@/composables/membersApi";
import { useOrgStore } from "../../stores/cart";
import router from "@/router";
//

const store = useOrgStore();
const memberList = await useMembersApi(store.orgs);

const filterList = async () => {
  memberList.value = (await useMembersApi(store.orgs)).value.filter((member) => {
    return member;
  });
};

const navigateTo = (name: string) => {
  router.push(`detail/${name}`);
};
</script>

<style lang="scss">
.product-list {
  padding: 0;
  li {
    margin-bottom: 2em;
  }
}
.product-container {
  align-items: center;
  grid-template-columns: 100px 1fr 1fr;
}

.avatar {
  width: 80px;
}
</style>
