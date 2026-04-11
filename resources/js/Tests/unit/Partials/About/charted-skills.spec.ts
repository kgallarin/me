import { type RenderResult, render } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import { ChartedSkillsResponseDTO } from '@/Types/Responses';

import ChartedSkills from '@/Components/Partials/About/ChartedSkills.vue';

vi.mock('@/Components/Motion/ScrollReveal.vue', (): { default: { template: string } } => ({
  default: {
    template: '<div><slot /></div>',
  },
}));

const renderChartedSkills = async (skills: ChartedSkillsResponseDTO): Promise<RenderResult> => {
  return render(ChartedSkills, {
    props: { skills, animateOnce: true, animateOnlyScrollDown: false },
  });
};

const defaultProps = {
  leftTitle: 'test left title',
  leftContent: ['test left content 1'],

  rightTitle: 'test right title',
  rightContent: ['test right content 1'],
};
describe('ChartedSkills', (): void => {
  test('Renders component correctly', async (): Promise<void> => {
    const { getByTestId } = await renderChartedSkills(defaultProps);

    expect(getByTestId('charted-skills')).toBeInTheDocument();
  });
  test('Renders prop left texts correctly', async (): Promise<void> => {
    const { getByText } = await renderChartedSkills(defaultProps);

    expect(getByText('test left title')).toBeInTheDocument();

    expect(getByText('test left content 1')).toBeInTheDocument();
  });
  test('Renders prop right texts correctly', async (): Promise<void> => {
    const { getByText } = await renderChartedSkills(defaultProps);

    expect(getByText('test right title')).toBeInTheDocument();

    expect(getByText('test right content 1')).toBeInTheDocument();
  });
});
