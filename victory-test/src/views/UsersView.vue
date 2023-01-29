<template>
  <main class="users-page">
      <div class="header">
        <div class="title">Users</div>
      <MyButton @click.prevent="$router.push('/create')">Create user</MyButton>
      </div>
      <UserList :users="users" />
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import UserList from "../components/UserList.vue"
import MyButton from "@/components/UI/MyButton.vue"
import axios from 'axios'
import type User from "@/types/User"
export default defineComponent({
  name: 'UsersView',
  components: {
    UserList,
    MyButton
  },
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

</style>