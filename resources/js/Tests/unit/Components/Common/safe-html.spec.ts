import { render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

import SafeHtml from '@/Components/Common/SafeHtml.vue';

describe('SafeHtml', () => {
  test('renders plain text correctly', () => {
    const { getByText } = render(SafeHtml, {
      props: { html: 'Hello World' },
    });
    expect(getByText('Hello World')).toBeInTheDocument();
  });

  test('renders text with <br /> correctly', () => {
    const { container } = render(SafeHtml, {
      props: { html: 'Hello<br />World' },
    });
    expect(container.innerHTML).toContain('Hello');
    expect(container.innerHTML).toContain('<br>');
    expect(container.innerHTML).toContain('World');
  });

  test('renders text with multiple <br> tags correctly', () => {
    const { container } = render(SafeHtml, {
      props: { html: 'One<br>Two<br/>Three<br />Four' },
    });
    const brTags = container.querySelectorAll('br');
    expect(brTags.length).toBe(3);
    expect(container.textContent).toContain('One');
    expect(container.textContent).toContain('Two');
    expect(container.textContent).toContain('Three');
    expect(container.textContent).toContain('Four');
  });

  test('renders <a> tags correctly', () => {
    const { getByRole } = render(SafeHtml, {
      props: { html: 'Visit <a href="https://example.com">Example</a> site' },
    });
    const link = getByRole('link', { name: 'Example' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  test('handles null or undefined html gracefully', () => {
    const { container } = render(SafeHtml, {
      props: { html: null as unknown as string },
    });
    expect(container.innerHTML).toBe('');
  });
});
