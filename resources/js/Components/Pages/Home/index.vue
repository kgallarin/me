<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';
  import { useProjectsStore } from '@/Store/Modules/Projects';

  import BaseToast from '@/Components/Common/BaseToast.vue';
  import LandingHero from '@/Components/Partials/Home/LandingHero/index.vue';
  import Projects from '@/Components/Partials/Home/Projects/index.vue';

  const isHoveredRight = ref(false);
  const isHoveredLeft = ref(false);
  const showToast = ref(false);
  const handleHoverLeft = () => {
    isHoveredLeft.value = true;
    // showToast.value = true;
  };
  const handleHoverRight = () => {
    isHoveredRight.value = true;
    // showToast.value = true;
  };

  const handleHoverLeave = () => {
    isHoveredRight.value = false;
    isHoveredLeft.value = false;
  };

  const appStore = useAppStore();
  const isDesktop = computed(() => appStore.isDesktop);

  const projectsStore = useProjectsStore();

  const projectsData = computed(() => projectsStore.projects);
  projectsStore.fetchProjects();
  setTimeout(() => {
    showToast.value = true;
  }, 1000);
</script>

<template>
  <div class="flex flex-1 flex-col bg-gray-lighter bg-[url('@images/backgrounds/leaves-4.png')] bg-blend-multiply">
    <base-toast
      :show="showToast"
      :message="`${isDesktop ? 'Hover' : 'Tap'} the texts behind me, to explore skills`"
      position="top"
      @close="showToast = false"
    />
    <div class="bg-white/50 shadow-inner">
      <landing-hero
        :is-hovered-right="isHoveredRight"
        :is-hovered-left="isHoveredLeft"
        @hover-right="handleHoverRight"
        @hover-left="handleHoverLeft"
        @hover-leave="handleHoverLeave"
      />
    </div>
    <div class="">
      <projects :projects="projectsData" />
    </div>
  </div>
</template>
