import { RenderResult, fireEvent, render, waitFor } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import { RecommendationsResponseDTO } from '@/Types/Responses';

import Recommendations from '@/Components/Partials/About/Recommendations.vue';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Mock ScrollReveal
vi.mock('@/Components/Motion/ScrollReveal.vue', () => ({
  default: {
    template: '<div><slot /></div>',
  },
}));

// Mock BaseImage
vi.mock('@/Components/Common/BaseImage.vue', () => ({
  default: {
    template: '<img  alt="test"/>',
    props: ['src', 'alt'],
  },
}));

const renderRecommendations = async (props: {
  testimonials: RecommendationsResponseDTO[];
  animateOnce: boolean;
  animateOnlyScrollDown: boolean;
}): Promise<RenderResult> => {
  return render(Recommendations, {
    global: {},
    props,
  });
};

describe('Recommendations', (): void => {
  test('Renders component correctly', async (): Promise<void> => {
    const { getByText } = await renderRecommendations({
      testimonials: [
        {
          id: 'test-id',
          order: 1,
          author: 'test author',
          title: 'test title',
          avatar: {
            url: 'test image',
            alt: 'test alt',
          },
          linkedIn: false,
          rating: 5,
          text: 'test text',
        },
      ],
      animateOnce: true,
      animateOnlyScrollDown: false,
    });

    await waitFor(
      (): void => {
        expect(getByText('Kudos')).toBeTruthy();
      },
      { timeout: 1000 },
    );
  });

  test('Text toggles label when clicking read more/show less', async (): Promise<void> => {
    const { getAllByText } = await renderRecommendations({
      testimonials: [
        {
          id: 'test-id',
          order: 1,
          author: 'test author',
          title: 'test title',
          avatar: {
            url: 'test image',
            alt: 'test alt',
          },
          linkedIn: false,
          rating: 5,
          text: 'test text',
        },
      ],
      animateOnce: true,
      animateOnlyScrollDown: false,
    });

    // mobile, tablet, desktop
    const readMoreButtons = getAllByText('read more');
    expect(readMoreButtons.length).toBeGreaterThan(0);

    // Click first
    await fireEvent.click(readMoreButtons[0]);

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();

    expect(getAllByText('show less').length).toBe(1);
  });
});
