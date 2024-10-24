<script setup lang="ts">
import { useCommentsStore } from '@/stores/comments'
import { computed, onBeforeMount } from 'vue'
import CommentItem from '@/components/CommentItem.vue'

const props = defineProps<{
  postId: number
}>()

const commentsStore = useCommentsStore()
const comments = computed(() => {
  return commentsStore.comments.filter(c => c.postId === props.postId)
})

onBeforeMount(async () => {
  commentsStore.getCommentsByPostId(props.postId)
})
</script>

<template>
  <div class="comment_section">
    <span class="comments_header">{{ comments.length }}</span>
    <CommentItem
      v-for="c in comments"
      :key="`comment-${c.id}-${c.postId}-${c.user.id}`"
      :comment="c"
      @delete="commentsStore.deleteCommentById(c.id)"
    />
  </div>
</template>
