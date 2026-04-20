<script setup lang="ts">
  import { ComponentPublicInstance, computed, ref } from 'vue';

  import { useScroll } from '@vueuse/core';
  import { AnimatePresence, motion } from 'motion-v';
  import { useRoute } from 'vue-router';

  import { useAppStore } from '@/Store/Modules/App';
  import { useIconLinksStore } from '@/Store/Modules/IconLinks';

  import BaseFooter from '@/Components/Common/BaseFooter.vue';
  import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';
  import BaseSideBar from '@/Components/Common/BaseSideBar.vue';
  import ScalesOnPress from '@/Components/Motion/ScalesOnPress.vue';

  const iconLinksStore = useIconLinksStore();
  iconLinksStore.fetchIconLinks();

  const appStore = useAppStore();
  const theme = computed(() => appStore.getTheme);
  const { x: horizontalScrollPosition, y: verticalScrollPosition } = useScroll(window, {
    onScroll: () => appStore.setScrollPosition(horizontalScrollPosition.value, verticalScrollPosition.value),
  });

  const route = useRoute();

  const footerRef = ref<ComponentPublicInstance | null>(null);
  const showLeftAndRightNavigators = computed(() => {
    const footerTop = footerRef.value?.$el?.offsetTop ?? Infinity;
    const footerVisible = verticalScrollPosition.value + window.innerHeight >= footerTop;
    return verticalScrollPosition.value > 500 && !footerVisible && route.name !== 'home';
  });

  const defaultNav = [
    {
      label: 'home',
      to: 'home',
      icon: 'chevron-right',
    },
    {
      label: 'about',
      to: 'about',
      icon: 'chevron-right',
    },
    {
      label: 'story',
      to: 'story',
      icon: 'chevron-right',
    },
    {
      label: 'contact',
      to: 'contact',
      icon: 'chevron-right',
    },
  ];

  const pageOrder = ['home', 'about', 'story', 'contact'];

  const currentIndex = computed(() => pageOrder.indexOf(route.name as string));
  const prevPage = computed(() => (currentIndex.value > 0 ? pageOrder[currentIndex.value - 1] : null));
  const nextPage = computed(() =>
    currentIndex.value < pageOrder.length - 1 ? pageOrder[currentIndex.value + 1] : null,
  );
</script>

<template>
  <base-header-nav :nav="defaultNav" />
  <!-- add more layout components if necessary -->
  <base-side-bar :nav="defaultNav" :app-theme="theme === 0 ? 'light' : 'dark'" />

  <AnimatePresence>
    <motion.div
      v-if="prevPage && showLeftAndRightNavigators"
      key="nav-prev"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.4 }"
      class="fixed -left-5 top-1/2 z-40 -translate-y-1/2 md:-left-12"
    >
      <scales-on-press>
        <router-link
          :to="{ name: prevPage }"
          class="flex h-10 w-10 items-center justify-center rounded-full border-t bg-primary shadow-lg lg:h-20 lg:w-20"
        >
          <fa-icon
            :icon="['fa', 'chevron-left']"
            class="relative -right-2 text-xs text-secondary md:-right-5 md:text-xl"
          />
        </router-link>
      </scales-on-press>
    </motion.div>
  </AnimatePresence>

  <AnimatePresence>
    <motion.div
      v-if="nextPage && showLeftAndRightNavigators"
      key="nav-next"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
      :transition="{ duration: 0.4 }"
      class="fixed -right-5 top-1/2 z-40 -translate-y-1/2 md:-right-12"
    >
      <scales-on-press>
        <router-link
          :to="{ name: nextPage }"
          class="flex h-10 w-10 items-center justify-center rounded-full border-t bg-primary lg:h-20 lg:w-20"
        >
          <fa-icon
            :icon="['fa', 'chevron-right']"
            class="relative -left-2 text-xs text-secondary md:-left-5 md:-right-2 md:text-xl"
          />
        </router-link>
      </scales-on-press>
    </motion.div>
  </AnimatePresence>

  <div class="flex flex-1 flex-col">
    <router-view />
  </div>

  <base-footer ref="footerRef" :nav="defaultNav" />
</template>
