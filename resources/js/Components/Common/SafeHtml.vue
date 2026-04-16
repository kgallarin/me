<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    html: {
      type: String,
      default: '',
    },
  });

  const parts = computed(() => {
    if (!props.html) return [];
    return props.html.split(/<br\s*\/?>/i);
  });
</script>

<template>
  <template v-for="(part, index) in parts" :key="index">
    {{ part }}
    <br v-if="index < parts.length - 1" />
  </template>
</template>
