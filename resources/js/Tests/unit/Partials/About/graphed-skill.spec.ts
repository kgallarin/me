import { type RenderResult, render } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import GraphedSkills from '@/Components/Partials/About/GraphedSkills.vue';

vi.mock('@/Components/Motion/ScrollReveal.vue', (): { default: { template: string } } => ({
  default: {
    template: '<div><slot /></div>',
  },
}));

vi.mock('@/Components/Partials/SkillChart/index.vue', (): { default: { template: string; props: string[] } } => ({
  default: {
    template: '<div data-testid="skill-chart">Skill Chart</div>',
    props: ['animateOnce', 'animateOnlyScrollDown'],
  },
}));

const renderGraphedSkills = async (props = {}): Promise<RenderResult> => {
  return render(GraphedSkills, {
    props,
  });
};

describe('GraphedSkill', (): void => {
  test('Renders texts and chart component correctly', async (): Promise<void> => {
    const { container, getByText, getByTestId } = await renderGraphedSkills();

    expect(getByText('My Skills')).toBeInTheDocument();
    expect(getByText('more or less')).toBeInTheDocument();
    expect(getByTestId('skill-chart')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
