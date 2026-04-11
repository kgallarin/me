import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { type RenderResult, render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

import { ProjectResponseDTO } from '@/Types/Responses';

import ProjectsSection from '@/Components/Partials/Home/Projects/index.vue';

const projects: ProjectResponseDTO[] = [
  {
    title: 'test project',
    description: 'test description',
    images: ['test.png'],
    icons: [{ icon: ['fab', 'html5'], color: 'text-orange-400' }],
    carousel: {
      autoplay: true,
      showIndicators: true,
      showArrows: true,
    },
  },
];

const renderProjectSection = async (props: Record<string, unknown> = {}): Promise<RenderResult> => {
  return render(ProjectsSection, {
    props,
    global: {
      stubs: {
        'fa-icon': FontAwesomeIcon,
      },
      mocks: {},
    },
  });
};

describe('ProjectsSection', (): void => {
  test('Projects headings renders properly', async (): Promise<void> => {
    const { getByTestId } = await renderProjectSection();

    expect(getByTestId('projects-headers')).toBeInTheDocument();
  });

  test('Project headings has correct text', async (): Promise<void> => {
    const { getByText } = await renderProjectSection();

    expect(getByText('selected projects')).toBeInTheDocument();
  });

  test('Project cards renders properly', async (): Promise<void> => {
    const { getByTestId, getByText } = await renderProjectSection({ projects });

    expect(getByTestId('project-card')).toBeInTheDocument();
    expect(getByText('test project')).toBeInTheDocument();
    expect(getByText('test description')).toBeInTheDocument();
  });

  test('Icon length count is correct', async (): Promise<void> => {
    const { getAllByTestId } = await renderProjectSection({ projects });

    const icons = getAllByTestId('project-icon');
    expect(icons.length).toBe(1);
  });
});
