<script setup lang="ts">
  defineProps({
    sandwich: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div
    class="lg:max-w-screen-lg"
    :class="[{ 'shadow-bottom bg-gray-lighter': sandwich }, 'mx-auto xl:max-w-screen-xl']"
  >
    <slot />
  </div>
</template>
