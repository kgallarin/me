<script setup lang="ts">
  import { PropType } from 'vue';

  import { ImageDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseImage from '@/Components/Common/BaseImage.vue';

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },

    description: {
      type: String,
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
          <h1 class="mb-4 text-4xl capitalize tracking-tight text-tertiary md:text-4xl xl:text-6xl">
            {{ props.title }}
          </h1>

          <div class="font-proxima text-base font-light">
            <p v-html="props.description" class="leading-loose"></p>
          </div>
        </div>

        <div class="w-full justify-self-end pt-8 md:w-1/2">
          <base-image
            class="object-cover shadow-lg"
            rounded="rounded-md"
            :src="props.image.url"
            :alt="props.image.alt"
          />
        </div>
      </div>
    </base-container>
  </section>
</template>
