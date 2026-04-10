import router from '@/Router/index';
import { type RenderResult, render } from '@testing-library/vue';
import { createPinia, setActivePinia } from 'pinia';
import { describe, expect, test } from 'vitest';

import { NavLink } from '@/Types/Props';

import BaseHeaderNav from '@/Components/Common/BaseHeaderNav.vue';

interface BaseHeaderNavProps {
  nav?: NavLink[];
}

const renderBaseHeaderNav = async (props: BaseHeaderNavProps): Promise<RenderResult> => {
  const pinia = createPinia();
  setActivePinia(pinia);

  return render(BaseHeaderNav, {
    global: {
      plugins: [pinia, router],
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
];

describe('BaseHeaderNav', () => {
  test('base header nav renders properly', async (): Promise<void> => {
    const { getByTestId } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    expect(getByTestId('base-header-nav')).toBeInTheDocument();
  });

  test('given the default nav, the home link should be rendered', async (): Promise<void> => {
    const { getByTestId } = await renderBaseHeaderNav({
      nav: defaultNav,
    });

    expect(getByTestId('base-header-nav')).toHaveTextContent('home');
  });
});
