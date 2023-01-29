<template>
  <input type="text" class="user__input">
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'MyInput'
})
</script>

<style scoped>
  .user__input {
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: none;
    height: 40px;
    box-sizing: border-box;
  }
</style>
