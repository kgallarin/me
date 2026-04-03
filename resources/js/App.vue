<script setup lang="ts">
  import { computed } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

  const appStore = useAppStore();
  const theme = computed(() => (appStore.theme === 0 ? 'light' : 'dark'));
</script>

<template>
  <section class="h-full w-full text-white">
    <div id="app-themeable" :class="`theme-${theme}`">
      <router-view />
    </div>
  </section>
</template>
