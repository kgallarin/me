<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';

  import { useAppStore } from '@/Store/Modules/App';
  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  import { NavLink } from '@/Types/Props';

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
  const iconLinksStore = useIconLinksStore();

  const openSidebar = appStore.openSidebar;
  const iconLinks = computed(() =>
    iconLinksStore.getIconLinks.filter((link) => link.name === 'linkedIn' || link.name === 'github'),
  );
</script>

<template>
  <header data-testid="base-header-nav" class="base-header-nav-main bg-[#171717]">
    <base-container>
      <div class="header-inner flex h-16 items-center justify-between">
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
                class="nav-link flex items-center gap-2 font-acumin font-normal hover:text-gray-300"
              >
                {{ item.label }}
              </router-link>
            </li>

            <li v-for="(link, index) in iconLinks" :key="link.id" :class="[index === 0 ? 'socials pl-8' : 'pl-0']">
              <a :href="link.url" target="_blank">
                <fa-icon :icon="link.icon" class="text-2xl" />
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#"
          class="text-2xl text-gray-400 focus:outline-none md:hidden"
          aria-label="Open menu"
          @click.prevent.stop="openSidebar"
        >
          <fa-icon :icon="['fas', 'bars']" />
        </a>
      </div>
    </base-container>
  </header>
</template>
