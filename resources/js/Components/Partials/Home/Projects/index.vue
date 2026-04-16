<script setup lang="ts">
  import { SplideSlide } from '@splidejs/vue-splide';

  import { ProjectResponseDTO } from '@/Types/Responses';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import Splider from '@/Components/Motion/Splider.vue';

  defineProps<{
    projects?: ProjectResponseDTO[];
  }>();
</script>

<template>
  <base-container class="pb-24 lg:pb-16 lg:pt-6">
    <div
      data-testid="projects-headers"
      class="headings font-lighter relative my-8 mt-10 border-t border-[#dddddd] text-center text-sm uppercase text-primary lg:mb-14 lg:mt-8"
    >
      <h3 class="font-xl relative mx-auto -mt-2.5 max-w-fit bg-gray-lighter px-12 font-proxima text-lg font-light">
        selected projects
      </h3>
    </div>

    <splider
      :items-to-show="3"
      :show-indicators="false"
      :show-arrows="false"
      :gap="16"
      :interval="8000"
      rewind
      autoplay
      :drag="true"
      :breakpoints="{
        1024: { perPage: 2 },
        640: { perPage: 1 },
      }"
    >
      <splide-slide v-for="project in projects" :key="project.title" class="pb-12">
        <div
          data-testid="project-card"
          class="card relative flex h-full flex-col rounded-md bg-white p-1 drop-shadow-md"
        >
          <splider
            :items="project.images.map((img) => img.url)"
            aspect-ratio="max-h-[215px] min-h-[215px]"
            :autoplay="project.carouselSettings?.autoplay"
            :show-indicators="project.carouselSettings?.showIndicators"
            :show-arrows="project.carouselSettings?.showArrows"
            :items-to-show="1"
            :drag="false"
          />
          <div class="relative bg-white p-4 text-primary">
            <h2 class="mb-2 font-proxima text-lg font-medium text-primary">{{ project.title }}</h2>
            <p class="inline font-acumin text-xs font-light">
              {{ project.description }}
            </p>
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="inline-block pl-1 font-acumin text-xs font-light text-blue-400 underline"
            >
              link
            </a>
          </div>

          <div class="mt-auto grid grid-cols-8 gap-1 p-4">
            <fa-icon
              data-testid="project-icon"
              v-for="(ico, index) in project.icon"
              :key="index"
              :icon="ico.icon"
              class="text-xl"
              :class="ico.color"
            />
          </div>
        </div>
      </splide-slide>
    </splider>
  </base-container>
</template>
