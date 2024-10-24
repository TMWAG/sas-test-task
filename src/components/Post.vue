<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import TagList from './TagList.vue'
import ReactionGroup from './ReactionGroup.vue'

defineProps<{
  post: IPost
}>()

defineEmits<{
  like: []
  dislike: []
}>()
</script>

<template>
  <div class="post">
    <div class="post_content">
      <h2 class="title">{{ post.title }}</h2>
      <div class="body">{{ post.body }}</div>
    </div>
    <div class="footer">
      <ReactionGroup
        :reactions="post.reactions"
        :user-reaction="post.userReaction"
        @dislike="$emit('dislike')"
        @like="$emit('like')"
      />
      <div class="info">
        <RouterLink
          :to="{ name: 'post', params: { id: post.id } }"
          class="comments_link"
          >Open comments</RouterLink
        >
        <span class="post_date">Today</span>
        <TagList :tags="post.tags" />
      </div>
    </div>
  </div>
</template>

<style>
.post {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.post_content {
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

.post_date {
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
