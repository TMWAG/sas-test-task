<script setup lang="ts">
import { defineProps, ref } from 'vue'
import TagList from './TagList.vue'
import ReactionGroup from './ReactionGroup.vue'
import { RouterLink } from 'vue-router'

defineProps<{
  id: number
  title: string
  body: string
  reactions: {
    likes: number
    dislikes: number
  }
  tags: string[]
  userReaction?: 'liked' | 'disliked'
}>()

defineEmits<{
  like: []
  dislike: []
}>()
</script>

<template>
  <div class="publication">
    <div class="content">
      <h2 class="title">{{ title }}</h2>
      <div class="body">{{ body }}</div>
    </div>
    <div class="footer">
      <ReactionGroup
        :reactions="reactions"
        :user-reaction="userReaction"
        @dislike="$emit('dislike')"
        @like="$emit('like')"
      />
      <div class="info">
        <RouterLink
          :to="{ name: 'post', params: { id } }"
          class="comments_link"
          >Open comments</RouterLink
        >
        <span class="publication_date">Today</span>
        <TagList :tags="tags" />
      </div>
    </div>
  </div>
</template>

<style>
.publication {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.title {
  font-size: 28px;
  font-family: 'SF Pro Display';
  font-weight: bold;
  line-height: 20px;
  color: var(--text);
}

.body {
  font-family: 'SF Pro Display';
  font-size: 20px;
  line-height: 20px;
  color: var(--text);
}

.footer {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
}

.info {
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
}

.publication_date {
  color: var(--gray-text);
  font-family: 'SF Pro Display';
  font-size: 14px;
}

.comments_link {
  color: var(--accent-primary);
  font-family: 'SF Pro Display';
  font-size: 14px;
}
</style>
