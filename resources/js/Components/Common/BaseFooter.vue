<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  import { NavLink } from '@/Types/Props';

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
  });

  const iconLinksStore = useIconLinksStore();
  const iconLinks = computed(() => iconLinksStore.getIconLinks.filter((link) => link.name !== 'resume'));

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

    <div class="inner mx-auto flex flex-col justify-center md:flex-row md:justify-between lg:max-w-screen-xl">
      <div class="flex flex-col items-center gap-4 md:items-start">
        <p class="font-proxima text-sm font-light text-primary">&copy; {{ year }} Kevin Gallarin</p>
        <div class="flex gap-4">
          <a
            v-for="link in iconLinks"
            :key="link.id"
            :href="link.url"
            target="_blank"
            class="text-primary hover:text-gray-500"
          >
            <fa-icon :icon="link.icon" class="text-xl" />
          </a>
        </div>
      </div>

      <!-- nav starts-->
      <div class="itemst-center flex flex-col md:items-end">
        <nav class="hidden md:block">
          <ul class="text-md flex gap-8 text-primary">
            <li v-for="item in nav" :key="item.label">
              <router-link
                :to="{ name: item.to }"
                class="nav-link flex items-center gap-2 font-acumin font-normal hover:text-gray-500"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>

        <p class="mt-4 text-center font-proxima text-xs">
          Created with <fa-icon :icon="['fa', 'heart']" class="text-red-600 shadow-sm" />, KG
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  li {
    .nav-link {
      @apply font-acumin text-gray-500;
      &.active {
        @apply text-gray-400;
      }
    }
  }
</style>
