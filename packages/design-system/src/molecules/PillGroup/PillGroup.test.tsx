import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { axe } from 'jest-axe';
import { PillGroup } from './PillGroup';
import { Pill } from '../../atoms/Pill';

describe('<PillGroup>', () => {
  it('exposes group role with label', () => {
    render(
      <PillGroup label="Score">
        <Pill>+1</Pill>
      </PillGroup>,
    );
    expect(screen.getByRole('group', { name: 'Score' })).toBeInTheDocument();
  });

  it('a11y', async () => {
    const { container } = render(
      <PillGroup label="Score">
        <Pill>+1</Pill>
        <Pill active>0</Pill>
        <Pill>-1</Pill>
      </PillGroup>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
