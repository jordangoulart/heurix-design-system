import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './Pill';

const meta: Meta<typeof Pill> = {
  title: 'Atoms/Pill',
  component: Pill,
  args: { children: '+12' },
};
export default meta;
type S = StoryObj<typeof Pill>;
export const Default: S = {};
export const Active: S = { args: { active: true } };
export const AISuggested: S = { args: { aiSuggested: true } };
export const Group: S = {
  render: () => (
    <div
      style={{
        display: 'inline-flex',
        gap: 0,
        padding: 3,
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 10,
      }}
    >
      {[-2, -1, 0, +1, +2].map((n) => (
        <Pill key={n} active={n === 0}>
          {n > 0 ? `+${n}` : `${n}`}
        </Pill>
      ))}
    </div>
  ),
};
