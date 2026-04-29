import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Kbd } from './Kbd';

describe('<Kbd>', () => {
  it('renders shortcut', () => {
    render(<Kbd>/</Kbd>);
    expect(screen.getByText('/')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<Kbd>Esc</Kbd>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
