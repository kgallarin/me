<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import kgAbout from '@images/me/kg_about.png';

  import { useAppStore } from '@/Store/Modules/App';

  import { StoryHeroResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';
  import Splider from '@/Components/Motion/Splider.vue';

  const appStore = useAppStore();

  const responsiveQueries = computed(() => appStore.queryBreakpoints(8, 4, 3));

  const props = defineProps({
    data: {
      type: Object as PropType<StoryHeroResponseDTO>,
      default: () => ({}),
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

  const heroImage = computed(() => props.data?.heroImages?.[0]);
  const socialImages = computed(() => props.data?.socialImages);
</script>

<template>
  <section class="border-b border-gray-100">
    <base-container>
      <div
        class="flex w-full flex-col items-center justify-between border-b border-gray-200 py-6 md:flex-row md:py-8 lg:py-16"
      >
        <div class="w-full text-balance text-primary md:w-5/12">
          <scroll-reveal
            direction="right"
            :animate-once="animateOnce"
            :animate-only-scroll-down="animateOnlyScrollDown"
          >
            <h1 class="mb-4 text-6xl lowercase tracking-tight text-tertiary">{{ data?.title }}</h1>
            <p v-html="data?.subtitle" class="mb-4 font-acumin text-xl font-light" />
            <p class="font-proxima text-base font-light leading-loose">
              {{ data?.description }}
            </p>
          </scroll-reveal>
        </div>

        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <scroll-reveal direction="left" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
            <base-image
              class="min-h-[300px] object-cover shadow-lg"
              rounded="rounded-md"
              :src="heroImage?.url"
              :alt="heroImage?.alt"
            />
          </scroll-reveal>
        </div>
      </div>

      <!--			images-->
      <div class="image-gallery py-10">
        <scroll-reveal direction="up" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <splider
            :items="socialImages"
            :autoplay="true"
            :interval="8000"
            :show-indicators="true"
            :show-arrows="false"
            :drag="true"
            :items-to-show="responsiveQueries"
            fixed-height="100px"
          />
        </scroll-reveal>
      </div>
    </base-container>
  </section>
</template>

<style lang="scss">
  .image-gallery {
    img {
      @apply rounded-sm border border-gray-300 p-1;
    }
  }
</style>
