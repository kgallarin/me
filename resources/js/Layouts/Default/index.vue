<script setup lang="ts">
  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  const iconLinksStore = useIconLinksStore();
  iconLinksStore.fetchIconLinks();
</script>

<template>
  <!--	for future use-->
  <div class="default layout flex flex-1 flex-col">
    <router-view />
  </div>
</template>
