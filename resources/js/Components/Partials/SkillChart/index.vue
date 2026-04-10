<script setup lang="ts">
  import { useIntersectionObserver, useWindowScroll } from '@vueuse/core';

  import { computed, ref, watch } from 'vue';

  import BaseBarChart from '@/Components/Common/BaseBarChart.vue';
  import { getChartData, getChartOptions } from '@/Components/Partials/SkillChart/chartConfig';

  const props = defineProps({
    animateOnce: {
      type: Boolean,
      default: true,
    },
    animateOnlyScrollDown: {
      type: Boolean,
      default: false,
    },
  });

  const { y } = useWindowScroll();
  const prevY = ref(y.value);
  const isScrollingDown = ref(true);

  watch(y, (newY) => {
    if (newY > prevY.value) {
      isScrollingDown.value = true;
    } else if (newY < prevY.value) {
      isScrollingDown.value = false;
    }
    prevY.value = newY;
  });

  const chartContainer = ref<HTMLElement | null>(null);
  const isVisible = ref(false);

  useIntersectionObserver(
    chartContainer,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isVisible.value = true;
      } else if (!props.animateOnce) {
        isVisible.value = false;
      }
    },
    { threshold: 0.1 },
  );

  const chartData = computed(() => getChartData());
  const chartOptions = computed(() => {
    const options = getChartOptions();
    if (props.animateOnlyScrollDown && !isScrollingDown.value) {
      options.animation = false;
    }
    return options;
  });
</script>

<template>
  <div ref="chartContainer">
    <base-bar-chart v-if="isVisible" :data="chartData" :options="chartOptions" />
  </div>
</template>
