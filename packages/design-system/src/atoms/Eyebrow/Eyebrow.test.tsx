import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Eyebrow } from './Eyebrow';

describe('<Eyebrow>', () => {
  it('renders text', () => {
    render(<Eyebrow>section</Eyebrow>);
    expect(screen.getByText('section')).toBeInTheDocument();
  });
});
