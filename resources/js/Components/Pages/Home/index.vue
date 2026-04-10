<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

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

  // const handleMobileClick = () => {
  //   showToast.value = !showToast.value;
  // };

  const handleHoverLeave = () => {
    isHoveredRight.value = false;
    isHoveredLeft.value = false;
  };

  const appStore = useAppStore();
  const isDesktop = appStore.isDesktop;

  onMounted(() => {
    setTimeout(() => {
      showToast.value = true;
    }, 1000);
  });
</script>

<template>
  <div class="flex min-h-[calc(100vh-150px)] flex-col">
    <base-toast
      :show="showToast"
      :message="`${isDesktop ? 'Hover' : 'Tap'} the texts behind me, to explore skills`"
      position="top"
      @close="showToast = false"
    />

    <landing-hero
      :is-hovered-right="isHoveredRight"
      :is-hovered-left="isHoveredLeft"
      @hover-right="handleHoverRight"
      @hover-left="handleHoverLeft"
      @hover-leave="handleHoverLeave"
    />
    <!--  <div class="bg-gray-lighter">-->
    <div
      class="flex-1 bg-gray-lighter bg-[url('@images/backgrounds/leaves-4.png')] bg-blend-multiply shadow-custom-mid-inset"
    >
      <projects />
    </div>
  </div>
</template>
