<script setup lang="ts">
  import {
    BarElement,
    CategoryScale,
    type ChartData,
    Chart as ChartJS,
    type ChartOptions,
    Legend,
    LinearScale,
    type Plugin,
    Title,
    Tooltip,
  } from 'chart.js';
  import ChartDataLabels from 'chartjs-plugin-datalabels';
  import { Bar } from 'vue-chartjs';

  import { PropType } from 'vue';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

  defineProps({
    data: {
      type: Object as PropType<ChartData<'bar', (number | [number, number] | null)[]>>,
      required: true,
      default: () => ({}),
    },
    options: {
      type: Object as PropType<ChartOptions<'bar'>>,
      required: true,
      default: () => ({}),
    },
    plugins: {
      type: Array as PropType<Plugin<'bar'>[]>,
      default: () => [],
    },
  });
</script>

<template>
  <bar :data="data" :options="options" :plugins="plugins" />
</template>
