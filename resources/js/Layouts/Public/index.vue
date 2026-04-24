<script setup lang="ts">
  import { ComponentPublicInstance, computed, onUnmounted, ref } from 'vue';

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
  const iconLinksReady = ref(false);
  iconLinksStore.fetchIconLinks().finally(() => {
    iconLinksReady.value = true;
  });

  const appStore = useAppStore();
  const toggleTheme = () => {
    appStore.toggleTheme();
  };
  const theme = computed(() => (appStore.getTheme === 0 ? 'light' : 'dark'));
  const openSidebar = appStore.openSidebar;
  const sidebarState = computed(() => appStore.isSidebarOpen);

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

  const dateNow = ref(new Date());
  const yearNow = computed(() => dateNow.value.getFullYear());
  // time
  const timeWithFormat = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Singapore',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
  const timeNow = computed(() => timeWithFormat.format(dateNow.value));

  let liveTime;

  liveTime = setInterval(() => {
    dateNow.value = new Date();
  }, 1000);

  onUnmounted(() => {
    clearInterval(liveTime);
  });
</script>

<template>
  <base-header-nav
    :nav="defaultNav"
    :sidebar-state="sidebarState"
    :theme="theme"
    @toggleTheme="toggleTheme"
    @open-sidebar="openSidebar"
  />
  <!-- add more layout components if necessary -->
  <base-side-bar :nav="defaultNav" :app-theme="theme" :time-now="timeNow" />

  <AnimatePresence>
    <motion.div
      v-if="iconLinksReady && prevPage && showLeftAndRightNavigators"
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
      v-if="iconLinksReady && nextPage && showLeftAndRightNavigators"
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

  <base-footer
    ref="footerRef"
    :nav="defaultNav"
    :theme="theme"
    @toggleTheme="toggleTheme"
    :year-now="yearNow"
    :time-now="timeNow"
  />
</template>
