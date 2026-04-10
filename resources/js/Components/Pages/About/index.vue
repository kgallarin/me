<script setup lang="ts">
  import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';
  import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';
  import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';
  import Recommendations from '@/Components/Partials/About/Recommendations.vue';
  import Whoami from '@/Components/Partials/About/Whoami.vue';
</script>

<template>
  <div class="about-i">
    <whoami animate-once animate-only-scroll-down />

    <charted-skills animate-once animate-only-scroll-down />

    <random-facts animate-only-scroll-down />

    <graphed-skills animate-once animate-only-scroll-down />

    <recommendations animate-only-scroll-down />
  </div>
</template>
