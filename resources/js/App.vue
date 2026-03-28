<script setup lang="ts">
  import { computed } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

  const nav = [
    {
      label: 'skills',
      href: '/',
      icon: 'home',
    },
    {
      label: 'work',
      href: '/',
      icon: 'home',
    },
    {
      label: 'kudos',
      href: '/',
      icon: 'home',
    },
    {
      label: 'contact',
      href: '/',
      icon: 'home',
    },
  ];

  const appStore = useAppStore();
  const theme = computed(() => (appStore.theme === 0 ? 'light' : 'dark'));
</script>

<template>
  <section class="h-full w-full text-white">
    <base-header-nav :nav="nav" />
    <div id="app-themeable" :class="`theme-${theme}`">
      <router-view />
    </div>
  </section>
</template>
