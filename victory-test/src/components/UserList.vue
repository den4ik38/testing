<template>
  <div class="user-list">
    <UserItem 
    v-for="user in users" 
    :key="user.id" 
    :user="user"
    @click="$router.push(`/user/${user.id}`)"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import UserItem from "@/components/UserItem.vue"
import type User from "@/types/User"
import type { PropType } from "vue"

export default defineComponent({
  name: 'UsersList',
  components: {UserItem},
  props: {
    users: {
      required: true,
      type: Array as PropType<User[]>
    }
  }
})
</script>
<style scoped>
  .user-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 48px;
    gap: 20px;
  }
  @media screen and (max-width:390px) {
    .user-list {
      margin-top: 32px;
    }
  }
</style>