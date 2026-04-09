<script setup lang="ts">
  import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';
  import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';
  import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';
  import Recommendations from '@/Components/Partials/About/Recommendations.vue';
  import Whoami from '@/Components/Partials/About/Whoami.vue';
</script>

<template>
  <div class="about-i">
    <whoami />

    <charted-skills />

    <random-facts />

    <graphed-skills />

    <recommendations />
  </div>
</template>
