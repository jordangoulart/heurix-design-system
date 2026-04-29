import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'jest-axe';
import { Pill } from './Pill';

describe('<Pill>', () => {
  it('renders score and is clickable', async () => {
    const onClick = vi.fn();
    render(<Pill onClick={onClick}>+12</Pill>);
    await userEvent.click(screen.getByRole('button', { name: '+12' }));
    expect(onClick).toHaveBeenCalled();
  });

  it('active state applies aria-pressed', () => {
    render(<Pill active>+12</Pill>);
    expect(screen.getByRole('button')).toHaveAttribute('aria-pressed', 'true');
  });

  it('aiSuggested adds dot indicator', () => {
    const { container } = render(<Pill aiSuggested>+12</Pill>);
    expect(container.querySelector('[data-ai="true"]')).not.toBeNull();
  });

  it('no a11y violations', async () => {
    const { container } = render(<Pill>+12</Pill>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
