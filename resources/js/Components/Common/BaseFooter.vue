<script setup lang="ts">
  import { PropType } from 'vue';

  import { NavLink } from '@/Types/Props';

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
  });

  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
</script>

<template>
  <div class="relative border border-t border-gray-secondary bg-gray-lighter p-8">
    <a
      href="#"
      class="absolute -top-8 left-0 right-0 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-t border-gray-secondary bg-gray-lighter md:-top-11 md:h-24 md:w-24"
      @click.prevent="scrollToTop"
    >
      <fa-icon :icon="['fa', 'chevron-up']" class="relative -top-2 text-4xl text-black/30 md:-top-5" />
    </a>

    <div class="inner mx-auto flex justify-center md:justify-between lg:max-w-screen-xl">
      <p class="font-proxima text-sm font-light text-primary">&copy; {{ year }} Kevin Gallarin</p>

      <!-- nav starts-->
      <nav class="hidden md:block">
        <ul class="text-md flex gap-8 text-primary">
          <li v-for="item in nav" :key="item.label">
            <a href="#" class="nav-link flex items-center gap-2 font-acumin font-normal hover:text-gray-300">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
