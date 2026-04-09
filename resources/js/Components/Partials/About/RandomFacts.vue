<script setup lang="ts">
  import ojophile2 from '@images/me/ojophile2.png';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
</script>

<template>
  <section class="random-facts">
    <base-container class="flex flex-col gap-10 py-24 lg:flex-row">
      <div class="w-full pr-0 lg:w-8/12 lg:pr-20">
        <base-image class="w-full" :src="ojophile2" alt="kevin gallarin audio" />
      </div>
      <div class="pt-8 text-center lg:text-left">
        <h3 class="mb-6 font-proxima text-3xl font-light">Random Nuggets</h3>

        <ul class="font-proxima font-light leading-10 text-tertiary">
          <li>Workout and driving is my Zen time!</li>
          <li>I am an animal lover</li>
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
</template>

<style scoped></style>
