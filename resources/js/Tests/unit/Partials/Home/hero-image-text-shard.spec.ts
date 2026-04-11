import { RenderResult, fireEvent, render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

import { HeroImageTextShardProps } from '@/Types/Props';

import HeroImageTextShard from '@/Components/Partials/Home/LandingHero/HeroAnimatedTexts/HeroImageTextShard.vue';

const renderHeroImageTextShard = async (props: HeroImageTextShardProps): Promise<RenderResult> => {
  return render(HeroImageTextShard, { props });
};

describe('HeroImageTextShard', (): void => {
  test('Renders left and right texts correctly', async (): Promise<void> => {
    const { getByText } = await renderHeroImageTextShard({
      textLeft: 'test text left',
      textRight: 'test text right',
    });

    expect(getByText('test text left')).toBeInTheDocument();
    expect(getByText('test text right')).toBeInTheDocument();
  });

  test('Component emits textHoverLeft when left shard is hovered', async (): Promise<void> => {
    const { getByTestId, emitted } = await renderHeroImageTextShard({
      textLeft: 'test text left',
      textRight: 'test text right',
    });

    const leftShard = getByTestId('shard-hoverable-left');
    await fireEvent.mouseOver(leftShard);

    expect(emitted()).toHaveProperty('textHoverLeft');
  });

  test('Component emits textHoverRight when right shard is hovered', async (): Promise<void> => {
    const { getByTestId, emitted } = await renderHeroImageTextShard({
      textLeft: 'test text left',
      textRight: 'test text right',
    });

    const rightShard = getByTestId('shard-hoverable-right');
    await fireEvent.mouseOver(rightShard);

    expect(emitted()).toHaveProperty('textHoverRight');
  });

  test('Component emits textHoverLeave when mouse leaves shards', async (): Promise<void> => {
    const { getByTestId, emitted } = await renderHeroImageTextShard({
      textLeft: 'test text left',
      textRight: 'test text right',
    });

    const leftShard = getByTestId('shard-hoverable-left');
    await fireEvent.mouseOver(leftShard);
    await fireEvent.mouseLeave(leftShard);

    expect(emitted()).toHaveProperty('textHoverLeave');

    const rightShard = getByTestId('shard-hoverable-right');
    await fireEvent.mouseOver(rightShard);
    await fireEvent.mouseLeave(rightShard);

    expect(emitted().textHoverLeave).toHaveLength(2);
  });
});
