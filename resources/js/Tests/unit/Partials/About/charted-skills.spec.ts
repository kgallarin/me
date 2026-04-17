import { type RenderResult, render } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import { ContentResponseDTO } from '@/Types/Responses';

import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';

vi.mock('@/Components/Motion/ScrollReveal.vue', (): { default: { template: string } } => ({
  default: {
    template: '<div><slot /></div>',
  },
}));

const testContent = {
  title: 'test skill',
  content: [
    {
      title: 'test left title',
      text: 'test left content 1',
    },
    {
      title: 'test right title',
      text: 'test right content 1',
    },
  ],
  key: 'test-key',
  heroImages: [],
};
const renderChartedSkills = async (content: ContentResponseDTO = testContent): Promise<RenderResult> => {
  return render(ChartedSkills, {
    props: { content, animateOnce: true, animateOnlyScrollDown: false },
  });
};
describe('ChartedSkills', (): void => {
  test('Renders component correctly', async (): Promise<void> => {
    const { getByTestId } = await renderChartedSkills();

    expect(getByTestId('charted-skills')).toBeInTheDocument();
  });
  test('Renders prop left texts correctly', async (): Promise<void> => {
    const { getByText } = await renderChartedSkills();

    expect(getByText('test left title')).toBeInTheDocument();

    expect(getByText('test left content 1')).toBeInTheDocument();
  });
  test('Renders prop right texts correctly', async (): Promise<void> => {
    const { getByText } = await renderChartedSkills();

    expect(getByText('test right title')).toBeInTheDocument();

    expect(getByText('test right content 1')).toBeInTheDocument();
  });
});
