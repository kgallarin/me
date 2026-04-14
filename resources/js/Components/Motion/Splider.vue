<script setup lang="ts">
  import { computed } from 'vue';

  import { Splide, SplideSlide } from '@splidejs/vue-splide';

  import { BaseImageProps } from '@/Types/Props';
  import { ImageDTO } from '@/Types/Responses';

  import BaseImage from '@/Components/Common/BaseImage.vue';

  interface Props {
    items?: string[] | ImageDTO[];
    autoplay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showIndicators?: boolean;
    aspectRatio?: string;
    itemsToShow: number;
    gap?: number;
    imageClasses?: string;
    fixedHeight?: string | null;
    rewind?: boolean;
    drag?: boolean;
    breakpoints?: Record<string, unknown>;
  }

  const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    autoplay: true,
    interval: 15000,
    showArrows: false,
    showIndicators: true,
    aspectRatio: '',
    itemsToShow: 1,
    imageClasses: 'rounded-md',
    gap: 8,
    fixedHeight: null,
    rewind: true,
    drag: false,
    breakpoints: () => ({}),
  });

  const options = computed(() => ({
    type: 'slide',
    perPage: props.itemsToShow,
    gap: props.gap,
    drag: props.drag,
    arrows: props.showArrows,
    pagination: props.showIndicators,
    autoplay: props.autoplay,
    interval: props.interval,
    pauseOnHover: true,
    resetProgress: false,
    fixedHeight: props.fixedHeight,
    rewind: props.rewind,
    breakpoints: props.breakpoints,
  }));
</script>

<template>
  <div class="splide-main group relative w-full overflow-hidden rounded-sm" :class="aspectRatio">
    <splide data-testid="slider" :options="options" class="h-full w-full">
      <slot v-if="$slots.default" />
      <template v-else>
        <splide-slide v-for="(item, index) in items" :key="index" class="h-full w-full">
          <base-image
            :src="typeof item === 'string' ? item : item.url"
            :class="['h-full w-full object-cover object-left']"
            :rounded="imageClasses"
            :alt="typeof item === 'string' ? '' : item.alt"
            show-loader
          />
        </splide-slide>
      </template>
    </splide>
  </div>
</template>
