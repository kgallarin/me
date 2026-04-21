import { initializeViewportToDesktop } from '@/Tests/unit/SetupFiles/store-breakpoints-helper';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createTestingPinia } from '@pinia/testing';
import { flushPromises } from '@vue/test-utils';
import { userEvent } from '@testing-library/user-event';
import { type RenderResult, render } from '@testing-library/vue';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import '@/Tests/unit/SetupFiles/mock-router-pages';

import router from '@/Router/index';

import { AppState, useAppStore } from '@/Store/Modules/App';

import { NavLink } from '@/Types/Props';

import BaseSideBar from '@/Components/Common/BaseSideBar.vue';

const renderBaseSideBar = async (
  props: { nav?: NavLink[] } = {},
  initialState: Partial<AppState> = {},
): Promise<RenderResult> => {
  initializeViewportToDesktop(true);

  return render(BaseSideBar, {
    global: {
      plugins: [
        router,
        createTestingPinia({
          initialState: {
            app: {
              isSidebarOpen: false,
              ...initialState,
            },
          },
          stubActions: false,
        }),
      ],
      stubs: {
        'fa-icon': FontAwesomeIcon,
        'motion.nav': {
          template: '<nav v-show="animate === \'open\'"><slot /></nav>',
          props: ['animate'],
        },
        'motion.ul': {
          template: '<ul><slot /></ul>',
        },
        'motion.li': {
          template: '<li><slot /></li>',
        },
        'staggering-vertical-nav': {
          template: '<div><slot name="stagger-nav-slot" :variants="{ navVariants: {}, itemVariants: {} }" /></div>',
        },
        'scales-on-press': {
          template: '<div><slot /></div>',
        },
        'brand-logo': {
          template: '<div data-testid="brand-logo"></div>',
        },
      },
    },
    props,
  });
};

const defaultNav: NavLink[] = [
  {
    label: 'Home',
    to: 'home',
    icon: 'home',
  },
  {
    label: 'About',
    to: 'about',
    icon: 'user',
  },
  {
    label: 'Story',
    to: 'story',
    icon: 'user',
  },
];

describe('BaseSideBar', (): void => {
  beforeEach((): void => {
    window.scrollTo = vi.fn();
  });
  afterEach((): void => {
    vi.clearAllMocks();
  });

  test('Sidebar is hidden by default', async (): Promise<void> => {
    const { queryByRole } = await renderBaseSideBar({ nav: defaultNav });

    // motion.nav uses v-show="isOpen"
    const nav = queryByRole('navigation', { hidden: true });
    expect(nav).not.toBeVisible();
  });

  test('Sidebar is visible when isOpen is true', async (): Promise<void> => {
    const { getByRole } = await renderBaseSideBar({ nav: defaultNav }, { isSidebarOpen: true });

    const nav = getByRole('navigation');
    expect(nav).toBeVisible();
  });

  test('Navigation items mounts properly', async (): Promise<void> => {
    const { getByText } = await renderBaseSideBar({ nav: defaultNav }, { isSidebarOpen: true });

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
  });

  test('Clicking a nav item navigates and closes sidebar', async (): Promise<void> => {
    const { getByText } = await renderBaseSideBar({ nav: defaultNav }, { isSidebarOpen: true });
    const appStore = useAppStore();

    const homeLink = getByText('Story');
    await userEvent.click(homeLink);
    await flushPromises();

    expect(router.currentRoute.value.name).toBe('story');
    expect(appStore.closeSidebar).toHaveBeenCalled();
  });

  test('Clicking close button closes sidebar', async (): Promise<void> => {
    const { getByTestId } = await renderBaseSideBar({ nav: defaultNav }, { isSidebarOpen: true });
    const appStore = useAppStore();

    const closeButton = getByTestId('close-sidebar');
    await userEvent.click(closeButton);

    expect(appStore.closeSidebar).toHaveBeenCalled();
  });
});
