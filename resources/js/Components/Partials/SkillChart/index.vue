<script setup lang="ts">
  import { computed } from 'vue';

  import BaseBarChart from '@/Components/Common/BaseBarChart.vue';
  import { getChartData, getChartOptions } from '@/Components/Partials/SkillChart/chartConfig';

  const chartData = computed(() => getChartData());
  const chartOptions = computed(() => getChartOptions());
</script>

<template>
  <base-bar-chart :data="chartData" :options="chartOptions" />
</template>
