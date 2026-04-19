<script setup lang="ts">
  import { PropType } from 'vue';

  import { ContentResponseDTO, IconLinkResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import SafeHtml from '@/Components/Common/SafeHtml.vue';

  defineProps({
    contactHeroData: {
      type: Object as PropType<ContentResponseDTO>,
      default: () => ({}),
    },
    links: {
      type: Array as PropType<IconLinkResponseDTO[]>,
      default: () => [],
    },
  });
</script>

<template>
  <section class="bg-gray-lighter">
    <base-container>
      <div
        class="flex w-full flex-col items-center justify-between border-b border-secondary py-6 md:flex-row md:py-8 lg:py-16"
      >
        <div class="w-full text-balance text-primary md:w-5/12">
          <h1 class="mb-4 text-6xl lowercase tracking-tight text-tertiary">
            {{ contactHeroData?.content?.[0]?.title || contactHeroData?.title }}
          </h1>
          <p class="mb-4 font-acumin text-xl font-light">
            {{ contactHeroData.subtitle }}
          </p>
          <div v-for="(section, index) in contactHeroData?.content" :key="index" class="mb-4">
            <h2 v-if="section.title" class="mb-2 text-2xl font-semibold">{{ section.title }}</h2>
            <p class="font-proxima text-base font-light leading-relaxed">
              <safe-html :html="section.text" />
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 pt-8">
            <a
              v-for="link in links"
              :key="link.name"
              :href="link.url"
              :download="link.name === 'resume' ? 'resume.pdf' : undefined"
              target="_blank"
              class="mb-4 flex flex-col items-center gap-2 text-center sm:flex-row"
              :class="[
                link.classColor,
                { 'text-[#E4405F]': link.name === 'instagram' },
                { 'text-[#006AFF]': link.name === 'facebook' },
                {
                  'justify-center hover:underline': link.name === 'resume',
                },
              ]"
            >
              <fa-icon :icon="link.icon" class="mr-2 text-6xl" />
              <p class="capitalize leading-tight">{{ link.name === 'resume' ? 'Download my resume' : link.name }}</p>
            </a>
          </div>
        </div>

        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <base-image
            class="object-cover"
            rounded="rounded-md"
            :src="contactHeroData?.heroImages[0]?.url"
            :alt="contactHeroData?.heroImages[0]?.alt"
            show-loader
          />
        </div>
      </div>
    </base-container>
  </section>
</template>
