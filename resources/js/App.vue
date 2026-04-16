<script setup lang="ts">
  import { computed } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

  const appStore = useAppStore();
  const theme = computed(() => (appStore.theme === 0 ? 'light' : 'dark'));
</script>

<template>
  <section class="flex min-h-svh w-full flex-col text-white">
    <div id="app-themeable" class="flex flex-1 flex-col" :class="`theme-${theme}`">
      <router-view />
    </div>
  </section>
</template>
