import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Toast } from './Toast';

describe('<Toast>', () => {
  it('renders with status role by default', () => {
    render(<Toast message="Saved" />);
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Saved')).toBeInTheDocument();
  });
  it('error tone uses alert role', () => {
    render(<Toast tone="error" message="Falhou" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<Toast message="Saved" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
