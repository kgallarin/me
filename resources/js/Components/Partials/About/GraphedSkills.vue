<script setup lang="ts">
  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import SkillChart from '@/Components/Partials/SkillChart/index.vue';
</script>

<template>
  <section class="skills-chart shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="px-0 py-12 pb-20 md:px-4 md:py-24 md:pb-24">
      <div class="w-full text-right">
        <h2 class="font-proxima text-4xl font-light">My Skills</h2>
        <p class="font-acumin text-xs font-light">more or less</p>
        <div class="w-full">
          <skill-chart />
        </div>
      </div>
    </base-container>
  </section>
</template>

<style scoped></style>
