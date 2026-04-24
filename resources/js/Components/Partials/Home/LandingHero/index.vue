<script setup lang="ts">
  import SwooshLayeredBg from '@/Components/Motion/SwooshLayeredBg.vue';
  import ImageHeroWithSkillTexts from '@/Components/Partials/Home/LandingHero/ImageHeroWithSkillTexts.vue';
  import MidLrTexts from '@/Components/Partials/Home/LandingHero/MidLRTexts.vue';

  defineProps({
    isHoveredRight: {
      type: Boolean,
      default: false,
    },
    isHoveredLeft: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['hover-right', 'hover-left', 'hover-leave', 'click']);
</script>

<template>
  <div
    class="hero-main relative flex justify-between overflow-hidden border-b border-secondary font-acumin"
    @click="emit('click')"
  >
    <!-- Background Layers -->
    <swoosh-layered-bg
      container-classes="pointer-events-none absolute inset-0 z-0"
      first-bg-classes="absolute inset-0 bg-[url('@images/backgrounds/webp/swoosh_gray.webp')] bg-right bg-no-repeat"
      second-bg-classes="absolute inset-0 bg-[url('@images/backgrounds/webp/swoosh_blue.webp')] bg-right bg-no-repeat"
      :is-hovered-right="isHoveredRight"
      :is-hovered-left="isHoveredLeft"
      :animate-prop-bg1="{
        opacity: isHoveredRight ? 1 : 0,
        x: isHoveredRight ? 0 : 10,
      }"
      :animate-prop-bg2="{
        opacity: isHoveredRight ? 1 : 0,
        x: isHoveredRight ? 0 : 10,
      }"
    />

    <swoosh-layered-bg
      container-classes="pointer-events-none absolute inset-0 z-0"
      first-bg-classes="absolute inset-0 bg-[url('@images/backgrounds/webp/swoosh_green.webp')] bg-left bg-no-repeat"
      second-bg-classes="absolute inset-0 bg-[url('@images/backgrounds/webp/swoosh_yellow.webp')] bg-left bg-no-repeat"
      :is-hovered-right="isHoveredRight"
      :is-hovered-left="isHoveredLeft"
      :animate-prop-bg1="{
        opacity: isHoveredLeft ? 1 : 0,
        x: isHoveredLeft ? 0 : 10,
      }"
      :animate-prop-bg2="{
        opacity: isHoveredLeft ? 1 : 0,
        x: isHoveredLeft ? 0 : 10,
      }"
    />

    <mid-lr-texts class="absolute z-0" :is-hovered-right="isHoveredRight" :is-hovered-left="isHoveredLeft" />

    <!-- middle-->
    <image-hero-with-skill-texts
      class="relative z-10"
      @hover-right="emit('hover-right')"
      @hover-left="emit('hover-left')"
      @hover-leave="emit('hover-leave')"
    />
  </div>
</template>
