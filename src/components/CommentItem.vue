<script setup lang="ts">
defineProps<{
  comment: IComment
}>()
defineEmits<{
  delete: []
}>()
</script>

<template>
  <div class="comment_item">
    <div class="user_picture"></div>
    <div class="comment_text">
      <span class="user_name">
        {{ comment.user.username }}
      </span>
      <span class="comment_body">{{ comment.body }}</span>
      <div class="comment_footer">
        <span class="comment_date"> Today </span>
        <button
          class="delete_comment_button"
          @click="$emit('delete')"
        >
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.comment_item {
  display: flex;
  gap: 8px;
}

.user_picture {
  width: 46px;
  height: 46px;
  border: solid 3px var(--text);
  border-radius: 50%;
}

.comment_text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.user_name {
  font-family: 'SF Pro Display';
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: var(--text);
}
.comment_body {
  font-family: 'SF Pro Display';
  font-size: 20px;
  margin-bottom: 4px;
  color: var(--text);
}
.comment_footer {
  display: flex;
  gap: 20px;
}
.comment_date {
  font-family: 'SF Pro Display';
  font-size: 14px;
  color: var(--gray-text);
}
.delete_comment_button {
  color: var(--red);
  text-decoration: underline;
  border: none;
  background: none;
}
</style>
