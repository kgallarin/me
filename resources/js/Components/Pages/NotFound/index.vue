<script setup lang="ts">
  import { computed } from 'vue';

  import { useRouter } from 'vue-router';

  import { useContentStore } from '@/Store/Modules/Content';

  import BaseImage from '@/Components/Common/BaseImage.vue';

  const router = useRouter();

  const contentStore = useContentStore();
  contentStore.fetchContent('page_not_found');

  const pageNotFound = computed(() => contentStore.getContent);
</script>

<template>
  <div
    class="min-w-screen flex min-h-screen flex-col items-center justify-center bg-[url('@images/backgrounds/leaves-4.png')] px-4 text-center font-proxima text-primary bg-blend-multiply"
  >
    <base-image
      class="mb-4 h-[280px] w-[280px] object-cover"
      :src="pageNotFound?.heroImages[0]?.url"
      alt="404 page not found"
      rounded="rounded-full"
    >
    </base-image>
    <h1 class="text-4xl font-bold">404</h1>

    <h2 class="text-2xl leading-loose">{{ pageNotFound?.title }}</h2>
    <p class="mb-8 text-sm">{{ pageNotFound?.subtitle }}</p>

    <button
      class="hover:bg-primary/80 h-[40px] w-[260px] rounded-full bg-primary px-4 py-2 text-lg text-sm font-medium leading-none text-white"
      @click="$router.push({ name: 'home' })"
    >
      Back to home
    </button>
  </div>
</template>

<style scoped lang="scss"></style>
