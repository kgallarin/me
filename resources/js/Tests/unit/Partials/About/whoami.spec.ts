import { initializeViewportToDesktop } from '@/Tests/unit/SetupFiles/store-breakpoints-helper';
import { RenderResult, render } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import Whoami from '@/Components/Partials/About/Whoami.vue';

vi.mock('@/Components/Motion/Splider.vue', () => ({
  default: {
    name: 'Splider',
    props: ['itemsToShow'],
    template: '<div data-testid="splider-mock" :data-items-to-show="itemsToShow"></div>',
  },
}));

const mockData = {
  title: '$ whoami',
  subtitle: "I'm a frontend/software engineer from<br />☀️ Manila, Philippines.",
  key: 'whoami',
  content: [
    {
      title: '',
      text: 'With over a decade of experience, I bridge the gap between design and development, delivering intuitive client solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the syntax, I enjoy spending time working out, gaming occasionally, exploring places, listening to music, cooking and learning new things.',
    },
  ],
  heroImages: [{ url: 'test.png', alt: 'test' }],
  socialImages: [],
};

const renderWhoami = async (isDesktop: boolean = true): Promise<RenderResult> => {
  initializeViewportToDesktop(isDesktop);
  return render(Whoami, {
    props: {
      content: mockData,
    },
  });
};

describe('Whoami', (): void => {
  // Whoami.vue: const responsiveQueries = computed(() => appStore.queryBreakpoints(8, 4, 3));
  test('Component renders correctly and checks content', async (): Promise<void> => {
    const { container, getByText } = await renderWhoami();

    expect(container).toBeInTheDocument();
    expect(getByText('$ whoami')).toBeInTheDocument();

    expect(getByText(/I'm a frontend\/software engineer from/)).toBeInTheDocument();
    expect(getByText(/Manila, Philippines/)).toBeInTheDocument();

    expect(
      getByText(
        /With over a decade of experience, I bridge the gap between design and development, delivering intuitive client solutions with a natural instinct for the designer’s perspective. When I’m stepping away from the syntax, I enjoy spending time working out, gaming occasionally, exploring places, listening to music, cooking and learning new things./,
      ),
    ).toBeInTheDocument();
  });
  test('Uses correct number of items shown for desktop', async (): Promise<void> => {
    // desktop = 8
    const { getByTestId } = await renderWhoami(true);
    const splider = getByTestId('splider-mock');
    expect(splider.getAttribute('data-items-to-show')).toBe('8');
  });

  test('Uses correct number of items shown for mobile', async (): Promise<void> => {
    // mobile = 2
    const { getByTestId } = await renderWhoami(false);
    const splider = getByTestId('splider-mock');
    expect(splider.getAttribute('data-items-to-show')).toBe('2');
  });
});
