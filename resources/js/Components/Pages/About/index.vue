<script setup lang="ts">
  import { computed } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';
  import { useContentStore } from '@/Store/Modules/Content';
  import { useRecommendationsStore } from '@/Store/Modules/Recommendations';

  import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';
  import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';
  import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';
  import Recommendations from '@/Components/Partials/About/Recommendations.vue';
  import Whoami from '@/Components/Partials/About/Whoami.vue';

  const recommendationsStore = useRecommendationsStore();
  const contentStore = useContentStore();
  const appStore = useAppStore();

  recommendationsStore.fetchRecommendations();
  contentStore.fetchContents();

  const queryBreakpoints = computed(() => appStore.queryBreakpoints);

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

    <charted-skills
      :no-animation="queryBreakpoints(false, false, true, true)"
      :content="chartedSkillsContent"
      animate-once
      animate-only-scroll-down
    />

    <random-facts
      :content="randomFactsContent"
      animate-once
      animate-only-scroll-down
      :no-animation="queryBreakpoints(false, false, true, true)"
    />

    <graphed-skills :content="graphedSkillsContent" animate-once animate-only-scroll-down />

    <recommendations
      :content="recommendationsContent"
      :testimonials="recommendationsData"
      animate-once
      animate-only-scroll-down
    />
  </div>
</template>
