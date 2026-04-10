<script setup lang="ts">
  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';
  import SkillChart from '@/Components/Partials/SkillChart/index.vue';

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
  <section class="skills-chart shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="px-0 py-12 pb-20 md:px-4 md:py-24 md:pb-24">
      <div class="w-full text-right">
        <scroll-reveal direction="right" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
          <h2 class="font-proxima text-4xl font-light">My Skills</h2>
          <p class="font-acumin text-xs font-light">more or less</p>
        </scroll-reveal>

        <scroll-reveal
          direction="up"
          :delay="0.2"
          :animate-once="animateOnce"
          :animate-only-scroll-down="animateOnlyScrollDown"
        >
          <div class="w-full">
            <skill-chart :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown" />
          </div>
        </scroll-reveal>
      </div>
    </base-container>
  </section>
</template>
