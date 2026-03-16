<script setup lang="ts">
  import HeroImageTextShard from '@/Components/Partials/Home/LandingHero/HeroAnimatedTexts/HeroImageTextShard.vue';

  const handleHoverLeft = () => emit('hover-left');
  const handleHoverRight = () => emit('hover-right');
  const handleHoverLeave = () => emit('hover-leave');

  const emit = defineEmits(['hover-left', 'hover-right', 'hover-leave']);
</script>

<template>
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
      text-right="TS/JavaScript"

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
      text-right="Structure,Testing"

      text-left-classes="justify-self-center"
      text-right-classes="justify-self-end"

      :animate-left-in-pixels="230"
      :animate-right-in-pixels="280"

      @text-hover-left="handleHoverLeft"
      @text-hover-right="handleHoverRight"
      @text-hover-leave="handleHoverLeave"
    />

    <hero-image-text-shard
      class="-ml-52 text-4xl w-[980px] "
      text-left="Detail Oriented"
      text-right="Forms, GraphQL"

      text-left-classes="justify-self-center"
      text-right-classes="justify-self-end"

      :animate-left-in-pixels="220"
      :animate-right-in-pixels="230"

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
</template>
