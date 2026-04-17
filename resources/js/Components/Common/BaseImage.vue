<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import { BaseImageProps } from '@/Types/Props';

  const props = withDefaults(defineProps<BaseImageProps>(), {
    src: '',
    alt: '',
    showLoader: true,
    rounded: '',
    objectFit: 'cover',
  });

  const isLoaded = ref(false);
  const imgRef = ref<HTMLImageElement | null>(null);

  const onImgLoad = () => {
    setTimeout(() => {
      isLoaded.value = true;
    }, 500);
  };

  onMounted(() => {
    if (imgRef.value?.complete) {
      onImgLoad();
    }
  });
</script>

<template>
  <div data-testid="base-image" class="relative flex overflow-hidden" :class="props.rounded">
    <div v-if="!isLoaded && props.showLoader" class="skeleton absolute inset-0 z-10 w-full" :class="props.rounded" />
    <img
      ref="imgRef"
      :src="props.src"
      :alt="props.alt"
      class="w-full"
      :class="[
        props.rounded,
        `object-${props.objectFit}`,
        {
          'opacity-0': !isLoaded && props.showLoader,
          'opacity-100 transition-opacity duration-300': isLoaded || !props.showLoader,
        },
      ]"
      @load="onImgLoad"
    />
  </div>
</template>
