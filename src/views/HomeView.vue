<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePublicationsStore } from '../stores/publications'

import Publication from '@/components/Publication.vue';

const publications = usePublicationsStore()
onBeforeMount(async() => {
  await publications.getPosts()
})
</script>

<template>
  <div class="pubs_wrapper">
    <Publication v-for="post in publications.posts"
      :key="`post-${post.id}-${post.title}`"
      :id="post.id"
      :title="post.title" 
      :body="post.body"
      :reactions="post.reactions"
      :tags="post.tags"
      :user-reaction="post.userReaction"
      @dislike="publications.dislike(post.id)"
      @like="publications.like(post.id)"
    />
  </div>
</template>

<style scoped>
.pubs_wrapper{
  display: flex;
  flex-direction: column;
  width: 676px;
  gap: 32px;
}
</style>
