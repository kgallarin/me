<script setup lang="ts">
  import { PropType } from 'vue';

  import { ImageDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';
  import SafeHtml from '@/Components/Common/SafeHtml.vue';
  import ScrollReveal from '@/Components/Motion/ScrollReveal.vue';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },

    text: {
      type: [String, Array] as PropType<string | { title?: string; text: string }[]>,
      default: '',
    },

    image: {
      type: Object as PropType<ImageDTO>,
      default: () => ({}),
    },
  });
</script>

<template>
  <section>
    <base-container>
      <div
        class="flex w-full flex-col items-center justify-between border-b border-gray-200 py-6 md:flex-row-reverse md:py-8 lg:py-16"
      >
        <div class="w-full text-balance text-primary md:w-5/12">
          <scroll-reveal direction="left" :animate-once="true" :animate-only-scroll-down="true">
            <h1 class="mb-4 text-4xl capitalize tracking-tight text-tertiary md:text-4xl xl:text-6xl">
              {{ props.title }}
            </h1>

            <div class="font-proxima text-base font-light">
              <template v-if="Array.isArray(props.text)">
                <div v-for="(section, index) in props.text" :key="index" class="mb-4">
                  <h2 v-if="section.title" class="mb-2 text-2xl font-semibold">{{ section.title }}</h2>
                  <p class="leading-loose">
                    <safe-html :html="section.text" />
                  </p>
                </div>
              </template>
              <p v-else class="leading-loose">
                <safe-html :html="props.text" />
              </p>
            </div>
          </scroll-reveal>
        </div>
        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <scroll-reveal direction="right" :animate-once="true" :animate-only-scroll-down="true">
            <base-image
              class="object-cover shadow-lg"
              rounded="rounded-md"
              :src="props.image.url"
              :alt="props.image.alt"
            />
          </scroll-reveal>
        </div>
      </div>
    </base-container>
  </section>
</template>
