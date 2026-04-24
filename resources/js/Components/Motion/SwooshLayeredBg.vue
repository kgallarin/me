<script setup lang="ts">
  import { motion } from 'motion-v';

  defineProps({
    containerClasses: {
      type: String,
      default: '',
    },
    firstBgClasses: {
      type: String,
      default: '',
    },
    secondBgClasses: {
      type: String,
      default: '',
    },
    isHoveredRight: {
      type: Boolean,
      required: true,
    },
    isHoveredLeft: {
      type: Boolean,
      required: true,
    },
    animatePropBg1: {
      type: Object,
      default: () => ({}),
    },
    animatePropBg2: {
      type: Object,
      default: () => ({}),
    },
  });
</script>

<template>
  <div :class="containerClasses">
    <!-- Last Layer -->
    <motion.div
      :class="firstBgClasses"
      :animate="animatePropBg1"
      :transition="{
        duration: 0.6,
        delay: 0.2, // Animate second
        ease: 'easeOut',
      }"
    />

    <!-- First Layer -->
    <motion.div
      :class="secondBgClasses"
      :animate="animatePropBg2"
      :transition="{
        duration: 0.6,
        delay: 0, // Animate first
        ease: 'easeOut',
      }"
    />
  </div>
</template>
