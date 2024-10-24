<script setup lang="ts">
import CommentSection from '@/components/CommentSection.vue'
import Publication from '@/components/Publication.vue'
import { usePublicationsStore } from '@/stores/publications'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  id: string
}>()

const publications = usePublicationsStore()
const post = ref<IPost>()
post.value = publications.posts.find(p => p.id === Number(props.id))

onMounted(async () => {
  if (!post.value) {
    await publications.getPostById(Number(props.id))
    post.value = publications.posts[publications.posts.length - 1]
  }
})
</script>

<template>
  <div
    v-if="post"
    class="post_wrapper"
  >
    <Publication
      :body="post.body"
      :id="post.id"
      :reactions="post.reactions"
      :tags="post.tags"
      :title="post.title"
      :user-reaction="post.userReaction"
      @dislike="publications.dislike(post.id)"
      @like="publications.like(post.id)"
    />
    <CommentSection :post-id="post.id" />
  </div>
</template>

<style>
.post_wrapper {
  display: flex;
  flex-direction: column;
  width: 676px;
}
</style>
