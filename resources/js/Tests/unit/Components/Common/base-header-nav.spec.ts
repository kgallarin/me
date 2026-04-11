import router from '@/Router/index';
import { initializeViewportToDesktop } from '@/Tests/unit/SetupFiles/store-breakpoints-helper';
import { userEvent } from '@testing-library/user-event';
import { type RenderResult, render } from '@testing-library/vue';
import { beforeAll, describe, expect, test, vi } from 'vitest';

import { NavLink } from '@/Types/Props';

import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

const renderBaseHeaderNav = async (props: { nav?: NavLink[] }): Promise<RenderResult> => {
  initializeViewportToDesktop(true);

  return render(BaseHeaderNav, {
    global: {
      plugins: [router],
      mocks: {},
    },
    props,
  });
};

const defaultNav: NavLink[] = [
  {
    label: 'home',
    to: '',
    icon: 'chevron-right',
  },
  {
    label: 'about',
    to: 'about',
    icon: 'chevron-right',
  },
];

describe('BaseHeaderNav', (): void => {
  beforeAll(() => {
    window.scrollTo = vi.fn();
  });

  test('Base header component nav renders properly', async (): Promise<void> => {
    const { getByTestId } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    expect(getByTestId('base-header-nav')).toBeInTheDocument();
  });

  test('Given the default nav, the home link should be rendered', async (): Promise<void> => {
    const { getByTestId } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    expect(getByTestId('base-header-nav')).toHaveTextContent('home');
  });

  test('Brand logo should be rendered', async (): Promise<void> => {
    const { getByTestId } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    expect(getByTestId('brand-logo')).toBeInTheDocument();
  });

  test('Clicking on brand logo should navigate to home', async (): Promise<void> => {
    const { getByTestId } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    const brandLogo = getByTestId('brand-logo');
    await userEvent.click(brandLogo);

    expect(router.currentRoute.value.path).toBe('/');
  });

  test('Clicks to a nav link (about) should navigate to the correct route', async (): Promise<void> => {
    const { getByText } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    const aboutLink = getByText('about');
    await userEvent.click(aboutLink);

    expect(router.currentRoute.value.path).toBe('/about');
  });
});
