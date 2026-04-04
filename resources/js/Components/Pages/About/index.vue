<script setup lang="ts">
  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import Splider from '@/Components/Motion/Splider.vue';
  import SkillChart from '@/Components/Partials/SkillChart/index.vue';

  const socialImages = import.meta.glob<{ default: string }>('/resources/images/social_images/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const images = Object.values(socialImages).map((image) => (image as { default: string }).default);
</script>

<template>
  <section class="border-b border-gray-100">
    <base-container class="py-16">
      <div class="flex w-full items-center justify-between border-b border-gray-200">
        <div class="w-5/12 text-balance text-primary">
          <h1 class="font-acumin-bold mb-4 text-6xl tracking-tight text-tertiary">$ whoami</h1>
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

        <div class="w-1/2 justify-self-end pt-8">
          <img
            class="rounded-lg object-cover shadow-lg"
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
          :items-to-show="8"
          fixed-height="100px"
        />
      </div>
    </base-container>
  </section>

  <section class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-32">
      <div class="flex w-full items-start justify-between">
        <div>
          <h3 class="mb-4 font-proxima text-3xl font-light">Perceptive side</h3>
          <ul class="font-proxima font-light leading-8 text-tertiary">
            <li></li>
            <li>Animation Fluidity</li>
            <li>Attention to details and typography</li>
            <li>Communicating with artist's perspective</li>
            <li>Design Feels</li>
            <li>Eye on design</li>
            <li>User Experience</li>
          </ul>
        </div>
        <img class="w-[340px] object-cover" src="@images/me/kg_chart1.png" alt="" />

        <div>
          <h3 class="mb-4 font-proxima text-3xl font-light">Developer side</h3>
          <ul class="font-proxima font-light leading-8 text-tertiary">
            <li>Front-end development</li>
            <li>HTML / S/CSS</li>
            <!--            <li>State Management</li>-->
            <!--            <li>Automated testing: Component or E2E</li>-->
            <li>JavaScript / TypeScript</li>
            <li>Laravel / GraphQL</li>
            <li>Eating Pizza</li>
            <li>Drinking Coffee</li>
          </ul>
        </div>
      </div>
      <!--      <p class="font-proxima text-base font-light leading-relaxed text-primary">-->
      <!--        As a frontend/software engineer, I'm passionate about creating intuitive and user-friendly experiences.-->
      <!--      </p>-->
    </base-container>
  </section>

  <section class="random-facts">
    <base-container class="flex gap-10 py-24">
      <div class="w-8/12 pr-20">
        <img class="w-full" src="@images/me/ojophile2.png" alt="kevin gallarin audio" />
      </div>
      <div class="pt-8">
        <h3 class="mb-6 font-proxima text-3xl font-light">Random Nuggets</h3>

        <ul class="font-proxima font-light leading-10 text-tertiary">
          <li>Workout and driving is my zen time</li>
          <li>I love occasionally playing ARPGs</li>
          <li>I'm a bit sensitive to aesthetics</li>
          <li>I play guitar, and sing (in tune)</li>
          <li>High-Fi audio enthusiast</li>
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
    <base-container class="py-24">
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
