<script setup lang="ts">
  import BaseFooter from '@/Components/Common/BaseFooter.vue';
  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

  const defaultNav = [
    {
      label: 'about',
      to: 'about',
      icon: '',
    },
    {
      label: 'story',
      to: 'story',
      icon: '',
    },
    {
      label: 'contact',
      to: 'contact',
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
