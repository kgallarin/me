<script setup lang="ts">
  import { ref } from 'vue';

  import kgArt1 from '@images/me/kg_art_1.webp';
  import kgArt2 from '@images/me/kg_art_2.webp';
  import kgArt3 from '@images/me/kg_art_3.webp';
  import { motion } from 'motion-v';

  import HeroAnimatedTexts from '@/Components/Partials/Home/LandingHero/HeroAnimatedTexts/index.vue';

  const currentHover = ref<'none' | 'left' | 'right'>('none');
  const currentImage = ref(kgArt3);

  const handleHoverLeft = () => {
    currentHover.value = 'left';
    currentImage.value = kgArt2;
    emit('hover-left');
  };

  const handleHoverRight = () => {
    currentHover.value = 'right';
    currentImage.value = kgArt1;
    emit('hover-right');
  };

  const handleHoverLeave = () => {
    currentHover.value = 'none';
    currentImage.value = kgArt3;
    emit('hover-leave');
  };

  const emit = defineEmits(['hover-left', 'hover-right', 'hover-leave']);
</script>

<template>
  <div
    class="align-center relative flex h-[450px] w-full flex-col justify-center overflow-hidden text-black md:h-auto lg:h-[800px]"
  >
    <!-- Background Images for Split Effect -->
    <div class="pointer-events-none absolute inset-0 z-40 h-full w-full overflow-hidden">
      <!-- Perceptive -->
      <motion.div
        class="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat md:bg-contain"
        :style="{ backgroundImage: `url(${kgArt2})` }"
        :animate="{
          clipPath:
            currentHover === 'right'
              ? 'inset(0 100% 0 0)'
              : currentHover === 'left'
                ? 'inset(0 0% 0 0)'
                : 'inset(0 50% 0 0)',
        }"
        :transition="{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }"
      />

      <!-- Coding -->
      <motion.div
        class="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat md:bg-contain"
        :style="{ backgroundImage: `url(${kgArt1})` }"
        :animate="{
          clipPath:
            currentHover === 'left'
              ? 'inset(0 0 0 100%)'
              : currentHover === 'right'
                ? 'inset(0 0 0 0%)'
                : 'inset(0 0 0 50%)',
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
