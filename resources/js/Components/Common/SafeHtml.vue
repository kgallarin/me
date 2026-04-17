<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    html: {
      type: String,
      default: '',
    },
  });

  const parsedParts = computed(() => {
    if (!props.html) return [];

    return props.html.split(/(<br\s*\/?>|<a\s+[^>]*href="[^"]+"[^>]*>.*?<\/a>)/gi).map((part) => {
      if (part.toLowerCase().startsWith('<br')) return { type: 'br' };

      if (part.toLowerCase().startsWith('<a')) {
        return {
          type: 'a',
          href: part.match(/href="([^"]+)"/i)?.[1],
          content: part.match(/>(.*?)<\/a>/i)?.[1],
        };
      }

      return { text: part };
    });
  });
</script>

<template>
  <template v-for="(part, index) in parsedParts" :key="index">
    <br v-if="part.type === 'br'" />
    <a v-else-if="part.type === 'a'" :href="part.href" target="_blank" class="text-blue-500 hover:underline">
      {{ part.content }}
    </a>
    <template v-else>
      {{ part.text }}
    </template>
  </template>
</template>
