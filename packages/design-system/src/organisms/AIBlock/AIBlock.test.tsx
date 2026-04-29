import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { AIBlock } from './AIBlock';

describe('<AIBlock>', () => {
  it('renders title and body', () => {
    render(<AIBlock title="Síntese">conteúdo</AIBlock>);
    expect(screen.getByText('Síntese')).toBeInTheDocument();
    expect(screen.getByText('conteúdo')).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<AIBlock title="x">y</AIBlock>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
