import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Spinner } from './Spinner';

describe('<Spinner>', () => {
  it('renders with status role', () => {
    render(<Spinner label="Avaliando" />);
    expect(screen.getByRole('status', { name: 'Avaliando' })).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<Spinner />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
