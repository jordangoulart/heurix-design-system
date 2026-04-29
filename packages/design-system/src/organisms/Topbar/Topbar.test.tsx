import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Topbar } from './Topbar';

describe('<Topbar>', () => {
  it('renders title and subtitle', () => {
    render(<Topbar title="Heurix" subtitle="Design System" meta="v1 · live" />);
    expect(screen.getByText('Heurix')).toBeInTheDocument();
    expect(screen.getByText('Design System')).toBeInTheDocument();
    expect(screen.getByText('v1 · live')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<Topbar subtitle="x" meta="m" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
