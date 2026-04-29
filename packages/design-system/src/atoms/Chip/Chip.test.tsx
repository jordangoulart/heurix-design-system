import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { ConfidenceChip, SuggestionChip } from './Chip';

describe('<ConfidenceChip>', () => {
  it('renders level dots', () => {
    const { container } = render(<ConfidenceChip level="high" label="94%" />);
    expect(screen.getByText('94%')).toBeInTheDocument();
    expect(container.querySelectorAll('[data-on="true"]').length).toBe(3);
  });
});

describe('<SuggestionChip>', () => {
  it('renders priority style', () => {
    render(<SuggestionChip priority="high">P1</SuggestionChip>);
    expect(screen.getByText('P1')).toBeInTheDocument();
  });
  it('a11y clean', async () => {
    const { container } = render(<SuggestionChip priority="medium">P2</SuggestionChip>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
