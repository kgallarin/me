<script setup lang="ts">
  import { ref } from 'vue';
  import { motion } from 'motion-v';
  import HeroImage from '@/Components/Partials/Home/LandingHero/HeroImage.vue';
  import HalfScreen from '@/Components/Partials/Home/LandingHero/HalfScreen.vue';

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
    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Gray Swoosh (Last Layer) -->
      <motion.div
        class="absolute inset-0 bg-[url('@images/swoosh_gray.png')] bg-right bg-no-repeat"
        :animate="{
          opacity: isHoveredRight ? 1 : 0,
          x: isHoveredRight ? 0 : 50,
        }"
        :transition="{
          duration: 0.6,
          delay: 0.2, // Animate second
          ease: 'easeOut',
        }"
      />

      <!-- Blue Swoosh (First Layer) -->
      <motion.div
        class="absolute inset-0 bg-[url('@images/swoosh_blue.png')] bg-right bg-no-repeat"
        :animate="{
          opacity: isHoveredRight ? 1 : 0,
          x: isHoveredRight ? 0 : 50,
        }"
        :transition="{
          duration: 0.6,
          delay: 0, // Animate first
          ease: 'easeOut',
        }"
      />
    </div>

    <div class="absolute inset-0 pointer-events-none z-0">
      <!-- Gray Swoosh (Last Layer) -->
      <motion.div
        class="absolute inset-0 bg-[url('@images/swoosh_green.png')] bg-left bg-no-repeat"
        :animate="{
          opacity: isHoveredLeft ? 1 : 0,
          x: isHoveredLeft ? 0 : 50,
        }"
        :transition="{
          duration: 0.6,
          delay: 0.2, // Animate second
          ease: 'easeIn',
        }"
      />

      <!-- Blue Swoosh (First Layer) -->
      <motion.div
        class="absolute inset-0 bg-[url('@images/swoosh_yellow.png')] bg-left bg-no-repeat"
        :animate="{
          opacity: isHoveredLeft ? 1 : 0,
          x: isHoveredLeft ? 0 : 50,
        }"
        :transition="{
          duration: 0.6,
          delay: 0, // Animate first
          ease: 'easeIn',
        }"
      />
    </div>

    <half-screen class="absolute z-0" />

    <!-- middle-->
    <hero-image
      class="relative z-10"
      @hover-right="handleHoverRight"
      @hover-left="handleHoverLeft"
      @hover-leave="handleHoverLeave"
    />
  </div>
</template>
