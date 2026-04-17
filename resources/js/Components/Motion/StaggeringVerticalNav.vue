<script setup lang="ts">
  import { PropType, computed, ref } from 'vue';

  import { useResizeObserver } from '@vueuse/core';
  import { type MotionProps, motion, useDomRef } from 'motion-v';

  import { NavLink } from '@/Types/Props';

  const props = defineProps({
    navItems: {
      type: Array as PropType<NavLink[]>,
      required: true,
    },

    isOpen: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['close', 'emit', 'sidebar-animation-complete']);

  const propsIsOpen = computed(() => props.isOpen);

  const targetMain = useDomRef();
  const dimensions = ref({ width: 0, height: 0 });

  useResizeObserver(targetMain, (entries) => {
    const entry = entries[0];
    const { height, width } = entry.contentRect;
    dimensions.value = { height, width };
  });

  const navVariants: MotionProps['variants'] = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 80, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -200 },
      },
    },
  };
  const sidebarVariants: MotionProps['variants'] = {
    open: (custom?: unknown) => {
      const height = typeof custom === 'number' && custom > 0 ? custom : 1200;
      return {
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
          type: 'spring',
          stiffness: 20,
          restDelta: 2,
        },
      };
    },
    closed: {
      clipPath: 'circle(0px at 0px 0px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const onAnimationComplete = () => {
    emit('sidebar-animation-complete');
  };
</script>

<template>
  <motion.div
    :initial="'closed'"
    :animate="propsIsOpen ? 'open' : 'closed'"
    :custom="dimensions.height"
    ref="targetMain"
    class="relative h-full w-full"
  >
    <motion.div class="bg-variant" :variants="sidebarVariants" :on-animation-complete="onAnimationComplete" />

    <slot name="stagger-nav-slot" :variants="{ navVariants, itemVariants }" />
  </motion.div>
</template>

<style scoped lang="scss">
  .bg-variant {
    @apply absolute bottom-0 left-0 right-0 top-0 w-full bg-white;
  }
</style>
