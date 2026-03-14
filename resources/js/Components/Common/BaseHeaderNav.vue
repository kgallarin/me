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
  <header class="p-1 bg-[#171717] ">
    <div class="header-inner max-w-screen-xl mx-auto flex justify-between items-center">
      <brand-logo
        spinner-width="w-4"
        spinner-height="h-4"
        container-width="w-4"
        container-height="h-4"
      />

      <!-- nav starts-->
      <nav>
        <ul class="flex gap-4 text-[12px]">
          <li v-for="item in nav" :key="item.label">
            <a href="#" class="text-white nav-link hover:text-gray-300">
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
