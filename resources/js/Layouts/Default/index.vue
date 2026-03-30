<script setup lang="ts">
  import BaseFooter from '@/Components/Common/BaseFooter.vue';
  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

  const defaultNav = [
    {
      label: 'skills',
      href: '/',
      icon: '',
    },
    {
      label: 'work',
      href: '/',
      icon: '',
    },
    {
      label: 'kudos',
      href: '/',
      icon: '',
    },
    {
      label: 'contact',
      href: '/',
      icon: '',
    },
  ];
</script>

<template>
  <base-header-nav :nav="defaultNav" />
  <!-- add more layout components if necessary -->
  <router-view />

  <base-footer :nav="defaultNav" />
</template>

<style scoped></style>
