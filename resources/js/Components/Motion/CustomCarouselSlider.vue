<script setup lang="ts">
  import { AnimatePresence, motion } from 'motion-v';

  import { onMounted, onUnmounted, ref } from 'vue';

  type DragInfo = {
    offset: { x: number; y: number };
    velocity: { x: number; y: number };
  };

  interface Props {
    items: string[];
    autoplay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showIndicators?: boolean;
    aspectRatio?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    autoplay: true,
    interval: 10000,
    showArrows: true,
    showIndicators: true,
    aspectRatio: 'aspect-video',
  });

  const currentIndex = ref(0);
  const direction = ref(0);
  const isPaused = ref(false);

  const next = () => {
    direction.value = 1;
    currentIndex.value = (currentIndex.value + 1) % props.items.length;
  };

  const prev = () => {
    direction.value = -1;
    currentIndex.value = (currentIndex.value - 1 + props.items.length) % props.items.length;
  };

  const handleDragEnd = (_: PointerEvent | MouseEvent | TouchEvent, info: DragInfo) => {
    if (props.items.length <= 1) return;

    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      next();
    } else if (info.offset.x > swipeThreshold) {
      prev();
    }
  };

  const goTo = (index: number) => {
    direction.value = index > currentIndex.value ? 1 : -1;
    currentIndex.value = index;
  };

  let timer: ReturnType<typeof setInterval> | null = null;

  const startTimer = () => {
    if (props.autoplay) {
      timer = setInterval(() => {
        if (!isPaused.value) {
          next();
        }
      }, props.interval);
    }
  };

  const stopTimer = () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  };

  onMounted(() => {
    startTimer();
  });

  onUnmounted(() => {
    stopTimer();
  });

  const variants = {
    enter: (direction: unknown) => ({
      x: (direction as number) > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: unknown) => ({
      zIndex: 0,
      x: (direction as number) < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };
</script>

<template>
  <div
    class="group relative w-full overflow-hidden rounded-lg"
    :class="aspectRatio"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div class="relative h-full min-h-[240px] w-full">
      <AnimatePresence :initial="false" :custom="direction">
        <motion.div
          :key="currentIndex"
          drag="x"
          :drag-constraints="{ left: 0, right: 0 }"
          :drag-elastic="0.2"
          @drag-end="handleDragEnd"
          :custom="direction"
          :variants="variants"
          initial="enter"
          animate="center"
          exit="exit"
          :transition="{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }"
          class="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
        >
          <img
            v-if="items[currentIndex]"
            :src="items[currentIndex]"
            class="pointer-events-none h-full w-full object-cover object-left"
            alt="Carousel Image"
          />
        </motion.div>
      </AnimatePresence>
    </div>

    <!-- Navigation Arrows -->
    <template v-if="showArrows && items.length > 1">
      <button
        @click="prev"
        class="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/50 group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        @click="next"
        class="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/30 p-2 text-white opacity-0 backdrop-blur-md transition-all hover:bg-white/50 group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </template>

    <!-- Indicators -->
    <div v-if="showIndicators && items.length > 1" class="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
      <button
        v-for="(_, index) in items"
        :key="index"
        @click="goTo(index)"
        class="h-2 w-2 rounded-full transition-all"
        :class="index === currentIndex ? 'w-4 bg-white' : 'bg-white/50'"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
</template>
