<template>
  <main class="users-page">
      <div class="header">
        <div class="title">Users</div>
      <button @click.prevent="$router.push('/create')" class="create__btn">Create user</button>
      </div>
      <UserList :users="users" />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import UserList from "../components/UserList.vue"
import axios from 'axios'
import type User from "@/types/User"
export default defineComponent({
  name: 'UsersView',
  components: {UserList},
  setup() {
    const users = ref<User[]>([])
    onMounted(async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=6")
      users.value = res.data
    })

    return {
      users,
    }
  }
})
</script>



<style scoped>
  .header {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  .title {
    width: 116px;
    height: 48px;
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
  }
  .create__btn {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 110px;
    height: 40px;
    border: 1px solid #000000;
    font-size: 14px;
    line-height: 24px;
  }

</style>