<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import { ContentResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import SafeHtml from '@/Components/Common/SafeHtml.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  const props = defineProps({
    content: {
      type: Object as PropType<ContentResponseDTO>,
      required: true,
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

  const heroImage = computed(() => props.content?.heroImages?.[0]);
</script>

<template>
  <section data-testid="random-facts" class="random-facts">
    <base-container class="flex flex-col gap-10 py-24 lg:flex-row">
      <div class="w-full pr-0 lg:w-8/12 lg:pr-20">
        <scroll-reveal direction="right" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <base-image class="w-full" :src="heroImage?.url" alt="kevin gallarin audio" />
        </scroll-reveal>
      </div>
      <div class="pt-8 text-center lg:text-left">
        <scroll-reveal direction="left" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <h3 class="mb-6 font-proxima text-3xl font-light">{{ content.content?.[0]?.title || content.title }}</h3>

          <div v-for="(section, index) in content.content" :key="index">
            <h4 v-if="section.title" class="mb-2 text-xl font-semibold">{{ section.title }}</h4>
            <p class="font-proxima font-light leading-snug text-tertiary">
              <safe-html :html="section.text" />
            </p>
          </div>
        </scroll-reveal>
      </div>
    </base-container>
  </section>
</template>
