<script setup lang="ts">
  import { ref } from 'vue';
  import { motion } from 'motion-v';
  import HeroImageTextShard from '@/Components/Partials/Home/LandingHero/HeroImageTextShard.vue';

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
      <!-- Designer Image (Left Side) -->
      <motion.div
        class="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('/images/kg_art_2.png')` }"
        :animate="{
          clipPath: currentHover === 'right' ? 'inset(0 100% 0 0)' : (currentHover === 'left' ? 'inset(0 0% 0 0)' : 'inset(0 50% 0 0)'),
        }"
        :transition="{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }"
      />

      <!-- Coder Image -->
      <motion.div
        class="absolute inset-0 w-full h-full bg-contain bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('/images/kg_art_1.png')` }"
        :animate="{
          clipPath: currentHover === 'left' ? 'inset(0 0 0 100%)' : (currentHover === 'right' ? 'inset(0 0 0 0%)' : 'inset(0 0 0 50%)'),
        }"
        :transition="{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }"
      />
    </div>

    <div class="flex flex-col w-[700px] mt-auto mx-auto mb-8 text-5xl relative font-light z-30">
      <hero-image-text-shard
        class="text-2xl w-[400px] mx-auto text-shadow-thickens"
        text-left="Mockup Tools"
        text-right="S/CSS"

        text-left-classes="justify-self-center"
        text-right-classes="justify-self-center"

        :animate-left-in-pixels="140"
        :animate-right-in-pixels="50"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />


      <hero-image-text-shard
        class="-ml-10 text-4xl font-light text-shadow-thickens"
        text-left="Photoshop"
        text-right="JavaScript"

        :animate-left-in-pixels="140"
        :animate-right-in-pixels="120"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />


      <hero-image-text-shard
        class="-ml-20 text-3xl"
        text-left="User Experience"
        text-right="<html lang=['en', 'fil']>"

        :animate-left-in-pixels="150"
        :animate-right-in-pixels="180"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />


      <hero-image-text-shard
        class="-ml-36 text-5xl w-[900px] text-shadow-thickens"
        text-left="Animation"
        text-right="Web/Mobile"

        text-left-classes="justify-self-center"
        text-right-classes="justify-self-center"

        :animate-left-in-pixels="190"
        :animate-right-in-pixels="240"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />


      <hero-image-text-shard
        class="-ml-40 text-3xl w-[900px] mx-auto"
        text-left="Communication"
        text-right="File Structure/Testing"

        text-left-classes="justify-self-center"
        text-right-classes="justify-self-end"

        :animate-left-in-pixels="230"
        :animate-right-in-pixels="270"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />


      <hero-image-text-shard
        class="-ml-52 text-4xl w-[980px] "
        text-left="Detail Oriented"
        text-right="GraphQL"

        text-left-classes="justify-self-center"
        text-right-classes="justify-self-end"

        :animate-left-in-pixels="220"
        :animate-right-in-pixels="110"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />



      <hero-image-text-shard
        class="-ml-72 text-4xl w-[1090px] text-shadow-thickens"
        text-left="Responsive"
        text-right="Laravel/PHP"

        text-left-classes="justify-self-center"
        text-right-classes="justify-self-end"

        :animate-left-in-pixels="160"
        :animate-right-in-pixels="150"

        @text-hover-left="handleHoverLeft"
        @text-hover-right="handleHoverRight"
        @text-hover-leave="handleHoverLeave"
      />
    </div>
  </div>
</template>
