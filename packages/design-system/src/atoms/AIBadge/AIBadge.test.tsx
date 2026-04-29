import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { AIBadge } from './AIBadge';

describe('<AIBadge>', () => {
  it('renders default AI label', () => {
    render(<AIBadge />);
    expect(screen.getByText(/ai/i)).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<AIBadge />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
