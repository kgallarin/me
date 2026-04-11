<script setup lang="ts">
  import kgAbout from '@images/me/kg_about.png';

  import { computed } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';
  import Splider from '@/Components/Motion/Splider.vue';

  const appStore = useAppStore();

  const responsiveQueries = computed(() => appStore.queryBreakpoints(8, 4, 3));

  const socialImages = import.meta.glob<{ default: string }>('/resources/images/social_images/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const images = Object.values(socialImages).map((image) => (image as { default: string }).default);
  defineProps({
    animateOnce: {
      type: Boolean,
      default: false,
    },
    animateOnlyScrollDown: {
      type: Boolean,
      default: false,
    },
  });
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
            <h1 class="mb-4 text-6xl lowercase tracking-tight text-tertiary">$ whoami</h1>
            <p class="mb-4 font-acumin text-xl font-light">
              I'm a frontend/software engineer from
              <br />
              ☀️ Manila, Philippines.
            </p>

            <p class="font-proxima text-base font-light leading-loose">
              With over a decade of experience, I bridge the gap between design and development, delivering intuitive
              client solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the
              syntax, I enjoy spending time working out, gaming occasionally, exploring places, listening to music,
              cooking and learning new things.
            </p>
          </scroll-reveal>
        </div>

        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <scroll-reveal direction="left" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
            <base-image
              class="object-cover shadow-lg"
              rounded="rounded-md"
              :src="kgAbout"
              alt="kevin gallarin, skill pie"
            />
          </scroll-reveal>
        </div>
      </div>

      <div class="image-gallery py-10">
        <scroll-reveal direction="up" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <splider
            :items="images"
            :autoplay="true"
            :interval="8000"
            :show-indicators="true"
            :show-arrows="false"
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
