<template>
  <div class="wrapper">
    <div class="title">{{ user.name }}</div>
    <div class="username">@{{ user.username }}</div>
    <div class="usermail">{{ user.email }}</div>
    <div class="userphone">{{ user.phone }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
import type User from "@/types/User"
import type { PropType } from "vue"

export default defineComponent({
  name: 'UserItem',
  props: {
    user: {
      type: Object as PropType<User>,
        required: true
    } 
  }
})
</script>
<style scoped>
  .wrapper {
    position: relative;
    width: calc((100% - 40px)/3);
    height: 160px;
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #444444;
    
  }
  .title {
    position: absolute;
    height: 24px;
    left: 24px;
    right: 24px;
    top: 24px;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }
  .username {
    position: absolute;
    height: 16px;
    left: 24px;
    right: 24px;
    top: 52px;
    font-size: 12px;
    line-height: 16px;
    color: #444444;
  }
  .usermail {
    position: absolute;
    height: 24px;
    left: 24px;
    right: 24px;
    top: 84px;
  }
  .userphone {
    position: absolute;
    height: 24px;
    left: 24px;
    right: 24px;
    top: 112px;
  }
  @media screen and (max-width:800px) {
    .wrapper {
      width: calc((100% - 20px)/2);
    }
  }
  @media screen and (max-width:500px) {
    .wrapper {
      width: 100%;
    }
  }
  @media screen and (max-width:390px) {
    .wrapper {
      margin: 10px 0;
    }
  }
</style>