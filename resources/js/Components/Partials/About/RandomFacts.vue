<script setup lang="ts">
  import ojophile2 from '@images/me/ojophile2.png';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  const facts = [
    'Workout and driving is my Zen time!',
    'I love animals',
    'I love occasionally playing ARPGs',
    "I'm a bit sensitive to aesthetics",
    'I play guitar, and can sing (in tune)',
    'Analog/High-Fi audio enthusiast',
    'Always keen to adventures',
    'A bit of a clean freak',
    'Always wants improvement',
    'Loves cooking',
    'I drink a lot of coffee',
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
  <section class="random-facts">
    <base-container class="flex flex-col gap-10 py-24 lg:flex-row">
      <div class="w-full pr-0 lg:w-8/12 lg:pr-20">
        <scroll-reveal direction="right" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <base-image class="w-full" :src="ojophile2" alt="kevin gallarin audio" />
        </scroll-reveal>
      </div>
      <div class="pt-8 text-center lg:text-left">
        <scroll-reveal direction="left" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <h3 class="mb-6 font-proxima text-3xl font-light">Random Nuggets</h3>

          <ul class="font-proxima font-light leading-10 text-tertiary">
            <li v-for="(fact, index) in facts" :key="index">
              {{ fact }}
            </li>
          </ul>
        </scroll-reveal>
      </div>
    </base-container>
  </section>
</template>

<style scoped></style>
