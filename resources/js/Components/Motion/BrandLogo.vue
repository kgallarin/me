<script setup lang="ts">
  import { motion } from 'motion-v';

  import BaseImage from '@/Components/Common/BaseImage.vue';

  const props = defineProps({
    spinnerTrailColor: {
      type: String,
      default: 'border-r-[#171717]',
    },
    spinnerColorBorder: {
      type: String,
      default: 'border-[white]',
    },
  });
</script>

<template>
  <div :class="`container relative flex h-full w-full items-center justify-center rounded-lg`">
    <motion.div
      :class="`absolute h-full w-full rounded-full border-2 border-solid will-change-transform ${props.spinnerColorBorder} ${props.spinnerTrailColor}`"
      :animate="{ transform: 'rotate(360deg)' }"
      :transition="{
        duration: 14.5,
        repeat: Infinity,
        ease: 'linear',
      }"
    />

    <img class="h-full w-full" alt="kevin gallarin" src="@images/me/imgkg_nb_white.png" />
  </div>
</template>
