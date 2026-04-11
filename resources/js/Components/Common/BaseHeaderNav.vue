<script setup lang="ts">
  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';

  import { PropType } from 'vue';

  import { NavLink } from '@/Types/Props';

  import { useAppStore } from '@/Store/Modules/App';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BrandLogo from '@/Components/Motion/BrandLogo.vue';

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
  });

  const appStore = useAppStore();
  const openSidebar = appStore.openSidebar;
</script>

<template>
  <header data-testid="base-header-nav" class="bg-[#171717]">
    <base-container>
      <div
        class="header-inner mx-auto flex h-16 items-center justify-between lg:max-w-screen-lg lg:px-0 xl:max-w-screen-xl"
      >
        <div class="w-[36px] sm:w-[44px]">
          <router-link data-testid="brand-logo" :to="{ name: 'home' }">
            <brand-logo />
          </router-link>
        </div>

        <!-- nav starts-->
        <nav class="hidden md:block">
          <ul class="text-md flex gap-8">
            <li v-for="item in nav" :key="item.label">
              <router-link
                :to="{ name: item.to }"
                class="nav-link flex items-center gap-2 font-acumin font-normal text-white hover:text-gray-300"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </nav>

        <a
          href="#"
          class="text-2xl text-white focus:outline-none md:hidden"
          aria-label="Open menu"
          @click.prevent.stop="openSidebar"
        >
          <fa-icon :icon="['fas', 'bars']" />
        </a>
      </div>
    </base-container>
  </header>
</template>

<style scoped>
  .header-inner {
    @apply flex items-center justify-between;
  }
</style>
