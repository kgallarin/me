<script setup lang="ts">
  import { computed } from 'vue';

  import { useContentStore } from '@/Store/Modules/Content';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import SafeHtml from '@/Components/Common/SafeHtml.vue';
  import WhyFrontend from '@/Components/Partials/Story/WhyFrontend.vue';

  const contentStore = useContentStore();

  contentStore.fetchContents();

  const whyFrontendContent = computed(() => contentStore.getContentByKey('how_me'));
  const gistsContent = computed(() => contentStore.getContentByKey('gists'));
  const factsContent = computed(() => contentStore.getContentByKey('personal_facts'));
  const howIGotIntoContent = computed(() => contentStore.getContentByKey('got_into_web_dev'));
  const lessonsContent = computed(() => contentStore.getContentByKey('lessons'));
</script>

<template>
  <why-frontend
    :title="whyFrontendContent.title"
    :text="whyFrontendContent.content"
    :image="whyFrontendContent.heroImages[0]"
  />
  <section class="shadow-bottom bg-gray-lighter shadow-custom-mid-inset">
    <base-container class="py-12 md:py-16">
      <div class="mx-auto max-w-screen-md border-b border-gray-200 pb-12">
        <h1 class="mb-6 text-4xl capitalize tracking-tight text-tertiary">
          {{ gistsContent.title }}
        </h1>
        <p>
          <safe-html :html="gistsContent?.content[0]?.text" />
        </p>
      </div>

      <div class="mx-auto max-w-screen-md border-b border-gray-200 py-12">
        <h1 class="mb-6 text-4xl capitalize tracking-tight text-tertiary">
          {{ factsContent.title }}
        </h1>

        <div v-for="(fact, index) in factsContent.content" :key="index" class="mb-6">
          <h2 class="mb-1 font-acumin font-semibold leading-tight">{{ fact.title }}</h2>
          <p>{{ fact.text }}</p>
        </div>
      </div>

      <div class="mx-auto max-w-screen-md border-b border-gray-200 py-12">
        <h1 class="mb-6 text-4xl capitalize tracking-tight text-tertiary">
          {{ howIGotIntoContent.title }}
        </h1>

        <p>
          <safe-html :html="howIGotIntoContent?.content[0]?.text" />
        </p>
      </div>

      <div class="mx-auto max-w-screen-md py-12">
        <h1 class="mb-12 text-4xl capitalize tracking-tight text-tertiary">
          {{ lessonsContent.title }}
        </h1>

        <div v-for="(lesson, index) in lessonsContent.content" :key="index" class="mb-12">
          <h2 class="mb-4 font-acumin font-semibold leading-tight">
            {{ lesson.title }}
          </h2>
          <p class="leading-loose">
            <safe-html :html="lesson.text" />
          </p>
        </div>
      </div>
    </base-container>
  </section>
</template>
