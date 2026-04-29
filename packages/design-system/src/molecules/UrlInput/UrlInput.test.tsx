import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { UrlInput } from './UrlInput';

describe('<UrlInput>', () => {
  it('renders with type=url and label', () => {
    render(<UrlInput label="URL" />);
    expect(screen.getByLabelText('URL')).toHaveAttribute('type', 'url');
  });

  it('typing fires onChange', async () => {
    render(<UrlInput label="URL" />);
    const input = screen.getByLabelText('URL');
    await userEvent.type(input, 'heurix.dev');
    expect((input as HTMLInputElement).value).toBe('heurix.dev');
  });

  it('shows error message and aria-invalid', () => {
    render(<UrlInput label="URL" error="URL inválida" />);
    expect(screen.getByText('URL inválida')).toBeInTheDocument();
    expect(screen.getByLabelText('URL')).toHaveAttribute('aria-invalid', 'true');
  });

  it('a11y', async () => {
    const { container } = render(<UrlInput label="URL" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
