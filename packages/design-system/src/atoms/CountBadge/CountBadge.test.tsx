import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { CountBadge } from './CountBadge';

describe('<CountBadge>', () => {
  it('renders count', () => {
    render(<CountBadge value={7} />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<CountBadge value={0} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
