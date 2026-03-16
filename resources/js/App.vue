<script setup lang="ts">
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

</script>

<template>
  <section class="text-white w-full h-full">
    <base-header-nav :nav="nav" />
    <div id="app-themeable">
      <router-view />
    </div>
  </section>
</template>
