import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { BrandMark } from './BrandMark';

describe('<BrandMark>', () => {
  it('renders h glyph by default', () => {
    render(<BrandMark />);
    expect(screen.getByText('h')).toBeInTheDocument();
  });
  it('accepts custom glyph and label', () => {
    render(<BrandMark glyph="q" label="Heurix" />);
    expect(screen.getByText('q')).toBeInTheDocument();
    expect(screen.getByLabelText('Heurix')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<BrandMark />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
