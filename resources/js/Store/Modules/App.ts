import type { Ref } from 'vue';

import { Theme } from '@/Constants/app';
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core';
import { defineStore } from 'pinia';

export interface IBreakpoints {
  greater: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => Ref<boolean>;
  greaterOrEqual: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => Ref<boolean>;
  smaller: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => Ref<boolean>;
  smallerOrEqual: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => Ref<boolean>;
  between: (a: 'sm' | 'md' | 'lg' | 'xl' | '2xl', b: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => Ref<boolean>;
  isGreater: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => boolean;
  isGreaterOrEqual: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => boolean;
  isSmaller: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => boolean;
  isSmallerOrEqual: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => boolean;
}

export interface AppState {
  breakpoints: IBreakpoints;
  mobileMenuOpen: boolean;
  responsiveDataListRows: number;
  queryParams: {
    [key: string]: string | null;
  } | null;
  routeFrom: string | null;
  windowSize: {
    width: number;
    height: number;
  } | null;
  scrollPosition: {
    x: number;
    y: number;
  } | null;
  theme: Theme;
  isSidebarOpen: boolean;
}

const state = (): AppState => ({
  breakpoints: useBreakpoints(breakpointsTailwind),
  responsiveDataListRows: 2,
  windowSize: null,
  scrollPosition: {
    x: 0,
    y: 0,
  },
  queryParams: null,
  mobileMenuOpen: false,
  routeFrom: null,
  theme: Number(localStorage.getItem('theme')) || 0,
  isSidebarOpen: false,
});

const getters = {
  isTabletMobile: (state: AppState) => state.breakpoints.greaterOrEqual('md').value, // < lg (phones + tablets)
  isSmallerTablet: (state: AppState) => state.breakpoints.between('sm', 'md').value,
  isDesktop: (state: AppState) => state.breakpoints.greaterOrEqual('lg').value, // >= lg
  isMobile: (state: AppState) => state.breakpoints.smallerOrEqual('sm').value,
  getScrollPosition: (state: AppState) => state.scrollPosition,
  queryBreakpoints:
    (state: AppState) =>
    <T>(desktopValue: T, tabletValue: T, mobileValue: T, smallerTabletValue?: T): T => {
      if (state.breakpoints.greaterOrEqual('lg').value) {
        return desktopValue;
      }
      if (state.breakpoints.between('sm', 'md').value) {
        return smallerTabletValue !== undefined ? smallerTabletValue : tabletValue;
      }
      if (state.breakpoints.greaterOrEqual('md').value) {
        return tabletValue;
      }
      return mobileValue;
    },
};

const mutations = {
  refreshBreakpoints(this: { breakpoints: IBreakpoints }): void {
    this.breakpoints = useBreakpoints(breakpointsTailwind) as IBreakpoints;
  },

  setActiveModal(this: { hasActiveModal: boolean }, flag: boolean): void {
    this.hasActiveModal = flag;
  },

  setWindowSize(
    this: { windowSize: { width: number; height: number } | null; breakpoints: IBreakpoints },
    width: number,
    height: number,
  ): void {
    this.windowSize = { width, height };
    this.breakpoints = useBreakpoints(breakpointsTailwind) as IBreakpoints;
  },

  setTheme(this: { theme: Theme }, theme: Theme): void {
    this.theme = theme;
  },

  toggleTheme(this: { theme: Theme }): void {
    this.theme = this.theme === 0 ? 1 : 0;
  },
  closeSidebar(this: { isSidebarOpen: boolean }): void {
    this.isSidebarOpen = false;
  },
  openSidebar(this: { isSidebarOpen: boolean }): void {
    this.isSidebarOpen = true;
  },
};

const actions = {};

export const useAppStore = defineStore('app', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
  persist: {
    storage: localStorage,
    pick: ['queryParams', 'theme', 'responsiveDataListRows', 'navbar'],
  },
});
