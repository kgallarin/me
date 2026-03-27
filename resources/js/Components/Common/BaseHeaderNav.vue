<script setup lang="ts">
  import { PropType } from 'vue';

  import { NavLink } from '@/Types/Props';

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
    <div
      class="header-inner mx-auto flex h-16 items-center justify-between md:px-8 lg:max-w-screen-lg xl:max-w-screen-xl"
    >
      <brand-logo spinner-width="w-11" spinner-height="h-11" container-width="w-11" container-height="h-11" />

      <!-- nav starts-->
      <nav>
        <ul class="text-md flex gap-8">
          <li v-for="item in nav" :key="item.label">
            <a href="#" class="nav-link font-acumin font-normal text-white hover:text-gray-300">
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
    @apply flex items-center justify-between;
  }
</style>
