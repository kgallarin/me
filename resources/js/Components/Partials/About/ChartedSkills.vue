<script setup lang="ts">
  import { PropType } from 'vue';

  import kgChart1 from '@images/me/kg_chart1.png';

  import { ChartedSkillsResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  defineProps({
    skills: {
      type: Object as PropType<ChartedSkillsResponseDTO>,
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
  });
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
          >
            <h3 class="mb-4 font-proxima text-3xl font-light">{{ skills.leftTitle }}</h3>
            <ul class="font-proxima font-light leading-8 text-tertiary">
              <li v-for="(skill, index) in skills.leftContent" :key="index">
                {{ skill }}
              </li>
            </ul>
          </scroll-reveal>
        </div>

        <scroll-reveal
          direction="up"
          :delay="0.2"
          :animate-once="animateOnce"
          :animate-only-scroll-down="animateOnlyScrollDown"
        >
          <base-image
            class="h-full w-full object-cover sm:h-[340px] sm:w-[340px]"
            :src="kgChart1"
            alt="kgallarin cart"
            rounded="rounded-full"
          />
        </scroll-reveal>

        <div class="w-full text-right md:w-auto">
          <scroll-reveal direction="left" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
            <h3 class="mb-4 font-proxima text-3xl font-light">{{ skills.rightTitle }}</h3>
            <ul class="font-proxima font-light leading-8 text-tertiary">
              <li v-for="(skill, index) in skills.rightContent" :key="index">
                {{ skill }}
              </li>
            </ul>
          </scroll-reveal>
        </div>
      </div>
    </base-container>
  </section>
</template>
