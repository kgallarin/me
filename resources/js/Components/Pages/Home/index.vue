<script setup lang="ts">
  import { ref } from 'vue';

  import LandingHero from '@/Components/Partials/Home/LandingHero/index.vue';
  import Projects from '@/Components/Partials/Home/Projects/index.vue';

  const isHoveredRight = ref(false);
  const isHoveredLeft = ref(false);

  const handleHoverLeft = () => {
    isHoveredLeft.value = true;
  };
  const handleHoverRight = () => {
    isHoveredRight.value = true;
  };

  const handleHoverLeave = () => {
    isHoveredRight.value = false;
    isHoveredLeft.value = false;
  };
</script>

<template>
  <landing-hero
    :is-hovered-right="isHoveredRight"
    :is-hovered-left="isHoveredLeft"
    @hover-right="handleHoverRight"
    @hover-left="handleHoverLeft"
    @hover-leave="handleHoverLeave"
  />
  <div class="container mx-auto max-w-screen-xl">
    <projects />
  </div>
</template>
