<script setup lang="ts">
  import { ref } from 'vue';
  import HeroImage from '@/Components/Partials/Home/LandingHero/HeroImage.vue';
  import MidLrTexts from '@/Components/Partials/Home/LandingHero/MidLRTexts.vue';
  import SwooshLayeredBg from '@/Components/Motion/SwooshLayeredBg.vue';

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
  <div class="flex font-acumin justify-between relative overflow-hidden">
    <!-- Background Layers -->
    <swoosh-layered-bg
      container-classes="absolute inset-0 pointer-events-none z-0"

      first-bg-classes="absolute inset-0 bg-[url('@images/swoosh_gray.png')] bg-right bg-no-repeat"
      second-bg-classes="absolute inset-0 bg-[url('@images/swoosh_blue.png')] bg-right bg-no-repeat"

      :is-hovered-right="isHoveredRight"
      :is-hovered-left="isHoveredLeft"

      :animate-prop-bg1="{
        opacity: isHoveredRight ? 1 : 0,
        x: isHoveredRight ? 0 : 50,
      }"

      :animate-prop-bg2="{
        opacity: isHoveredRight ? 1 : 0,
        x: isHoveredRight ? 0 : 50,
      }"
    />

    <swoosh-layered-bg
      container-classes="absolute inset-0 pointer-events-none z-0"

      first-bg-classes="absolute inset-0 bg-[url('@images/swoosh_green.png')] bg-left bg-no-repeat"
      second-bg-classes="absolute inset-0 bg-[url('@images/swoosh_yellow.png')] bg-left bg-no-repeat"

      :is-hovered-right="isHoveredRight"
      :is-hovered-left="isHoveredLeft"

      :animate-prop-bg1="{
        opacity: isHoveredLeft ? 1 : 0,
        x: isHoveredLeft ? 0 : 50,
      }"

      :animate-prop-bg2="{
        opacity: isHoveredLeft ? 1 : 0,
        x: isHoveredLeft ? 0 : 50,
      }"
    />

    <mid-lr-texts class="absolute z-0" />

    <!-- middle-->
    <hero-image
      class="relative z-10"
      @hover-right="handleHoverRight"
      @hover-left="handleHoverLeft"
      @hover-leave="handleHoverLeave"
    />
  </div>
</template>
