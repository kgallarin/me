<script setup lang="ts">
  import { PropType, computed, ref } from 'vue';

  import { useResizeObserver } from '@vueuse/core';
  import { type MotionProps, motion, stagger, useDomRef } from 'motion-v';

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
      transition: { delayChildren: stagger(0.04, { startDelay: 0 }) },
    },
    closed: {
      transition: { delayChildren: stagger(0.5, { from: 'last' }) },
    },
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
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
      const height = typeof custom === 'number' && custom > 0 ? custom : 1000;
      return {
        clipPath: `circle(${height * 2 + 100}px at 5px 5px)`,
        transition: {
          type: 'spring',
          stiffness: 20,
          damping: 20,
          restDelta: 2,
          onComplete: () => emit('sidebar-animation-complete'),
        },
      };
    },
    closed: {
      clipPath: 'circle(0px at 5px 5px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
</script>

<template>
  <motion.div
    :initial="false"
    :animate="propsIsOpen ? 'open' : 'closed'"
    :custom="dimensions.height"
    ref="targetMain"
    class="relative h-full w-full"
  >
    <motion.div class="bg-variant" :variants="sidebarVariants" />

    <slot name="stagger-nav-slot" :variants="{ navVariants, itemVariants }" />
  </motion.div>
</template>

<style scoped lang="scss">
  .bg-variant {
    @apply absolute bottom-0 left-0 top-0 w-full bg-white;
  }
</style>
