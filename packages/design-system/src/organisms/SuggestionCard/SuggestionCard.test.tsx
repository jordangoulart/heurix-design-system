import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { SuggestionCard } from './SuggestionCard';

describe('<SuggestionCard>', () => {
  it('renders title and body', () => {
    render(<SuggestionCard title="Reduzir CTAs">conteúdo</SuggestionCard>);
    expect(screen.getByText('Reduzir CTAs')).toBeInTheDocument();
    expect(screen.getByText('conteúdo')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<SuggestionCard title="x">y</SuggestionCard>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
