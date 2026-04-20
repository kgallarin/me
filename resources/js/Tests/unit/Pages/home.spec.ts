import router from '@/Router/index';
import { initializeViewportToDesktop } from '@/Tests/unit/SetupFiles/store-breakpoints-helper';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { type RenderResult, render, waitFor } from '@testing-library/vue';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import HomePage from '@/Components/Pages/Home/index.vue';

const renderHomePage = async (): Promise<RenderResult> => {
  return render(HomePage, {
    global: {
      stubs: {
        'fa-icon': FontAwesomeIcon,
      },
      plugins: [router],
    },
  });
};

describe('HomePage', (): void => {
  describe('Desktop view', () => {
    beforeEach((): void => {
      initializeViewportToDesktop(true);
      window.scrollTo = vi.fn();
    });

    test('after rendering, toast shows up as a tip for "Hover" over texts', async (): Promise<void> => {
      const { getByText } = await renderHomePage();

      await waitFor(
        (): void => {
          expect(getByText('Hover the texts behind me, to explore skills')).toBeInTheDocument();
        },
        { timeout: 2000 },
      );
    });
  });

  describe('Mobile view', () => {
    beforeEach((): void => {
      initializeViewportToDesktop(false);
      window.scrollTo = vi.fn();
    });

    test('After rendering, toast shows up as a tip for "Tap" over texts', async (): Promise<void> => {
      const { getByText } = await renderHomePage();

      await waitFor(
        (): void => {
          expect(getByText('Tap the texts behind me, to explore skills')).toBeInTheDocument();
        },
        { timeout: 2000 },
      );
    });
  });
});
