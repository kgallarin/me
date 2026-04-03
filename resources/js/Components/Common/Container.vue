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
    :class="[{ 'shadow-bottom bg-gray-lighter': sandwich }, 'mx-auto max-w-screen-xl py-20']"
  >
    <slot />
  </div>
</template>
