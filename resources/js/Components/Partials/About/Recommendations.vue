<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import { RecommendationsResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  import RecommendationCard from './RecommendationCard.vue';

  const props = defineProps({
    testimonials: {
      type: Array as PropType<RecommendationsResponseDTO[]>,
      required: true,
    },
    animateOnce: {
      type: Boolean,
      default: false,
    },
    animateOnlyScrollDown: {
      type: Boolean,
      default: false,
    },
  });

  const columnData = computed(() => {
    const cols2: RecommendationsResponseDTO[][] = [[], []];
    const cols3: RecommendationsResponseDTO[][] = [[], [], []];

    props.testimonials.forEach((rec, index) => {
      cols2[index % 2].push(rec);
      cols3[index % 3].push(rec);
    });

    return { cols2, cols3 };
  });

  const getGlobalIndex = (columnIndex: number, rowIndex: number, totalColumns: number) => {
    return rowIndex * totalColumns + columnIndex;
  };
</script>

<template>
  <section>
    <base-container class="pb-24">
      <scroll-reveal direction="up" :animate-once="animateOnce" :animate-only-scroll-down="animateOnlyScrollDown">
        <h2 class="pt-24 font-proxima text-4xl font-light">Kudos</h2>
        <p class="font-acumin text-xs font-light">from my highly respected people</p>
      </scroll-reveal>

      <!-- Desktop (3 columns) -->
      <div class="hidden gap-6 pt-12 lg:flex">
        <div v-for="(column, colIndex) in columnData.cols3" :key="colIndex" class="flex flex-1 flex-col gap-6">
          <scroll-reveal
            v-for="(recommendation, rowIndex) in column"
            :key="rowIndex"
            direction="up"
            :delay="getGlobalIndex(colIndex, rowIndex, 3) * 0.1"
            :animate-once="animateOnce"
            :animate-only-scroll-down="animateOnlyScrollDown"
            class="break-inside-avoid"
          >
            <recommendation-card :recommendation="recommendation" />
          </scroll-reveal>
        </div>
      </div>

      <!-- Tablet (2 columns) -->
      <div class="hidden gap-6 pt-12 md:flex lg:hidden">
        <div v-for="(column, colIndex) in columnData.cols2" :key="colIndex" class="flex flex-1 flex-col gap-6">
          <scroll-reveal
            v-for="(recommendation, rowIndex) in column"
            :key="rowIndex"
            direction="up"
            :delay="getGlobalIndex(colIndex, rowIndex, 2) * 0.1"
            :animate-once="animateOnce"
            :animate-only-scroll-down="animateOnlyScrollDown"
            class="break-inside-avoid"
          >
            <recommendation-card :recommendation="recommendation" />
          </scroll-reveal>
        </div>
      </div>

      <!-- Mobile (1 column) -->
      <div class="flex flex-col gap-6 pt-12 md:hidden">
        <scroll-reveal
          v-for="(recommendation, index) in testimonials"
          :key="index"
          direction="up"
          :delay="index * 0.1"
          :animate-once="animateOnce"
          :animate-only-scroll-down="animateOnlyScrollDown"
          class="break-inside-avoid"
        >
          <recommendation-card :recommendation="recommendation" />
        </scroll-reveal>
      </div>
    </base-container>
  </section>
</template>

<style lang="scss" scoped></style>
