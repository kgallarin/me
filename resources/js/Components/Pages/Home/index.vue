<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';

  import BaseToast from '@/Components/Common/BaseToast.vue';
  import LandingHero from '@/Components/Partials/Home/LandingHero/index.vue';
  import ProjectsComponent from '@/Components/Partials/Home/Projects/index.vue';

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
  const isDesktop = computed(() => appStore.isDesktop);

  const images = import.meta.glob<{ default: string }>('../../../../images/projects/*.{png,jpg,jpeg,webp}', {
    eager: true,
  });

  const getImageUrl = (name: string) => images[`../../../../images/projects/${name}`]?.default || ''; // temp migrating to s3
  const projects = [
    {
      title: 'imgkg',
      description:
        '(this) My personal website that I built from scratch to showcase my skills, technologies and myself. I plan to add more features and content as a diary since I do not much exposing myself to social media. Feel free to click here to view how it was coded so I can share my knowledge and experience by this simple website. (yo, it has tests!)',
      images: [getImageUrl('kgdev.png'), getImageUrl('kgdev2.png')],
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
        showArrows: true,
      },
    },
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
      title: 'e-moderators',
      link: 'https://e-moderators.com/',
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
      title: 'hydropay',
      link: 'https://optimail-dev.github.io/hydropay-frontend-2020',
      description:
        'A payment gateway that allows users to pay for their dating app subscriptions. It includes a dashboard for managing subscriptions, billing, and payment methods.',
      images: [getImageUrl('hydropay.png'), getImageUrl('hydropay-2.png')],
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
      <projects-component :projects="projects" />
    </div>
  </div>
</template>
