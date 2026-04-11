import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RenderResult, render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

import Contact from '@/Components/Pages/Contact/index.vue';

const renderContact = async (): Promise<RenderResult> => {
  return render(Contact, {
    global: {
      stubs: {
        'fa-icon': FontAwesomeIcon,
      },
    },
  });
};

describe('Contact Page', () => {
  test('Renders the Contact page correctly', async (): Promise<void> => {
    const { getByText, getByRole } = await renderContact();

    expect(getByText('$ touch')).toBeInTheDocument();
    expect(getByText("Let's get in touch! 👋🏼")).toBeInTheDocument();
    expect(getByText(/Let's connect and explore how we can work together/)).toBeInTheDocument();

    const linkedInLink = getByRole('link', { name: /linkedin/i });
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/kmgallarin/');

    const facebookLink = getByRole('link', { name: /facebook/i });
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/kevin.gallarin/');

    const instagramLink = getByRole('link', { name: /instagram/i });
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/kgallarin/');

    const resumeLink = getByRole('link', { name: /download my resume/i });
    expect(resumeLink).toHaveAttribute('href', '/assets/pdf/resume.pdf');
    expect(resumeLink).toHaveAttribute('download');
  });

  test('Renders the Contact form partial', async () => {
    const { getByText } = await renderContact();
    expect(getByText('Or send me an email')).toBeInTheDocument();
  });
});
