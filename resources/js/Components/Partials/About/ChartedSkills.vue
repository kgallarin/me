<script setup lang="ts">
  import kgChart1 from '@images/me/kg_chart1.png';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  const perceptiveSkills = [
    'Animation Fluidity',
    'Attention to details and typography',
    "Communicating with artist's perspective",
    'Design Feels',
    'Eye on design',
    'Finding beauty to everything',
    'User Experience',
  ];

  const developerSkills = [
    'Front-end development',
    'Sass, LESS, S/CSS',
    'State Management',
    'Automated testing',
    'Form Manipulation',
    'JavaScript / TypeScript',
    'Laravel / GraphQL',
    'Eating Pizza',
    'Drinking Coffee',
  ];
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
  <section class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-16 md:py-32">
      <div class="align-center flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-0">
        <div>
          <scroll-reveal
            direction="right"
            :animate-once="animateOnce"
            :animate-only-scroll-down="animateOnlyScrollDown"
          >
            <h3 class="mb-4 font-proxima text-3xl font-light">Perceptive side</h3>
            <ul class="font-proxima font-light leading-8 text-tertiary">
              <li v-for="(skill, index) in perceptiveSkills" :key="index">
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
            class="h-[340px] w-[340px] object-cover"
            :src="kgChart1"
            alt="kgallarin cart"
            rounded="rounded-full"
          />
        </scroll-reveal>

        <div class="w-full text-right md:w-auto">
          <scroll-reveal direction="left" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
            <h3 class="mb-4 font-proxima text-3xl font-light">Developer side</h3>
            <ul class="font-proxima font-light leading-8 text-tertiary">
              <li v-for="(skill, index) in developerSkills" :key="index">
                {{ skill }}
              </li>
            </ul>
          </scroll-reveal>
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped></style>
