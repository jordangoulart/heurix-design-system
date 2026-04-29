import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ThemeToggle } from './ThemeToggle';

describe('<ThemeToggle>', () => {
  it('renders with default aria-label', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: 'Alternar tema' })).toBeInTheDocument();
  });

  it('toggles theme attribute on click', async () => {
    render(<ThemeToggle />);
    const before = document.documentElement.getAttribute('data-theme');
    await userEvent.click(screen.getByRole('button'));
    const after = document.documentElement.getAttribute('data-theme');
    expect(after).not.toBe(before);
  });

  it('a11y', async () => {
    const { container } = render(<ThemeToggle />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
