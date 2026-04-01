<script setup lang="ts">
  import { Splide, SplideSlide } from '@splidejs/vue-splide';

  interface Props {
    items: string[];
    autoplay?: boolean;
    interval?: number;
    showArrows?: boolean;
    showIndicators?: boolean;
    aspectRatio?: string;
    itemsToShow: number;
    gap?: number;
    imageClasses?: string;
    fixedHeight?: string | null;
  }

  const props = withDefaults(defineProps<Props>(), {
    autoplay: true,
    interval: 10000,
    showArrows: false,
    showIndicators: true,
    aspectRatio: '',
    itemsToShow: 1,
    imageClasses: 'rounded-md',
    gap: 8,
    fixedHeight: null,
  });

  const options = {
    type: props.items.length > props.itemsToShow ? 'loop' : 'slide',
    perPage: props.itemsToShow,
    gap: props.gap,
    arrows: props.showArrows && props.items.length > props.itemsToShow,
    pagination: props.showIndicators && props.items.length > props.itemsToShow,
    autoplay: props.autoplay && props.items.length > props.itemsToShow,
    interval: props.interval,
    pauseOnHover: true,
    resetProgress: false,
    fixedHeight: props.fixedHeight,
  };
</script>

<template>
  <div class="splide-main group relative w-full overflow-hidden rounded-lg" :class="aspectRatio">
    <splide :options="options" class="h-full w-full">
      <splide-slide v-for="(item, index) in items" :key="index" class="h-full w-full">
        <img :src="item" :class="imageClasses" class="h-full w-full object-cover object-left" alt="Carousel Image" />
      </splide-slide>
    </splide>
  </div>
</template>
