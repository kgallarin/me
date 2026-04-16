<script setup lang="ts">
  import { PropType, computed, onBeforeUnmount, ref, watch } from 'vue';

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

  const isOpen = computed(() => appStore.isSidebarOpen);

  watch(isOpen, (newVal) => {
    if (!newVal) {
      isSidebarAnimationComplete.value = false;
    }
  });

  const iconLinks = computed(() => iconLinksStore.getIconLinks.filter((link) => link.name !== 'resume'));

  const closeSidebar = () => appStore.closeSidebar();

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

  const isSidebarAnimationComplete = ref(false);
  const handleSidebarAnimation = () => {
    isSidebarAnimationComplete.value = true;
  };

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
    isSidebarAnimationComplete.value = false;
  });
</script>

<template>
  <!-- Only render when store asks to open; clicking header's openSidebar triggers this -->
  <motion.nav
    v-show="isOpen"
    class="nav container fixed left-0 top-0 z-[70] h-full w-11/12 bg-white shadow-inner drop-shadow-xl"
  >
    <div class="container h-full">
      <staggering-vertical-nav
        :nav-items="nav"
        :is-open="isOpen"
        @sidebar-animation-complete="handleSidebarAnimation"
        @close="closeSidebar"
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
                class="nav-link flex w-full items-center justify-between pb-2 text-sm"
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
          </motion.ul>
          <scales-on-press
            class="absolute left-0 top-0 flex w-full cursor-pointer items-center justify-center p-4 text-xl"
          >
            <div class="flex w-full items-center justify-between">
              <div class="h-[36px] w-[36px] sm:w-[44px]">
                <brand-logo class="block" for-light />
              </div>

              <div class="p-3" @click.prevent.stop="closeSidebar" data-testid="close-sidebar">
                <fa-icon :icon="['fas', 'times']" class="text-primary" />
              </div>
            </div>
          </scales-on-press>
        </template>
      </staggering-vertical-nav>
    </div>
  </motion.nav>
</template>

<style scoped lang="scss">
  .list {
    @apply absolute top-20 m-0 w-full list-none p-6;
    &-item {
      @apply m-0 mb-2 flex cursor-pointer list-none items-center justify-start p-0 text-lg;
    }
  }
  .nav-link {
    @apply text-primary;
  }

  li {
    &:nth-child(even) {
      .nav-link {
        &.active {
          @apply text-teal-400;
          span {
            color: inherit;
          }
        }
      }
    }

    &:nth-child(odd) {
      .nav-link {
        &.active {
          @apply text-yellow-400;
          span {
            color: inherit;
          }
        }
      }
    }
  }
</style>
