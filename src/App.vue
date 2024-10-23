<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">  
    <h1 class="header">ikakprosto.ru</h1>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.header{
  font-family: 'SF Pro Display';
  font-weight: bold;
  font-style: normal;
  font-size: 40px;
  text-align: center;
  color: #FF6B00;
  height: 40px;
  width: 240px;
  margin-top: 16px;
  margin-bottom: 58px;
}
</style>
