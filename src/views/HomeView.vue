<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePublicationsStore } from '../stores/publications'
import Post from '@/components/Post.vue';

const publications = usePublicationsStore()
onBeforeMount(async() => {
  await publications.getPosts()
})
</script>

<template>
  <div class="posts_wrapper">
    <Post v-for="post in publications.posts"
      :key="`post-${post.id}-${post.title}`"
      :post="post"
      @dislike="publications.dislike(post.id)"
      @like="publications.like(post.id)"
    />
  </div>
</template>

<style>
.posts_wrapper{
  display: flex;
  flex-direction: column;
  width: 676px;
  gap: 32px;
}
</style>
