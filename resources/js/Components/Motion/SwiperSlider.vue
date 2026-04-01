<script setup lang="ts">
  import { Autoplay, Navigation, Pagination } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';

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
  }

  withDefaults(defineProps<Props>(), {
    autoplay: true,
    interval: 10000,
    showArrows: true,
    showIndicators: true,
    aspectRatio: 'aspect-video',
    itemsToShow: 1,
    imageClasses: 'rounded-md',
    gap: 16,
  });

  const modules = [Autoplay, Navigation, Pagination];
</script>

<template>
  <div class="swiper-main group relative w-full overflow-hidden rounded-lg" :class="aspectRatio">
    <swiper
      :modules="modules"
      :slides-per-view="itemsToShow"
      :space-between="gap"
      :loop="items.length > itemsToShow"
      :autoplay="
        autoplay && items.length > itemsToShow
          ? { delay: interval, disableOnInteraction: false, pauseOnMouseEnter: true }
          : false
      "
      :navigation="showArrows && items.length > itemsToShow"
      :pagination="showIndicators && items.length > itemsToShow ? { clickable: true } : false"
      class="h-full w-full"
    >
      <swiper-slide v-for="(item, index) in items" :key="index" class="h-full w-full">
        <img :src="item" :class="imageClasses" class="h-full w-full object-cover object-left" alt="Carousel Image" />
      </swiper-slide>
    </swiper>
  </div>
</template>
