<script setup lang="ts">
  import { PropType, computed, onBeforeUnmount, ref, watch } from 'vue';

  import { onClickOutside } from '@vueuse/core';
  import { motion, stagger } from 'motion-v';

  import router from '@/Router';

  import { useAppStore } from '@/Store/Modules/App';
  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  import { NavLink } from '@/Types/Props';

  import BrandLogo from '@/Components/Motion/BrandLogo.vue';
  import ScalesOnPress from '@/Components/Motion/ScalesOnPress.vue';
  import StaggeringVerticalNav from '@/Components/Motion/StaggeringVerticalNav.vue';

  const appStore = useAppStore();
  const iconLinksStore = useIconLinksStore();

  const isSidebarOpen = computed(() => appStore.isSidebarOpen);

  let openTimeout: ReturnType<typeof setTimeout> | null = null;
  watch(isSidebarOpen, (newVal) => {
    if (newVal) {
      if (openTimeout) clearTimeout(openTimeout);
      openTimeout = setTimeout(() => {
        isSidebarAnimationComplete.value = false;
        openTimeout = null;
      }, 500);
    } else {
      if (openTimeout) {
        clearTimeout(openTimeout);
        openTimeout = null;
      }
    }
  });

  const iconLinks = computed(() => iconLinksStore.getIconLinks.filter((link) => link.name !== 'resume'));

  const closeSidebar = () => appStore.closeSidebar();
  const isDark = computed(() => appStore.theme === 1);
  const toggleTheme = () => appStore.toggleTheme();

  defineProps({
    nav: {
      type: Array as PropType<NavLink[]>,
      required: false,
      default: () => [],
    },
  });

  const navigateTo = (to: string) => {
    router.push({ name: to });
    appStore.closeSidebar();
  };

  const sidebarMain = ref(null);
  onClickOutside(sidebarMain, () => {
    if (isSidebarOpen.value) {
      closeSidebar();
    }
  });

  const isSidebarAnimationComplete = ref(!isSidebarOpen.value);
  const iconLinksContainerVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: {
        delayChildren: stagger(0.1, { startDelay: 0.5 }),
      },
    },
  };

  const iconLinksItemVariants = {
    closed: { opacity: 0, y: 10 },
    open: { opacity: 1, y: 0 },
  };

  onBeforeUnmount(() => {
    closeSidebar();
    if (openTimeout) clearTimeout(openTimeout);
    isSidebarAnimationComplete.value = false;
  });
  const onSidebarAnimationComplete = () => {
    if (!isSidebarOpen.value) {
      isSidebarAnimationComplete.value = true;
    }
  };
</script>

<template>
  <!-- Only render when store asks to open; clicking header's openSidebar triggers this -->
  <motion.nav
    :initial="'closed'"
    :animate="isSidebarOpen ? 'open' : 'closed'"
    class="nav container fixed left-0 top-0 z-[70] h-full w-full"
    :class="{ 'shadow-inner drop-shadow-xl': isSidebarOpen, 'pointer-events-none': !isSidebarOpen }"
  >
    <div ref="sidebarMain" class="sidebar-main h-full transition-opacity duration-300">
      <staggering-vertical-nav
        :nav-items="nav"
        :is-open="isSidebarOpen"
        @close="closeSidebar"
        @sidebar-animation-complete="onSidebarAnimationComplete"
      >
        <template #stagger-nav-slot="{ variants: { navVariants, itemVariants } }">
          <!-- Navigation (sample items) -->
          <motion.ul class="list" :variants="navVariants">
            <motion.li
              v-for="(navItem, index) in nav"
              :key="index - 1"
              class="list-item"
              :variants="itemVariants"
              :while-press="{ scale: 0.95 }"
            >
              <router-link
                :to="{ name: navItem.to || 'home' }"
                @click.prevent.stop="navigateTo(navItem.to || 'home')"
                class="nav-link flex w-full items-center justify-between pb-2 text-sm text-primary"
              >
                <span>
                  {{ navItem.label }}
                </span>

                <span>
                  <fa-icon class="text-xs text-gray-200" :icon="['fas', navItem.icon]" />
                </span>
              </router-link>
            </motion.li>
          </motion.ul>

          <motion.ul
            ref="icon-links"
            class="absolute bottom-5 right-10 z-50 flex w-full items-center justify-end gap-8 text-xl"
            :variants="iconLinksContainerVariants"
          >
            <motion.li v-for="link in iconLinks" :key="link.id" class="pl-0" :variants="iconLinksItemVariants">
              <a :href="link.url" target="_blank" class="flex flex-col items-center">
                <fa-icon :icon="link.icon" class="text-2xl text-primary" />
                <span class="text-[6px]">{{ link.name }}</span>
              </a>
            </motion.li>

            <motion.li class="pl-0" :variants="iconLinksItemVariants">
              <button
                class="flex flex-col items-center text-primary"
                :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                @click="toggleTheme"
              >
                <fa-icon :icon="['fas', isDark ? 'sun' : 'moon']" class="text-2xl" />
                <span class="text-[6px]">{{ isDark ? 'light' : 'dark' }}</span>
              </button>
            </motion.li>
          </motion.ul>
          <div
            class="absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center p-[6px_6px_6px_16px] text-xl"
          >
            <div class="flex w-full items-center justify-between">
              <div v-if="isSidebarOpen" class="h-[36px] w-[36px] sm:w-[44px]">
                <brand-logo class="block" for-light />
              </div>

              <scales-on-press>
                <div v-if="isSidebarOpen" class="p-3" @click.prevent.stop="closeSidebar" data-testid="close-sidebar">
                  <fa-icon :icon="['fas', 'times']" class="text-primary" />
                </div>
              </scales-on-press>
            </div>
          </div>
        </template>
      </staggering-vertical-nav>
    </div>
  </motion.nav>
</template>
