<script setup lang="ts">
defineProps<{
  comment: IComment
}>()
defineEmits<{
  delete: []
}>()
</script>

<template>
<div>
  {{ comment.body }}
</div>
</template>
