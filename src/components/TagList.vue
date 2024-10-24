<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="tag_list">
    <span
      class="tag_item"
      v-for="(tag, idx) in tags"
      :key="`tag-${idx}-${tag}`"
      >{{ tag }}</span
    >
  </div>
</template>

<style>
.tag_list {
  display: flex;
  gap: 4px;
  margin-left: 8px;
}

.tag_item {
  background-color: #f5f5f5;
  font-family: 'SF Pro Display';
  font-size: 14px;
  color: #040405;
  border-radius: 3px;
  padding: 2px 4px;
  line-height: 14px;
  position: relative;
  z-index: 2;
}

.tag_item:first-child {
  border-radius: 0 3px 3px 0;
}

.tag_item:first-child:before {
  background-color: #f5f5f5;
  content: '';
  height: 14.3px;
  width: 14.3px;
  position: absolute;
  rotate: 45deg;
  left: -8px;
  top: 2px;
  border-radius: 3px;
  z-index: -1;
}
</style>
