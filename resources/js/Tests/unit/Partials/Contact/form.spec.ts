import { RenderResult, fireEvent, render } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';

import ContactForm from '@/Components/Partials/Contact/Form.vue';

const renderContactForm = async (): Promise<RenderResult> => {
  return render(ContactForm);
};
describe('ContactForm Partial', () => {
  test('renders all form fields correctly', async (): Promise<void> => {
    const { getByLabelText, getByText, getByRole } = await renderContactForm();

    expect(getByText('Or send me an email')).toBeInTheDocument();
    expect(getByLabelText('Name or alias')).toBeInTheDocument();
    expect(getByLabelText('Email')).toBeInTheDocument();
    expect(getByLabelText('Message')).toBeInTheDocument();
    expect(getByRole('button', { name: /Send/i })).toBeInTheDocument();
  });

  test('allows user to fill out the form', async (): Promise<void> => {
    const { getByLabelText } = await renderContactForm();

    const nameInput = getByLabelText('Name or alias') as HTMLInputElement;
    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const messageInput = getByLabelText('Message') as HTMLTextAreaElement;

    await fireEvent.update(nameInput, 'John Doe');
    await fireEvent.update(emailInput, 'john@example.com');
    await fireEvent.update(messageInput, 'Hello there!');

    expect(nameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(messageInput.value).toBe('Hello there!');
  });

  test('has required attributes on inputs', async (): Promise<void> => {
    const { getByLabelText } = await renderContactForm();

    expect(getByLabelText('Name or alias')).toBeRequired();
    expect(getByLabelText('Email')).toBeRequired();
    expect(getByLabelText('Message')).toBeRequired();
  });
});
