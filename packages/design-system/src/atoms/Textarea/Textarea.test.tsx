import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { Textarea } from './Textarea';

describe('<Textarea>', () => {
  it('renders label and accepts text', async () => {
    render(<Textarea label="Notas" />);
    const ta = screen.getByLabelText('Notas');
    await userEvent.type(ta, 'oi');
    expect((ta as HTMLTextAreaElement).value).toBe('oi');
  });
  it('a11y', async () => {
    const { container } = render(<Textarea label="N" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
