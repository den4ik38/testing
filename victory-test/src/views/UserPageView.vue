<template>
  <div v-if="user" class="user-page">
    <div class="header">
      <div class="title">{{ user.name }}</div>
      <div class="user-name">@{{ user.username }}</div>
    </div>
    <div class="container">
      <div class="value__box">
        <div class="value__title">Email</div>
        <div class="value__text">{{ user.email }}</div>
      </div>
      <div class="value__box">
        <div class="value__title">Phone</div>
        <div class="value__text">{{ user.phone }}</div>
      </div>
      <div class="value__box">
        <div class="value__title">Website</div>
        <div class="value__text">{{ user.website }}</div>
      </div>
      <div class="value__box">
        <div class="value__title">Company</div>
        <div class="value__text">{{ user.company.name }}</div>
      </div>
    </div>
    <div class="address__box">
      <div class="value__title">Address</div>
      <div class="value__text">{{ user.address.suite }}, {{ user.address.street }}, {{ user.address.city }}, {{ user.address.zipcode }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import type User from "@/types/User"
export default defineComponent({
  name: 'UserPageView',
  setup() {
    const user = ref<User>()
    const route = useRoute()
    onMounted(async () => {
      try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
        user.value = res.data
      } catch (error) {
        console.log('Запрос не проходит, странно', error)
        
      }
    })
    return {
      user,
    }
  },
})
</script>
<style scoped>
  
  .header {
    display: flex;
    gap: 16px;
  }
  .title {
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
  }
  .user-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .container {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
    margin: 48px 0 32px;
    flex-wrap: wrap;
  }
  .value__box {
    width: calc((100% - 15px)/4);
  }
  .value__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
  .value__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 8px;
  }
  @media screen and (max-width:800px) {
    .value__box {
      width: calc((100% - 5px)/2);
    }
  }
  @media screen and (max-width:500px) {
    .header {
      flex-direction: column;
      gap: 8px;
    }
    .container {
      margin: 32px 0;
      gap: 32px;
    }
  }
  @media screen and (max-width:390px) {
    .value__box {
      width: 100%;
    }
  }
</style>