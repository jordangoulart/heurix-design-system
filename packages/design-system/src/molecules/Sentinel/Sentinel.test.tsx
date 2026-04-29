import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Sentinel } from './Sentinel';

describe('<Sentinel>', () => {
  it('renders default text', () => {
    render(<Sentinel />);
    expect(screen.getByText(/fim/i)).toBeInTheDocument();
  });
  it('a11y', async () => {
    const { container } = render(<Sentinel>nada mais</Sentinel>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
