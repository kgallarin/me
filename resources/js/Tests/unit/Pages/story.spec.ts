import { createTestingPinia } from '@pinia/testing';
import { RenderResult, render } from '@testing-library/vue';
import { describe, expect, test, vi } from 'vitest';

import Story from '@/Components/Pages/Story/index.vue';

const mockContents = [
  {
    key: 'how_me',
    title: '/? why frontend',
    content: [{ text: "Since childhood, I've been fascinated by video games" }],
    heroImages: [{ url: 'test.png', alt: 'how frontend - kevin gallarin' }],
  },
  {
    key: 'gists',
    title: 'Gists about me',
    content: [{ text: "I'm a Manila-based developer that specializes in web development" }],
    heroImages: [],
  },
  {
    key: 'personal_facts',
    title: 'Facts',
    content: [
      { title: 'Full Name', text: 'Kevin Morales Gallarin' },
      { title: 'Born and Raised', text: 'Manila, Philippines' },
    ],
    heroImages: [],
  },
  {
    key: 'got_into_web_dev',
    title: 'How I got into Web Development',
    content: [{ text: "At the end of high school, I'm really not sure what to take" }],
    heroImages: [],
  },
  {
    key: 'lessons',
    title: 'Lessons from the Journey',
    content: [
      { title: 'Practice, practice', text: 'Practice text' },
      { title: 'Testing is the key', text: 'Testing text' },
      { title: 'TypeScript is your eagle eye', text: '<a href="https://www.typescriptlang.org/">TS Link</a>' },
      { title: 'A Profane Quote from Ira Glass', text: 'Nobody tells this to people who are beginners' },
    ],
    heroImages: [],
  },
];

const renderStory = async (): Promise<RenderResult> => {
  return render(Story, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn,
          initialState: {
            content: {
              contents: mockContents,
            },
          },
          stubActions: false,
        }),
      ],
    },
  });
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

    const tsLink = getByText('TS Link');
    expect(tsLink).toBeInTheDocument();
    expect(tsLink.closest('a')).toHaveAttribute('href', 'https://www.typescriptlang.org/');

    expect(getByText('A Profane Quote from Ira Glass')).toBeInTheDocument();
    expect(getByText(/Nobody tells this to people who are beginners/)).toBeInTheDocument();
  });

  test('Renders all images with correct alt text', async () => {
    const { getByAltText } = await renderStory();
    expect(getByAltText('how frontend - kevin gallarin')).toBeInTheDocument();
  });
});
