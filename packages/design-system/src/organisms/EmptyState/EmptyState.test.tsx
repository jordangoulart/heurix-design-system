import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { EmptyState } from './EmptyState';

describe('<EmptyState>', () => {
  it('renders title and message', () => {
    render(<EmptyState title="Sem avaliações" message="Comece criando uma." />);
    expect(screen.getByRole('heading', { name: 'Sem avaliações' })).toBeInTheDocument();
    expect(screen.getByText('Comece criando uma.')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<EmptyState title="X" message="y" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
