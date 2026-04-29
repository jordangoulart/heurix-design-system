import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { SuggestionRunHeader } from './SuggestionRunHeader';

describe('<SuggestionRunHeader>', () => {
  it('renders title and meta', () => {
    render(<SuggestionRunHeader title="Run Q2" meta="14 sugestões" />);
    expect(screen.getByText('Run Q2')).toBeInTheDocument();
    expect(screen.getByText('14 sugestões')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<SuggestionRunHeader title="x" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
