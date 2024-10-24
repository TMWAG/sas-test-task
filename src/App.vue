<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/" style="text-decoration: none">
    <h1 class="header">ikakprosto.ru</h1>
  </RouterLink>
  <RouterView />
</template>

<style scoped>
.header {
  font-family: 'SF Pro Display';
  font-weight: bold;
  font-style: normal;
  font-size: 40px;
  text-align: center;
  color: var(--accent-primary);
  height: 40px;
  width: 240px;
  margin-top: 16px;
  margin-bottom: 58px;
}
</style>
