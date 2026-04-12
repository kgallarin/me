import { type RenderResult, render } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import { TitledTextResponseDTO } from '@/Types/Responses';

import RandomFacts from '@/Components/Partials/About/RandomFacts.vue';

vi.mock('@/Components/Motion/ScrollReveal.vue', (): { default: { template: string } } => ({
  default: {
    template: '<div><slot /></div>',
  },
}));

const renderRandomFacts = async (facts: TitledTextResponseDTO): Promise<RenderResult> => {
  return render(RandomFacts, {
    props: { facts, animateOnce: true, animateOnlyScrollDown: false },
  });
};

const defaultProps = {
  title: 'test nugget',
  text: ['random test text 1'],
};
describe('RandomFacts', (): void => {
  test('Component renders correctly', async (): Promise<void> => {
    const { getByTestId } = await renderRandomFacts(defaultProps);

    expect(getByTestId('random-facts')).toBeInTheDocument();
  });

  test('Texts renders correctly', async (): Promise<void> => {
    const { getByText } = await renderRandomFacts(defaultProps);

    expect(getByText('test nugget')).toBeInTheDocument();
    expect(getByText('random test text 1')).toBeInTheDocument();
  });
});
