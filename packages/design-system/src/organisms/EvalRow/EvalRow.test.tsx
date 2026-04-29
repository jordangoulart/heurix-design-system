import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { EvalRow } from './EvalRow';

describe('<EvalRow>', () => {
  it('renders url, title and score', () => {
    render(<EvalRow url="heurix.dev" title="Login" score="74" />);
    expect(screen.getByText('heurix.dev')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('74')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<EvalRow url="x" title="t" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
