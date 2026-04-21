<script setup lang="ts">
  import { computed } from 'vue';

  import { useContentStore } from '@/Store/Modules/Content';

  import BaseImage from '@/Components/Common/BaseImage.vue';

  const contentStore = useContentStore();
  contentStore.fetchContent('page_not_found');

  const pageNotFound = computed(() => contentStore.getContent);
</script>

<template>
  <div
    class="min-w-screen flex min-h-screen flex-col items-center justify-center bg-secondary bg-[url('@images/backgrounds/webp/leaves-4.webp')] px-4 text-center font-proxima bg-blend-multiply"
  >
    <base-image
      class="mb-4 h-[280px] w-[280px] object-cover"
      :src="pageNotFound?.heroImages[0]?.url"
      alt="404 page not found"
      rounded="rounded-full"
    >
    </base-image>
    <h1 class="text-4xl font-bold text-primary">404</h1>

    <h2 class="text-2xl leading-loose text-primary">{{ pageNotFound?.title }}</h2>
    <p class="mb-8 text-sm text-primary">{{ pageNotFound?.subtitle }}</p>

    <button
      class="hover:bg-primary/80 h-[40px] w-[260px] rounded-full bg-primary px-4 py-2 text-sm font-medium leading-none text-secondary"
      @click="$router.push({ name: 'home' })"
    >
      Back to home
    </button>
  </div>

  <div>
    <p>
      One of the pillars on my design taste that I have ever worked with. A real artist. Camille Dadal has an
      exceptional ideas and concepts that matches every detail of the requirements on the project. I admire their skill
      to create a unique, memorable and on-point designs that will be a pleasure to use not only on the aesthetic parts
      but also on the UX dynamics. I have also seen how they make their sketches and drawings come to life by digitizing
      it that completely amazed me and witness their true artistic nature. These abilities are truly exceptional and I
      am grateful to have had the opportunity to work with them that brings my website design taste to the next level!
    </p>
  </div>
</template>

<style scoped lang="scss"></style>
