<script setup lang="ts">
  import router from '@/Router';
  import { motion } from 'motion-v';

  import { PropType, computed, onBeforeUnmount, ref } from 'vue';

  import { NavLink } from '@/Types/Props';

  import { useAppStore } from '@/Store/Modules/App';

  import BrandLogo from '@/Components/Motion/BrandLogo.vue';
  import ScalesOnPress from '@/Components/Motion/ScalesOnPress.vue';
  import StaggeringVerticalNav from '@/Components/Motion/StaggeringVerticalNav.vue';

  const appStore = useAppStore();
  const isOpen = computed(() => appStore.isSidebarOpen);

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
  const handleSidebarAnimation = () => (isSidebarAnimationComplete.value = true);

  onBeforeUnmount(() => {
    closeSidebar();
  });
</script>

<template>
  <!-- Only render when store asks to open; clicking header's openSidebar triggers this -->
  <motion.nav
    v-show="isOpen"
    class="nav container fixed left-0 top-0 z-[70] h-full w-11/12 shadow-inner drop-shadow-xl"
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
                class="text-text-primary flex w-full items-center justify-between pb-2 text-sm"
                :class="isSidebarAnimationComplete ? 'border-b border-gray-100' : ''"
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
  }
  .list-item {
    @apply m-0 mb-2 flex cursor-pointer list-none items-center justify-start p-0 text-lg;
  }
</style>
