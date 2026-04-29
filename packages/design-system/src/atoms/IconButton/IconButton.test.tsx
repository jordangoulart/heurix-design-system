import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { IconButton } from './IconButton';

const Star = () => <svg data-testid="i" width="16" height="16" />;

describe('<IconButton>', () => {
  it('exposes aria-label as accessible name', () => {
    render(
      <IconButton aria-label="Favoritar">
        <Star />
      </IconButton>,
    );
    expect(screen.getByRole('button', { name: 'Favoritar' })).toBeInTheDocument();
  });
  it('renders icon child', () => {
    render(
      <IconButton aria-label="x">
        <Star />
      </IconButton>,
    );
    expect(screen.getByTestId('i')).toBeInTheDocument();
  });
  it('no a11y violations', async () => {
    const { container } = render(
      <IconButton aria-label="x">
        <Star />
      </IconButton>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
