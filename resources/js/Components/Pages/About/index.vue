<script setup lang="ts">
  import { computed } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import Splider from '@/Components/Motion/Splider.vue';
  import SkillChart from '@/Components/Partials/SkillChart/index.vue';

  const appStore = useAppStore();

  const socialImages = import.meta.glob<{ default: string }>('/resources/images/social_images/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const images = Object.values(socialImages).map((image) => (image as { default: string }).default);

  const responsiveQueries = computed(() => appStore.queryBreakpoints(8, 4, 3));
</script>

<template>
  <section class="border-b border-gray-100">
    <base-container>
      <div
        class="flex w-full flex-col items-center justify-between border-b border-gray-200 py-6 md:flex-row md:py-8 lg:py-16"
      >
        <div class="w-full text-balance text-primary md:w-5/12">
          <h1 class="mb-4 text-6xl lowercase tracking-tight text-tertiary">$ whoami</h1>
          <p class="mb-4 font-acumin text-xl font-light">
            I'm a frontend/software engineer from
            <br />
            ☀️ Manila, Philippines.
          </p>

          <p class="font-proxima text-base font-light leading-relaxed">
            With over a decade of experience, I bridge the gap between design and development, delivering intuitive
            client solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the
            syntax, I enjoy spending time working out, gaming occasionally, exploring places, listening to music,
            cooking and learning new things.
          </p>
        </div>

        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <img
            class="rounded-md object-cover shadow-lg"
            src="@images/me/kg_about.png"
            alt="kevin gallarin, skill pie"
          />
        </div>
      </div>

      <div class="image-gallery py-10">
        <splider
          :items="images"
          :autoplay="true"
          :interval="8000"
          :show-indicators="true"
          :show-arrows="false"
          :items-to-show="responsiveQueries"
          fixed-height="100px"
        />
      </div>
    </base-container>
  </section>

  <section class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-16 md:py-32">
      <div class="align-center flex w-full flex-col items-start justify-between gap-8 md:flex-row md:gap-0">
        <div>
          <h3 class="mb-4 font-proxima text-3xl font-light">Perceptive side</h3>
          <ul class="font-proxima font-light leading-8 text-tertiary">
            <li>Animation Fluidity</li>
            <li>Attention to details and typography</li>
            <li>Communicating with artist's perspective</li>
            <li>Design Feels</li>
            <li>Eye on design</li>
            <li>Finding beauty to everything</li>
            <li>User Experience</li>
          </ul>
        </div>

        <img class="w-[340px] object-cover" src="@images/me/kg_chart1.png" alt="kgallarin cart" />

        <div class="w-full text-right md:w-auto">
          <h3 class="mb-4 font-proxima text-3xl font-light">Developer side</h3>
          <ul class="font-proxima font-light leading-8 text-tertiary">
            <li>Front-end development</li>
            <li>Sass, LESS, S/CSS</li>
            <li>State Management</li>
            <li>Automated testing</li>
            <li>Form Manipulation</li>
            <li>JavaScript / TypeScript</li>
            <li>Laravel / GraphQL</li>
            <li>Eating Pizza</li>
            <li>Drinking Coffee</li>
          </ul>
        </div>
      </div>
    </base-container>
  </section>

  <section class="random-facts">
    <base-container class="flex flex-col gap-10 py-24 lg:flex-row">
      <div class="w-full pr-0 lg:w-8/12 lg:pr-20">
        <img class="w-full" src="@images/me/ojophile2.png" alt="kevin gallarin audio" />
      </div>
      <div class="pt-8 text-center lg:text-left">
        <h3 class="mb-6 font-proxima text-3xl font-light">Random Nuggets</h3>

        <ul class="font-proxima font-light leading-10 text-tertiary">
          <li>Workout and driving is my Zen time!</li>
          <li>Animal lover</li>
          <li>I love occasionally playing ARPGs</li>
          <li>I'm a bit sensitive to aesthetics</li>
          <li>I play guitar, and can sing (in tune)</li>
          <li>Analog/High-Fi audio enthusiast</li>
          <li>Always keen to adventures</li>
          <li>A bit of a clean freak</li>
          <li>Always wants improvement</li>
          <li>Loves cooking</li>
          <li>I drink a lot of coffee</li>
        </ul>
      </div>
    </base-container>
  </section>

  <section class="skills-chart shadow-bottom shadow-custom-mid-inset">
    <base-container class="px-0 py-12 pb-20 md:px-4 md:py-24 md:pb-24">
      <div class="w-full text-center">
        <h2 class="mb-12 font-proxima text-4xl font-light">My Skills</h2>
        <div class="w-full">
          <skill-chart />
        </div>
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
