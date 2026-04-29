import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ScanBar } from './ScanBar';

describe('<ScanBar>', () => {
  it('exposes progressbar role', () => {
    render(<ScanBar label="Avaliando" />);
    expect(screen.getByRole('progressbar', { name: 'Avaliando' })).toBeInTheDocument();
  });
  it('paused sets aria-busy=false', () => {
    render(<ScanBar paused label="X" />);
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-busy', 'false');
  });
  it('a11y', async () => {
    const { container } = render(<ScanBar label="x" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
