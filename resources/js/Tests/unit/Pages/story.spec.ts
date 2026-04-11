import { RenderResult, render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

import Story from '@/Components/Pages/Story/index.vue';

const renderStory = async (): Promise<RenderResult> => {
  return render(Story);
};

describe('Story Page', (): void => {
  test('Renders the Story page component correctly', async () => {
    const { getByText } = await renderStory();

    expect(getByText('/? why frontend')).toBeInTheDocument();
    expect(getByText(/Since childhood, I've been fascinated by video games/)).toBeInTheDocument();

    expect(getByText('Gists about me')).toBeInTheDocument();
    expect(getByText(/I'm a Manila-based developer that specializes in web development/)).toBeInTheDocument();

    expect(getByText('Facts')).toBeInTheDocument();
    expect(getByText('Full Name')).toBeInTheDocument();
    expect(getByText('Kevin Morales Gallarin')).toBeInTheDocument();
    expect(getByText('Born and Raised')).toBeInTheDocument();
    expect(getByText('Manila, Philippines')).toBeInTheDocument();

    expect(getByText('How I got into Web Development')).toBeInTheDocument();
    expect(getByText(/At the end of high school, I'm really not sure what to take/)).toBeInTheDocument();

    expect(getByText('Lessons from the Journey')).toBeInTheDocument();
    expect(getByText('Practice, practice')).toBeInTheDocument();
    expect(getByText('Testing is the key')).toBeInTheDocument();

    const tsLink = getByText('TypeScript is your eagle eye');
    expect(tsLink).toBeInTheDocument();
    expect(tsLink.closest('a')).toHaveAttribute('href', 'https://www.typescriptlang.org/');

    expect(getByText('A Profane Quote from Ira Glass')).toBeInTheDocument();
    expect(getByText(/Nobody tells this to people who are beginners/)).toBeInTheDocument();
  });

  test('Renders all images with correct alt text', () => {
    const { getByAltText } = render(Story);
    expect(getByAltText('how frontend - kevin gallarin')).toBeInTheDocument();
  });
});
