<script setup lang="ts">
  import { SplideSlide } from '@splidejs/vue-splide';

  import Container from '@/Components/Common/Container.vue';
  import Splider from '@/Components/Motion/Splider.vue';

  const images = import.meta.glob<{ default: string }>('/resources/images/projects/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const getImageUrl = (name: string) => images[`/resources/images/projects/${name}`]?.default || '';

  const projects = [
    {
      title: 'loomberryliving',
      description:
        'Curated list of products like bed sheets, pillows, and more. Admin panel for managing products, prices, quantity, colors and more. (soon)',
      images: [getImageUrl('loomberryliving.png')],
      icons: [
        { icon: ['fab', 'html5'], color: 'text-orange-400' },
        { icon: ['fab', 'tailwind-css'], color: 'text-teal-400' },
        { icon: ['fab', 'laravel'], color: 'text-red-500' },
        { icon: ['fab', 'typescript'], color: 'text-blue-500' },
        { icon: ['fab', 'vuejs'], color: 'text-green-500' },
      ],
      carousel: {
        autoplay: true,
        showIndicators: true,
        showArrows: false,
      },
    },
    {
      title: 'dating app',
      description:
        'A multiple templated website that allows users to create profiles, browse other profiles, and connect with others who share similar interests. Project includes heavy testing with Jest, Jasmine and Cypress for E2E',
      images: [getImageUrl('dating-1.png'), getImageUrl('dating-3.png')],
      icons: [
        { icon: ['fab', 'html5'], color: 'text-orange-400' },
        { icon: ['fab', 'tailwind-css'], color: 'text-teal-400' },
        { icon: ['fab', 'typescript'], color: 'text-blue-500' },
        { icon: ['fab', 'js'], color: 'text-yellow-400' },
        { icon: ['fab', 'sass'], color: 'text-pink-400' },
        { icon: ['fab', 'css3'], color: 'text-blue-500' },
      ],
      carousel: {
        autoplay: true,
        showIndicators: true,
        showArrows: true,
      },
    },
    {
      title: 'e-moderators',
      description:
        'Website that recruits and employs people to work as online chat moderators, often for adult-oriented dating or chat platforms.',
      images: [getImageUrl('e-moderators.png')],
      icons: [
        { icon: ['fab', 'html5'], color: 'text-orange-400' },
        { icon: ['fab', 'sass'], color: 'text-pink-400' },
        { icon: ['fab', 'css3'], color: 'text-blue-500' },
        { icon: ['fab', 'js'], color: 'text-yellow-400' },
        { icon: ['fab', 'vuejs'], color: 'text-green-500' },
      ],
      carousel: {
        autoplay: true,
        showIndicators: true,
        showArrows: false,
      },
    },
    {
      title: 'online gambling websites',
      description:
        'Maintained and created multiple online casino websites that cater to the needs of online gamblers. With heavy forms and complex user interfaces that change frequently for promotions and occasions.',
      images: [getImageUrl('online-gambling.png')],
      icons: [
        { icon: ['fab', 'html5'], color: 'text-orange-400' },
        { icon: ['fab', 'css3'], color: 'text-blue-500' },
        { icon: ['fab', 'sass'], color: 'text-pink-400' },
        { icon: ['fab', 'js'], color: 'text-yellow-400' },
      ],
      carousel: {
        autoplay: true,
        showIndicators: true,
        showArrows: false,
      },
    },
    {
      title: 'horsepower',
      description:
        'Provides HR benefits, healthcare insurance/HMO, and administrative tools to freelancers, solopreneurs, and micro-SMEs. It acts as a one-stop-shop, helping local freelancers access benefits often missing from standard contract work.',
      images: [getImageUrl('horsepower.jpeg')],
      icons: [
        { icon: ['fab', 'html5'], color: 'text-orange-400' },
        { icon: ['fab', 'css3'], color: 'text-blue-500' },
        { icon: ['fab', 'js'], color: 'text-yellow-400' },
        { icon: ['fab', 'wordpress'], color: 'text-blue-500' },
      ],
      carousel: {
        autoplay: true,
        showIndicators: true,
        showArrows: false,
      },
    },
    {
      title: 'fliptrip',
      description:
        'Simplifies booking travel to off-the-beaten-path destinations in the Philippines. It connects travelers with local providers for accommodation, transportation, and tours, promoting sustainable community-based tourism.',
      images: [getImageUrl('fliptrip.jpg')],
      icons: [
        { icon: ['fab', 'html5'], color: 'text-orange-400' },
        { icon: ['fab', 'bootstrap'], color: 'text-purple-400' },
        { icon: ['fab', 'js'], color: 'text-yellow-400' },
        { icon: ['fab', 'sass'], color: 'text-pink-400' },
        { icon: ['fab', 'css3'], color: 'text-blue-500' },
        { icon: ['fab', 'less'], color: 'text-blue-400' },
      ],
      carousel: {
        autoplay: true,
        showIndicators: true,
        showArrows: false,
      },
    },
  ];
</script>

<template>
  <container class="py-6 pb-24 lg:py-8 lg:pb-32">
    <div
      class="headings font-lighter font-proxima-bold mb:8 relative my-4 border-t border-[#dddddd] text-center text-sm uppercase text-primary lg:my-8 lg:mb-16"
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
      :breakpoints="{
        1024: { perPage: 2 },
        640: { perPage: 1 },
      }"
    >
      <splide-slide v-for="project in projects" :key="project.title" class="pb-12">
        <div class="card relative flex h-full flex-col rounded-md bg-white p-1 drop-shadow-md">
          <splider
            :items="project.images"
            aspect-ratio="max-h-[240px] min-h-[240px]"
            :autoplay="project.carousel?.autoplay"
            :show-indicators="project.carousel?.showIndicators"
            :show-arrows="project.carousel?.showArrows"
            :items-to-show="1"
            fixed-height="250px"
          />
          <div class="relative bg-white p-4 text-primary">
            <h2 class="mb-2 font-proxima text-lg font-medium text-primary">{{ project.title }}</h2>
            <p class="font-acumin text-xs font-light">
              {{ project.description }}
            </p>
          </div>

          <div class="mt-auto grid grid-cols-8 gap-1 p-4">
            <fa-icon
              v-for="(tech, index) in project.icons"
              :key="index"
              :icon="tech.icon"
              :class="['text-xl', tech.color]"
            />
          </div>
        </div>
      </splide-slide>
    </splider>
  </container>
</template>
