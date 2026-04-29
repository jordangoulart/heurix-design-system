import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Numeral } from './Numeral';

describe('<Numeral>', () => {
  it('renders number', () => {
    render(<Numeral>74</Numeral>);
    expect(screen.getByText('74')).toBeInTheDocument();
  });
});
