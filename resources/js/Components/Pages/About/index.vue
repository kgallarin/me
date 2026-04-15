<script setup lang="ts">
  import { computed } from 'vue';

  import { useContentStore } from '@/Store/Modules/Content';
  import { useRecommendationsStore } from '@/Store/Modules/Recommendations';

  import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';
  import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';
  import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';
  import Recommendations from '@/Components/Partials/About/Recommendations.vue';
  import Whoami from '@/Components/Partials/About/Whoami.vue';

  const recommendationsStore = useRecommendationsStore();
  const contentStore = useContentStore();

  recommendationsStore.fetchRecommendations();
  contentStore.fetchContents();

  const whoamiContent = computed(() => contentStore.getContentByKey('whoami'));
  const randomFactsContent = computed(() => contentStore.getContentByKey('random_facts'));
  const chartedSkillsContent = computed(() => contentStore.getContentByKey('charted_skills'));
  const graphedSkillsContent = computed(() => contentStore.getContentByKey('graphed_skills'));
  const recommendationsContent = computed(() => contentStore.getContentByKey('recommendations'));
  const recommendationsData = computed(() => recommendationsStore.recommendations);
</script>

<template>
  <div class="about-i">
    <whoami :content="whoamiContent" animate-once animate-only-scroll-down />

    <charted-skills :content="chartedSkillsContent" animate-once animate-only-scroll-down />

    <random-facts :content="randomFactsContent" animate-only-scroll-down />

    <graphed-skills :data="graphedSkillsContent" animate-once animate-only-scroll-down />

    <recommendations
      :content="recommendationsContent"
      :testimonials="recommendationsData"
      animate-once
      animate-only-scroll-down
    />
  </div>
</template>
