<script setup lang="ts">
  import { PropType, ref } from 'vue';

  import { NavLink } from '@/Types/Props';

  import BrandLogo from '@/Components/Motion/BrandLogo.vue';

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
  });

  const isOpen = ref(false);

  const defaultNav = [
    {
      label: 'skills',
      href: '/',
      icon: '',
    },
    {
      label: 'work',
      href: '/',
      icon: '',
    },
    {
      label: 'kudos',
      href: '/',
      icon: '',
    },
    {
      label: 'contact',
      href: '/',
      icon: '',
    },
  ];
</script>

<template>
  <header class="bg-[#171717]">
    <div
      class="header-inner mx-auto flex h-16 items-center justify-between px-4 md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <div class="w-[36px] sm:w-[44px]">
        <brand-logo />
      </div>

      <!-- nav starts-->
      <nav class="hidden md:block">
        <ul class="text-md flex gap-8">
          <li v-for="item in nav.length ? nav : defaultNav" :key="item.label">
            <a href="#" class="nav-link flex items-center gap-2 font-acumin font-normal text-white hover:text-gray-300">
              <font-awesome-icon v-if="item.icon" :icon="['fas', item.icon]" class="text-sm" />
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <button class="text-2xl text-white focus:outline-none md:hidden" aria-label="Open menu" @click="isOpen = !isOpen">
        <font-awesome-icon :icon="['fas', 'bars']" />
      </button>
    </div>
  </header>
</template>

<style scoped>
  .header-inner {
    @apply flex items-center justify-between;
  }
</style>
