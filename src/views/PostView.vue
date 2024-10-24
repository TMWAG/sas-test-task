<script setup lang="ts">
import { usePublicationsStore } from '@/stores/publications'
import { onMounted, ref } from 'vue'
import CommentSection from '@/components/CommentSection.vue'
import Post from '@/components/Post.vue'

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
    <Post
      :post="post"
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
  gap: 10px;
  width: 676px;
}
</style>
