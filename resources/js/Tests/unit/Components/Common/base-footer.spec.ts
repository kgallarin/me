import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { userEvent } from '@testing-library/user-event';
import { type RenderResult, render } from '@testing-library/vue';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { NavLink } from '@/Types/Props';

import BaseFooter from '@/Components/Common/BaseFooter.vue';

const renderBaseFooter = async (props: { nav?: NavLink[] } = {}): Promise<RenderResult> => {
  return render(BaseFooter, {
    global: {
      stubs: {
        'fa-icon': FontAwesomeIcon,
      },
    },
    props,
  });
};

describe('BaseFooter', (): void => {
  beforeEach((): void => {
    window.scrollTo = vi.fn();
  });

  test('Renders copyright with correct current year', async (): Promise<void> => {
    const year = new Date().getFullYear();
    const { getByText } = await renderBaseFooter();

    expect(getByText(new RegExp(`© ${year} Kevin Gallarin`))).toBeInTheDocument();
  });

  test('Renders navigation links when provided', async (): Promise<void> => {
    const nav: NavLink[] = [
      { label: 'Home', to: 'home', icon: 'chevron-right' },
      { label: 'About', to: 'about', icon: 'chevron-right' },
    ];
    const { getByText } = await renderBaseFooter({ nav });

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('About')).toBeInTheDocument();
  });

  test('Scrolls to top when chevron UP is clicked', async (): Promise<void> => {
    const { container } = await renderBaseFooter();

    const topLink = container.querySelector('a[href="#"]');
    expect(topLink).toBeInTheDocument();

    if (topLink) {
      await userEvent.click(topLink);
    }

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});
