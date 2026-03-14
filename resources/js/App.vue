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
    <div class="h-12">
      <!--        <img src="@images/kg_art_1.png" class="block mx-auto h-screen" alt="">-->
      <div class="h-64 bg-[url('@images/kg_art_1.png')] bg-contain bg-no-repeat bg-center rounded-full overflow-hidden"></div>
    </div>
  </section>
</template>
