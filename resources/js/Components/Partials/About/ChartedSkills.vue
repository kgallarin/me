<script setup lang="ts">
  import kgChart1 from '@images/me/kg_chart1.png';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';

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
</script>

<template>
  <section class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-16 md:py-32">
      <div class="align-center flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-0">
        <div>
          <h3 class="mb-4 font-proxima text-3xl font-light">Perceptive side</h3>
          <ul class="font-proxima font-light leading-8 text-tertiary">
            <li v-for="(skill, index) in perceptiveSkills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>

        <base-image class="w-[340px] object-cover" :src="kgChart1" alt="kgallarin cart" rounded="rounded-full" />

        <div class="w-full text-right md:w-auto">
          <h3 class="mb-4 font-proxima text-3xl font-light">Developer side</h3>
          <ul class="font-proxima font-light leading-8 text-tertiary">
            <li v-for="(skill, index) in developerSkills" :key="index">
              {{ skill }}
            </li>
          </ul>
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped></style>
