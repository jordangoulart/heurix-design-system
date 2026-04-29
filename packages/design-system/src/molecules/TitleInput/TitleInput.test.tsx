import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { TitleInput } from './TitleInput';

describe('<TitleInput>', () => {
  it('uses provided ariaLabel as accessible name', () => {
    render(<TitleInput ariaLabel="Título do projeto" />);
    expect(screen.getByLabelText('Título do projeto')).toBeInTheDocument();
  });
  it('typing fires onChange', async () => {
    render(<TitleInput ariaLabel="t" />);
    const input = screen.getByLabelText('t');
    await userEvent.type(input, 'Heurix');
    expect((input as HTMLInputElement).value).toBe('Heurix');
  });
  it('a11y', async () => {
    const { container } = render(<TitleInput ariaLabel="x" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
