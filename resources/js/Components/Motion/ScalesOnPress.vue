<script lang="ts" setup>
  import { motion } from 'motion-v';

  import { computed } from 'vue';

  const props = defineProps({
    whilePress: {
      type: Object,
      default: () => ({
        scale: 0.95,
      }),
      description: 'Scale on press',
    },

    whileHover: {
      type: Object,
      default: () => ({
        scale: 1.0,
      }),
      description: 'Scale on hover',
    },
  });

  const whilePress = computed(() => props.whilePress);
  const whileHover = computed(() => props.whileHover);
</script>

<template>
  <motion.div :while-hover="whileHover" :while-press="whilePress">
    <slot />
  </motion.div>
</template>
