<script setup lang="ts">
  import BaseFooter from '@/Components/Common/BaseFooter.vue';
  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

  const defaultNav = [
    {
      label: 'skills',
      to: 'home',
      icon: '',
    },
    {
      label: 'about',
      to: 'about',
      icon: '',
    },
    {
      label: 'kudos',
      to: 'home',
      icon: '',
    },
    {
      label: 'contact',
      to: 'home',
      icon: '',
    },
  ];
</script>

<template>
  <base-header-nav :nav="defaultNav" />
  <!-- add more layout components if necessary -->
  <div class="min-h-[calc(100vh-155px)]">
    <router-view />
  </div>

  <base-footer :nav="defaultNav" />
</template>

<style scoped></style>
