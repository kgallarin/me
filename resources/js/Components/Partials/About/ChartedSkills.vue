<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import kgChart1 from '@images/me/kg_chart1.png';

  import { ContentResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import SafeHtml from '@/Components/Common/SafeHtml.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  const props = defineProps({
    content: {
      type: Object as PropType<ContentResponseDTO>,
      required: true,
    },
    animateOnce: {
      type: Boolean,
      default: false,
    },
    animateOnlyScrollDown: {
      type: Boolean,
      default: false,
    },
    noAnimation: {
      type: Boolean,
      default: false,
    },
  });

  const perceptiveSide = computed(() => props.content.content[0]);
  const developerSide = computed(() => props.content.content[1]);
</script>

<template>
  <section data-testid="charted-skills" class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-16 md:py-32">
      <div class="align-center flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-0">
        <div>
          <scroll-reveal
            direction="right"
            :animate-once="animateOnce"
            :animate-only-scroll-down="animateOnlyScrollDown"
            :no-animation="noAnimation"
          >
            <h3 class="mb-5 font-proxima text-3xl font-light">{{ perceptiveSide?.title }}</h3>
            <p class="font-proxima font-light leading-snug text-tertiary">
              <safe-html :html="perceptiveSide?.text" />
            </p>
          </scroll-reveal>
        </div>

        <scroll-reveal
          direction="up"
          :delay="0.2"
          :animate-once="animateOnce"
          :animate-only-scroll-down="animateOnlyScrollDown"
          :no-animation="noAnimation"
        >
          <base-image
            class="h-full w-full object-cover sm:h-[340px] sm:w-[340px]"
            :src="kgChart1"
            alt="kgallarin cart"
            rounded="rounded-full"
          />
        </scroll-reveal>

        <div class="w-full text-right md:w-auto">
          <scroll-reveal
            direction="left"
            :animate-once="animateOnce"
            :animate-only-scroll-down="animateOnlyScrollDown"
            :no-animation="noAnimation"
          >
            <h3 class="mb-5 font-proxima text-3xl font-light">{{ developerSide?.title }}</h3>

            <p class="text-tertiar font-proxima font-light leading-snug">
              <safe-html :html="developerSide?.text" />
            </p>
          </scroll-reveal>
        </div>
      </div>
    </base-container>
  </section>
</template>
