import { initializeViewportToDesktop } from '@/Tests/unit/SetupFiles/store-breakpoints-helper';
import { type RenderResult, render } from '@testing-library/vue';
import { beforeEach, describe, expect, test } from 'vitest';

import HeroAnimatedTexts from '@/Components/Partials/Home/LandingHero/HeroAnimatedTexts/index.vue';

const renderHeroAnimatedTexts = async (props = {}): Promise<RenderResult> => render(HeroAnimatedTexts, { props });

describe('Hero animated texts', () => {
  beforeEach((): void => {
    initializeViewportToDesktop(true);
  });

  test('Renders skills texts correctly', async (): Promise<void> => {
    const { getByText } = await renderHeroAnimatedTexts();

    expect(getByText('Mockup Tools')).toBeInTheDocument();
    expect(getByText('S/CSS')).toBeInTheDocument();

    expect(getByText('Photoshop')).toBeInTheDocument();
    expect(getByText('TS/JavaScript')).toBeInTheDocument();

    expect(getByText('User Experience')).toBeInTheDocument();
    expect(getByText('State Management')).toBeInTheDocument();

    expect(getByText('Animation')).toBeInTheDocument();
    expect(getByText('Web/Mobile')).toBeInTheDocument();

    expect(getByText('Communication')).toBeInTheDocument();
    expect(getByText('Structure,Testing')).toBeInTheDocument();

    expect(getByText('Detail Oriented')).toBeInTheDocument();
    expect(getByText('Forms, GraphQL')).toBeInTheDocument();

    expect(getByText('Responsive')).toBeInTheDocument();
    expect(getByText('Laravel/PHP')).toBeInTheDocument();
  });
});
