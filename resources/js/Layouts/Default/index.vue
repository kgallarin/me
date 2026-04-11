<script setup lang="ts">
  import BaseFooter from '@/Components/Common/BaseFooter.vue';
  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';
  import BaseSideBar from '@/Components/Common/BaseSideBar.vue';

  const defaultNav = [
    {
      label: 'home',
      to: 'home',
      icon: 'chevron-right',
    },
    {
      label: 'about',
      to: 'about',
      icon: 'chevron-right',
    },
    {
      label: 'story',
      to: 'story',
      icon: 'chevron-right',
    },
    {
      label: 'contact',
      to: 'contact',
      icon: 'chevron-right',
    },
  ];
</script>

<template>
  <base-header-nav :nav="defaultNav" />
  <!-- add more layout components if necessary -->
  <base-side-bar :nav="defaultNav" />

  <div class="min-h-[calc(100vh-155px)]">
    <router-view />
  </div>

  <base-footer :nav="defaultNav" />
</template>
