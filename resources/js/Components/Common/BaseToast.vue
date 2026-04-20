<script setup lang="ts">
  import { computed, onUnmounted, ref, watch } from 'vue';

  import { BASE_TOAST_RIGHT_POS, BASE_TOAST_TOP_POS } from '@/Constants/app';
  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';
  import { AnimatePresence, motion } from 'motion-v';

  import { type ToastPosition } from '@/Types/General';

  const props = defineProps({
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: '',
    },
    position: {
      type: String as () => ToastPosition,
      default: 'top-right',
    },
    theme: {
      type: String,
      default: 'light',
    },
    index: {
      type: Number,
      default: 0,
    },
    toastOffset: {
      type: Number,
      default: 0,
    },
    showDelay: {
      type: Number,
      default: 0,
    },
  });

  const emit = defineEmits(['close']);

  const slots = defineSlots();

  const isVisible = ref(false);
  let delayTimer: ReturnType<typeof setTimeout> | undefined;

  watch(
    () => props.show,
    (val) => {
      clearTimeout(delayTimer);
      if (val && props.showDelay > 0) {
        delayTimer = setTimeout(() => (isVisible.value = true), props.showDelay);
      } else {
        isVisible.value = val;
      }
    },
    { immediate: true },
  );

  onUnmounted(() => clearTimeout(delayTimer));

  const TOP_POSITIONS = new Set<ToastPosition>(BASE_TOAST_TOP_POS);
  const RIGHT_POSITIONS = new Set<ToastPosition>(BASE_TOAST_RIGHT_POS);

  const isTop = computed(() => TOP_POSITIONS.has(props.position));
  const isRight = computed(() => RIGHT_POSITIONS.has(props.position));

  const positionStyle = computed(() => {
    const offset = props.index * props.toastOffset;
    return isTop.value ? { top: `${80 + offset}px` } : { bottom: `${40 + offset}px` };
  });

  const sideClasses = computed(() => (isRight.value ? 'right-1 sm:right-2 md:right-4' : 'left-1 sm:left-2 md:left-4'));

  const motionProps = computed(() => {
    const x = isRight.value ? '100%' : '-100%';
    return {
      initial: { opacity: 0, x },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x },
    };
  });
</script>

<template>
  <animate-presence>
    <motion.div
      v-if="isVisible"
      :initial="motionProps.initial"
      :animate="motionProps.animate"
      :exit="motionProps.exit"
      :style="positionStyle"
      :class="['fixed z-[60]', sideClasses, theme === 'light' ? 'bg-white' : 'bg-secondary']"
    >
      <div
        v-if="!slots.default"
        class="flex items-center gap-4 rounded-lg px-4 py-2 text-sm font-medium text-black shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <fa-icon :icon="['fas', 'bolt']" class="h-4 w-4 text-yellow-400" />
        <span class="text-xs md:text-base">
          {{ message }}
        </span>
        <button
          type="button"
          class="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none"
          @click="emit('close')"
        >
          <fa-icon :icon="['fas', 'times']" class="h-3 w-3" />
        </button>
      </div>

      <slot :close="() => emit('close')" />
    </motion.div>
  </animate-presence>
</template>
