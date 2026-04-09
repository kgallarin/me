<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  interface BaseImageProps {
    src: string;
    alt: string;
    showLoader?: boolean;
    rounded?: string;
  }

  const props = withDefaults(defineProps<BaseImageProps>(), {
    showLoader: true,
    rounded: '',
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
  <div class="relative flex overflow-hidden" :class="props.rounded">
    <div
      v-if="!isLoaded && props.showLoader"
      class="skeleton absolute inset-0 z-10 h-full w-full"
      :class="props.rounded"
    />
    <img
      ref="imgRef"
      :src="props.src"
      :alt="props.alt"
      class="object-inherit h-full w-full"
      :class="[
        props.rounded,
        {
          'opacity-0': !isLoaded && props.showLoader,
          'opacity-100 transition-opacity duration-300': isLoaded || !props.showLoader,
        },
      ]"
      @load="onImgLoad"
    />
  </div>
</template>

<style scoped>
  .object-inherit {
    object-fit: inherit;
    object-position: inherit;
  }
</style>
