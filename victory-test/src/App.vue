<template>
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>


<style scoped>
.wrapper {
    max-width: 1280px;
    background: #FAFAFA;
    padding: 56px 50px;
    margin: 0 auto;
    box-sizing: border-box;
  }
  @media screen and (max-width:390px) {
    .wrapper {
      padding: 20px 32px;
    }
  }
</style>
