<template>
  <button class="my-btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: 'MyButton'
})
</script>

<style scoped>
  
  .my-btn {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 110px;
    height: 40px;
    border: 1px solid #000000;
    font-size: 14px;
    line-height: 24px;
    margin: 10px;
  }
</style>
