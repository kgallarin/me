<script setup lang="ts">
  import { computed, ref } from 'vue';

  import { useAppStore } from '@/Store/Modules/App';
  import { useProjectsStore } from '@/Store/Modules/Projects';

  import BaseToast from '@/Components/Common/BaseToast.vue';
  import LandingHero from '@/Components/Partials/Home/LandingHero/index.vue';
  import Projects from '@/Components/Partials/Home/Projects/index.vue';

  const isHoveredRight = ref(false);
  const isHoveredLeft = ref(false);
  const showToast = ref(false);
  const handleHoverLeft = () => {
    isHoveredLeft.value = true;
    // showToast.value = true;
  };
  const handleHoverRight = () => {
    isHoveredRight.value = true;
    // showToast.value = true;
  };

  const handleHoverLeave = () => {
    isHoveredRight.value = false;
    isHoveredLeft.value = false;
  };

  const appStore = useAppStore();
  const isDesktop = computed(() => appStore.isDesktop);
  const appTheme = computed(() => (appStore.theme === 0 ? 'light' : 'dark'));

  const projectsStore = useProjectsStore();

  const projectsData = computed(() => projectsStore.projects);
  projectsStore.fetchProjects();
  setTimeout(() => {
    showToast.value = true;
  }, 1000);
</script>

<template>
  <div
    class="flex flex-1 flex-col bg-gray-lighter bg-[url('@images/backgrounds/webp/leaves-4.webp')] bg-blend-multiply"
  >
    <!-- slotted toast, dont miss the offset -->
    <!--    <base-toast-->
    <!--      :show="showToast"-->
    <!--      position="top"-->
    <!--      :index="0"-->
    <!--      :show-delay="0"-->
    <!--    	:toast-offset="60"-->
    <!--      @close="showToast = false"-->
    <!--      :theme="appTheme"-->
    <!--    >-->
    <!--      <template #default="{ close }">-->
    <!--        <div-->
    <!--          class="flex items-center px-4 py-2 text-sm font-medium text-black shadow-lg ring-1 ring-black ring-opacity-5"-->
    <!--        >-->
    <!--          <span ref="sunMoonIcon" class="relative inline-block h-4 w-4 flex-shrink-0">-->
    <!--            <fa-icon-->
    <!--              :icon="['fas', 'sun']"-->
    <!--              class="absolute inset-0 h-4 w-4 text-yellow-400"-->
    <!--              style="clip-path: inset(0 50% 0 0)"-->
    <!--            />-->
    <!--            <fa-icon :icon="['fas', 'moon']" class="absolute inset-0 left-3 top-[2px] h-3 w-3 text-gray-800" />-->
    <!--          </span>-->
    <!--          <span class="pl-3 text-xs md:text-base"> Dark mode available! </span>-->
    <!--          <button-->
    <!--            type="button"-->
    <!--            class="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none"-->
    <!--            @click="close"-->
    <!--          >-->
    <!--            <fa-icon :icon="['fas', 'times']" class="h-3 w-3" />-->
    <!--          </button>-->
    <!--        </div>-->
    <!--      </template>-->
    <!--    </base-toast>-->
    <base-toast
      :show="showToast"
      :message="`${isDesktop ? 'Hover' : 'Tap'} the texts behind me, to explore skills`"
      position="top"
      :toast-offset="0"
      :index="1"
      :show-delay="700"
      @close="showToast = false"
      :theme="appTheme"
    />
    <div>
      <landing-hero
        :is-hovered-right="isHoveredRight"
        :is-hovered-left="isHoveredLeft"
        @hover-right="handleHoverRight"
        @hover-left="handleHoverLeft"
        @hover-leave="handleHoverLeave"
      />
    </div>
    <div class="">
      <projects :projects="projectsData" :theme="appTheme" />
    </div>
  </div>
</template>
