<script setup lang="ts">
  import { motion } from 'motion-v';

  import { ref } from 'vue';

  defineProps({
    textLeft: {
      type: String,
      default: 'left',
      required: true,
    },
    textRight: {
      type: String,
      default: 'right',
      required: true,
    },
    textLeftClasses: {
      type: String,
      default: '',
    },
    textRightClasses: {
      type: String,
      default: '',
    },
    animateLeftInPixels: {
      type: Number,
      default: 350,
    },
    animateRightInPixels: {
      type: Number,
      default: 350,
    },
    isAnyHoveredLeft: {
      type: Boolean,
      default: false,
    },
    isAnyHoveredRight: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['textHoverLeft', 'textHoverRight', 'textHoverLeave']);

  const isHoveredLeft = ref(false);
  const isHoveredRight = ref(false);

  const handleMouseOverLeft = () => {
    isHoveredLeft.value = true;
    emit('textHoverLeft');
  };

  const handleMouseLeaveLeft = () => {
    isHoveredLeft.value = false;
    emit('textHoverLeave');
  };

  const handleMouseOverRight = () => {
    isHoveredRight.value = true;
    emit('textHoverRight');
  };

  const handleMouseLeaveRight = () => {
    isHoveredRight.value = false;
    emit('textHoverLeave');
  };
</script>

<template>
  <div class="mb-2 grid grid-cols-2 justify-items-stretch gap-4">
    <div class="relative cursor-pointer">
      <div
        class="hover-me-baby absolute inset-0 z-10"
        @mouseover="handleMouseOverLeft"
        @mouseleave="handleMouseLeaveLeft"
      ></div>

      <motion.div
        :class="[textLeftClasses, 'justify-self-end', 'font-light']"
        :initial="{ x: 0, color: '', fontWeight: 300, opacity: 1 }"
        :animate="{
          x: isHoveredLeft ? -animateLeftInPixels : 0,
          color: isHoveredLeft ? '#060606' : '#E5E4E2',
          fontWeight: isHoveredLeft ? 700 : 300,
          opacity: isAnyHoveredRight ? 0 : 1,
        }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        {{ textLeft }}
      </motion.div>
    </div>
    <div class="relative cursor-pointer">
      <div
        class="hover-me-baby absolute inset-0 z-40"
        @mouseover="handleMouseOverRight"
        @mouseleave="handleMouseLeaveRight"
      ></div>

      <motion.div
        :class="[textRightClasses, 'justify-self-start', 'font-light']"
        :initial="{ x: 0, color: '', fontWeight: 300, opacity: 1 }"
        :animate="{
          x: isHoveredRight ? animateRightInPixels : 0,
          color: isHoveredRight ? '#060606' : '#E5E4E2',
          fontWeight: isHoveredRight ? 700 : 300,
          opacity: isAnyHoveredLeft ? 0 : 1,
        }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        {{ textRight }}
      </motion.div>
    </div>
  </div>
</template>
