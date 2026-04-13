<script setup lang="ts">
  import { computed, onMounted } from 'vue';

  import { useRecommendationsStore } from '@/Store/Modules/Recommendations';

  import { ChartedSkillsResponseDTO, TitledTextResponseDTO } from '@/Types/Responses';

  import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';
  import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';
  import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';
  import Recommendations from '@/Components/Partials/About/Recommendations.vue';
  import Whoami from '@/Components/Partials/About/Whoami.vue';

  const recommendationsStore = useRecommendationsStore();

  onMounted(() => {
    recommendationsStore.fetchRecommendations();
  });

  const recommendationsData = computed(() => recommendationsStore.recommendations);

  const skills: ChartedSkillsResponseDTO = {
    leftTitle: 'Perceptive side',
    leftContent: [
      'Animation Fluidity',
      'Attention to details and typography',
      "Communicating with artist's perspective",
      'Design Feels',
      'Eye on design',
      'Finding beauty to everything',
      'User Experience',
    ],

    rightTitle: 'Developer side',
    rightContent: [
      'Front-end development',
      'Sass, LESS, S/CSS',
      'State Management',
      'Automated testing',
      'Form Manipulation',
      'JavaScript / TypeScript',
      'Laravel / GraphQL',
      'Eating Pizza',
      'Drinking Coffee',
    ],
  };

  const randomFactsContent: TitledTextResponseDTO = {
    title: 'Random Nuggets',
    text: [
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
    ],
  };
</script>

<template>
  <div class="about-i">
    <whoami animate-once animate-only-scroll-down />

    <charted-skills :skills="skills" animate-once animate-only-scroll-down />

    <random-facts :facts="randomFactsContent" animate-only-scroll-down />

    <graphed-skills animate-once animate-only-scroll-down />

    <recommendations :testimonials="recommendationsData" animate-once animate-only-scroll-down />
  </div>
</template>
