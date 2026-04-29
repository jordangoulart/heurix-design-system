import type { Meta, StoryObj } from '@storybook/react';
import { CountBadge } from './CountBadge';

const meta: Meta<typeof CountBadge> = {
  title: 'Atoms/CountBadge',
  component: CountBadge,
  args: { value: 7 },
};
export default meta;
export const Default: StoryObj<typeof CountBadge> = {};
export const WithDot: StoryObj<typeof CountBadge> = { args: { withDot: true } };
