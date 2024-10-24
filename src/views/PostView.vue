<script setup lang="ts">
import Publication from '@/components/Publication.vue';
import { usePublicationsStore } from '@/stores/publications';

const props = defineProps<{
  id: string
}>()

const publications = usePublicationsStore();

const post = publications.posts.find(p => p.id === Number(props.id))
</script>

<template>
<div>
  <Publication
    v-if="post"
    :body="post.body"
    :id="post.id"
    :reactions="post.reactions"
    :tags="post.tags"
    :title="post.title"
    :user-reaction="post.userReaction"
    @dislike="publications.dislike(post.id)"
    @like="publications.like(post.id)"
  />
  <span v-else>eeee</span>
</div>
</template>

<style>

</style>