<script setup lang="ts">
  import { useIntersectionObserver, useWindowScroll } from '@vueuse/core';
  import { motion } from 'motion-v';

  import { ref, watch } from 'vue';

  const props = defineProps({
    delay: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0.6,
    },
    direction: {
      type: String as () => 'up' | 'down' | 'left' | 'right' | 'none',
      default: 'up',
    },
    distance: {
      type: Number,
      default: 50,
    },
    animateOnce: {
      type: Boolean,
      default: false,
    },
    animateOnlyScrollDown: {
      type: Boolean,
      default: false,
    },
  });

  const { y } = useWindowScroll();
  const prevY = ref(y.value);
  const isScrollingDown = ref(true);

  watch(y, (newY) => {
    if (newY > prevY.value) {
      isScrollingDown.value = true;
    } else if (newY < prevY.value) {
      isScrollingDown.value = false;
    }
    prevY.value = newY;
  });

  const target = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  const skipAnimation = ref(false);

  useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        if (!props.animateOnlyScrollDown || isScrollingDown.value) {
          isVisible.value = true;
          skipAnimation.value = false;
        } else {
          isVisible.value = true;
          skipAnimation.value = true;
        }
      } else if (!props.animateOnce) {
        isVisible.value = false;
      }
    },
    { threshold: 0.1 },
  );

  const getInitialX = (direction: string, distance: number) => {
    if (direction === 'left') return distance;
    if (direction === 'right') return -distance;
    return 0;
  };

  const getInitialY = (direction: string, distance: number) => {
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  };
</script>

<template>
  <div ref="target">
    <motion.div
      :initial="{
        opacity: 0,
        x: getInitialX(direction, distance),
        y: getInitialY(direction, distance),
      }"
      :animate="{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : getInitialX(direction, distance),
        y: isVisible ? 0 : getInitialY(direction, distance),
      }"
      :transition="{
        duration: skipAnimation ? 0 : duration,
        delay: skipAnimation ? 0 : delay,
        ease: 'easeOut',
      }"
    >
      <slot />
    </motion.div>
  </div>
</template>
