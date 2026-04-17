<script setup lang="ts">
  defineProps({
    html: {
      type: String,
      default: '',
    },
  });
</script>

<template>
  <span v-if="html" v-html="html" />
</template>
