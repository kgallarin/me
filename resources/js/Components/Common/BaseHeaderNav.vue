<script setup lang="ts">
  import { NavLink } from '@/Types/Props';
  import { PropType } from 'vue';
  import BrandLogo from '@/Components/Motion/BrandLogo.vue';

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
  });
</script>

<template>
  <header class="bg-[#171717]">
    <div class="h-16 header-inner md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between items-center">
      <brand-logo
        spinner-width="w-11"
        spinner-height="h-11"
        container-width="w-11"
        container-height="h-11"
      />

      <!-- nav starts-->
      <nav>
        <ul class="flex gap-8 text-md">
          <li v-for="item in nav" :key="item.label">
            <a href="#" class="text-white font-normal font-acumin nav-link hover:text-gray-300">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
    .header-inner {
        @apply flex justify-between items-center;
    }
</style>
