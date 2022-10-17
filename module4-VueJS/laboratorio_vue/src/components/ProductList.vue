<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Members</h1>
    </div>

    <form @submit.prevent="filterList">
      <label for="filter"></label>
      <input id="filter" v-model="store.orgs" />
      <button @click="filterList">Filter!</button>
    </form>

    <ul class="product-list">
      <li v-for="member in memberList" :key="member.id">
        <!-- <a ></a> -->
        <router-link :to="`/detail/${member.login}`">
          <article class="grid product-container card">
            <img class="avatar" :src="member.avatar_url" alt="member.login" />
            <span>{{ member.id }}</span>
            <span>{{ member.login }}</span>
          </article>
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import useMembersApi from "@/composables/membersApi";
import { useOrgStore } from "../stores/cart";

const store = useOrgStore();

const memberList = await useMembersApi(store.orgs);

const filterList = async () => {
  memberList.value = (await useMembersApi(store.orgs)).value.filter(
    (member) => {
      return member;
    }
  );
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
