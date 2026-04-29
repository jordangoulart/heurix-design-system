import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Input } from './Input';

describe('<Input>', () => {
  it('associates label and input via auto id', () => {
    render(<Input label="URL" defaultValue="" />);
    const input = screen.getByLabelText('URL');
    expect(input).toBeInTheDocument();
    expect(input.id).toBeTruthy();
  });

  it('typing fires onChange', async () => {
    render(<Input label="X" />);
    const input = screen.getByLabelText('X');
    await userEvent.type(input, 'abc');
    expect((input as HTMLInputElement).value).toBe('abc');
  });

  it('renders error message', () => {
    render(<Input label="X" error="Required" />);
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('a11y', async () => {
    const { container } = render(<Input label="URL" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
