import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { axe } from 'jest-axe';
import { ProjectCard } from './ProjectCard';

describe('<ProjectCard>', () => {
  it('renders url and title', () => {
    render(<ProjectCard url="heurix.dev/onboarding" title="Avaliação Q2" />);
    expect(screen.getByText('heurix.dev/onboarding')).toBeInTheDocument();
    expect(screen.getByText('Avaliação Q2')).toBeInTheDocument();
  });
  it('click fires onClick', async () => {
    const onClick = vi.fn();
    render(<ProjectCard url="x" title="t" onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
  it('a11y', async () => {
    const { container } = render(<ProjectCard url="x" title="t" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
