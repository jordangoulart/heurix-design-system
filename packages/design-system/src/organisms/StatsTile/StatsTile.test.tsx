import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { StatsTile, StatsGrid } from './StatsTile';

describe('<StatsTile>', () => {
  it('renders label, value, helper', () => {
    render(<StatsTile label="Total" value="42" helper="Evaluations saved" />);
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Evaluations saved')).toBeInTheDocument();
  });
  it('renders unit', () => {
    render(<StatsTile label="Avg" value="7.4" unit="/ 10" />);
    expect(screen.getByText('/ 10')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(
      <StatsGrid>
        <StatsTile label="A" value="1" />
        <StatsTile label="B" value="2" />
        <StatsTile label="C" value="3" />
      </StatsGrid>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
