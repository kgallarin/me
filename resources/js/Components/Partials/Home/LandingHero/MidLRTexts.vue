<script setup lang="ts">
  import { motion } from 'motion-v';

  defineProps({
    isHoveredLeft: {
      type: Boolean,
      default: false,
    },
    isHoveredRight: {
      type: Boolean,
      default: false,
    },
  });
</script>

<template>
  <div
    class="absolute left-0 right-0 z-10 mx-auto flex h-full w-full items-center justify-between px-2 pb-28 text-black sm:px-4 md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl"
  >
    <motion.div
      class="w-1/2 pr-[18%] text-center md:pr-[20%]"
      :initial="{ x: 0, opacity: 1 }"
      :animate="{
        opacity: isHoveredRight ? 0 : 1,
      }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <h3 class="font-proxima font-bold 2xs:text-lg xs:text-2xl sm:text-4xl md:mb-1 lg:mb-3 xl:text-6xl">perceptive</h3>
      <p
        class="shadow-thickens mr-auto hidden text-left font-light md:inline-block md:text-sm lg:w-3/4 lg:text-xl xl:w-5/6 xl:pl-[3%]"
      >
        an eye for design, feels<span class="md:hidden xl:inline-block">and attention to detail</span>
      </p>
    </motion.div>

    <motion.div
      class="w-1/2 pl-[15%] text-center"
      :initial="{ x: 0, opacity: 1 }"
      :animate="{
        opacity: isHoveredLeft ? 0 : 1,
      }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
    >
      <h3 class="font-proxima font-bold 2xs:text-lg xs:text-2xl sm:text-4xl md:mb-1 lg:mb-3 xl:text-6xl">
        {{ '<coding />' }}
      </h3>
      <p
        class="shadow-thickens ml-auto hidden pl-2 text-right font-light md:inline-block md:text-sm lg:text-xl xl:w-5/6 xl:pr-[10%]"
      >
        testing <span class="md:hidden xl:inline-block">, readability </span> <br class="md:hidden xl:inline-block" />
        and maintainability
      </p>
    </motion.div>
  </div>
</template>
