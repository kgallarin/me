<script setup lang="ts">
  import { ref } from 'vue';
  import { motion } from 'motion-v';

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
  <div class="grid justify-items-stretch grid-cols-2 gap-4 mb-2">
    <div
      class="relative cursor-pointer"
    >

      <div
        class="hover-me-baby absolute z-10 inset-0"
        @mouseover="handleMouseOverLeft"
        @mouseleave="handleMouseLeaveLeft"
      ></div>

      <motion.div
        :class="[textLeftClasses, 'justify-self-end']"
        :initial="{ x: 0 }"
        :animate="{ x: isHoveredLeft ? -animateLeftInPixels : 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        {{ textLeft }}
      </motion.div>
    </div>
    <div
      class="relative cursor-pointer"
    >
      <div
        class="hover-me-baby absolute z-40 inset-0"
        @mouseover="handleMouseOverRight"
        @mouseleave="handleMouseLeaveRight"
      ></div>

      <motion.div
        :class="[textRightClasses, 'justify-self-start']"
        :initial="{ x: 0 }"
        :animate="{ x: isHoveredRight ? animateRightInPixels : 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        {{ textRight }}
      </motion.div>
    </div>
  </div>
</template>
