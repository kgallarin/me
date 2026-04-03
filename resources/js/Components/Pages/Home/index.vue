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
  <div class="flex min-h-screen flex-col">
    <landing-hero
      :is-hovered-right="isHoveredRight"
      :is-hovered-left="isHoveredLeft"
      @hover-right="handleHoverRight"
      @hover-left="handleHoverLeft"
      @hover-leave="handleHoverLeave"
    />
    <!--  <div class="bg-gray-lighter">-->
    <div
      class="flex-1 bg-gray-lighter bg-[url('@images/backgrounds/leaves-4.png')] bg-blend-multiply shadow-custom-mid-inset"
    >
      <projects />
    </div>
  </div>
</template>
