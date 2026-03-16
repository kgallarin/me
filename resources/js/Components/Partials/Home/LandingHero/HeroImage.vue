<script setup lang="ts">
  import { ref } from 'vue';
  import { motion } from 'motion-v';
  import HeroAnimatedTexts from '@/Components/Partials/Home/LandingHero/HeroAnimatedTexts/index.vue';

  const currentHover = ref<'none' | 'left' | 'right'>('none');
  const currentImage = ref('kg_art_3');

  const handleHoverLeft = () => {
    currentHover.value = 'left';
    currentImage.value = 'kg_art_2';
    emit('hover-left');
  };

  const handleHoverRight = () => {
    currentHover.value = 'right';
    currentImage.value = 'kg_art_1';
    emit('hover-right');
  };

  const handleHoverLeave = () => {
    currentHover.value = 'none';
    currentImage.value = 'kg_art_3';
    emit('hover-leave');
  };

  const emit = defineEmits(['hover-left', 'hover-right', 'hover-leave']);
</script>

<template>
  <div class="text-black justify-center align-center flex flex-col w-full relative overflow-hidden h-[700px]">
    <!-- Background Images for Split Effect -->
    <div class="absolute inset-0 w-full h-full z-40 overflow-hidden pointer-events-none">
      <!-- Perceptive -->
      <motion.div
        class="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('/images/kg_art_2.png')` }"
        :animate="{
          clipPath: currentHover === 'right' ? 'inset(0 100% 0 0)' : (currentHover === 'left' ? 'inset(0 0% 0 0)' : 'inset(0 50% 0 0)'),
        }"
        :transition="{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }"
      />

      <!-- Coding -->
      <motion.div
        class="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('/images/kg_art_1.png')` }"
        :animate="{
          clipPath: currentHover === 'left' ? 'inset(0 0 0 100%)' : (currentHover === 'right' ? 'inset(0 0 0 0%)' : 'inset(0 0 0 50%)'),
        }"
        :transition="{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }"
      />
    </div>

    <hero-animated-texts
      @hover-left="handleHoverLeft"
      @hover-right="handleHoverRight"
      @hover-leave="handleHoverLeave"
    />
  </div>
</template>
