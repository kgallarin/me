import { createTestingPinia } from '@pinia/testing';
import { setActivePinia } from 'pinia';

import { ref } from 'vue';

import { AppState, IBreakpoints, useAppStore } from '@/Store/Modules/App';

export const initializeViewportToDesktop = (isDesktop: boolean = true): void => {
  const pinia = createTestingPinia({
    stubActions: false,
    initialState: {
      app: {
        breakpoints: {
          greaterOrEqual: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') =>
            ref(isDesktop ? ['sm', 'md', 'lg'].includes(k) : ['sm'].includes(k)),
          smallerOrEqual: (k: 'sm' | 'md' | 'lg' | 'xl' | '2xl') =>
            ref(!isDesktop ? ['sm', 'md', 'lg'].includes(k) : ['sm'].includes(k)),
          between: () => ref(false),
          isGreater: () => isDesktop,
          isGreaterOrEqual: () => isDesktop,
          isSmaller: () => !isDesktop,
          isSmallerOrEqual: () => !isDesktop,
        } as unknown as IBreakpoints,
        queryBreakpoints: <T>(desktopValue: T, _tabletValue: T, mobileValue: T, _smallerTabletValue?: T): T => {
          if (_smallerTabletValue) {
            // do nothing
          }
          return isDesktop ? desktopValue : mobileValue;
        },
      } as Partial<AppState>,
    },
  });

  useAppStore();
  setActivePinia(pinia);
};
