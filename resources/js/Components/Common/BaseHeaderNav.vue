<script setup lang="ts">
  import { PropType, computed } from 'vue';

  import { FontAwesomeIcon as FaIcon } from '@fortawesome/vue-fontawesome';

  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  import { NavLink } from '@/Types/Props';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BrandLogo from '@/Components/Motion/BrandLogo.vue';
  import ScalesOnPress from '@/Components/Motion/ScalesOnPress.vue';

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
    theme: {
      type: String,
      required: false,
      default: 'light',
    },
    sidebarState: {
      type: Boolean,
      required: false,
      default: false,
    },
  });

  const iconLinksStore = useIconLinksStore();

  const iconLinks = computed(() =>
    iconLinksStore.getIconLinks.filter((link) => link.name === 'linkedIn' || link.name === 'github'),
  );

  const emit = defineEmits<{
    (e: 'toggleTheme'): void;
    (e: 'openSidebar'): void;
  }>();
  const toggleTheme = () => {
    emit('toggleTheme');
  };
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

            <li class="theme-switcher pl-4">
              <button
                class="theme-toggle flex items-center text-gray-300 transition-colors hover:text-white"
                :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
                @click="toggleTheme"
              >
                <fa-icon
                  :icon="['far', 'lightbulb']"
                  :class="[theme !== 'dark' ? 'text-yellow-primary' : 'text-gray-500', 'text-2xl']"
                />
              </button>
            </li>
          </ul>
        </nav>

        <scales-on-press class="md:hidden">
          <a
            href="#"
            class="flex items-center justify-center text-2xl text-white focus:outline-none"
            aria-label="Open menu"
            @click.prevent.stop="emit('openSidebar')"
          >
            <fa-icon :icon="['fas', sidebarState ? 'sliders' : 'bars']" />
          </a>
        </scales-on-press>
      </div>
    </base-container>
  </header>
</template>
