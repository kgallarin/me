<script setup lang="ts">
  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';
  import { AnimatePresence, motion } from 'motion-v';

  defineProps({
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    position: {
      type: String as () => 'top' | 'bottom',
      default: 'top',
    },
    theme: {
      type: String,
      default: 'light',
    },
  });

  const emit = defineEmits(['close']);
</script>

<template>
  <animate-presence>
    <motion.div
      v-if="show"
      :initial="{ opacity: 0, x: '100%' }"
      :animate="{ opacity: 1, x: 0 }"
      :exit="{ opacity: 0, x: '100%' }"
      :class="[
        'fixed right-1 z-[60] flex items-center gap-4 rounded-lg px-4 py-2 text-sm font-medium text-black shadow-lg ring-1 ring-black ring-opacity-5 sm:right-2 md:right-4',
        position === 'top' ? 'top-20' : 'bottom-10',
        theme === 'light' ? 'bg-white' : 'bg-secondary-dark',
      ]"
    >
      <fa-icon :icon="['fas', 'bolt']" class="h-4 w-4 text-yellow-400" />
      <span class="text-xs md:text-base">
        {{ message }}
      </span>
      <button
        type="button"
        class="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none"
        @click="emit('close')"
      >
        <fa-icon :icon="['fas', 'times']" class="h-3 w-3" />
      </button>
    </motion.div>
  </animate-presence>
</template>
