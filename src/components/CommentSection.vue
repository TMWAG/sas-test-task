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

const headerText = computed(() => {
  const lastDigit = Number(comments.value.length.toString().slice(-1))
  if (lastDigit === 0 || lastDigit >= 5) return 'комментариев'
  if (lastDigit === 1) return 'комментарий'
  if (lastDigit >= 1) return 'комментария'
})

onBeforeMount(async () => {
  commentsStore.getCommentsByPostId(props.postId)
})
</script>

<template>
  <div class="comments_section">
    <span class="comments_header">{{ comments.length }} {{ headerText }}</span>
    <CommentItem
      v-for="c in comments"
      :key="`comment-${c.id}-${c.postId}-${c.user.id}`"
      :comment="c"
      @delete="commentsStore.deleteCommentById(c.id)"
    />
  </div>
</template>

<style>
.comments_section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.comments_header {
  font-family: 'SF Pro Display';
  font-weight: bold;
  font-size: 28px;
  margin-top: 40px;
}
</style>
