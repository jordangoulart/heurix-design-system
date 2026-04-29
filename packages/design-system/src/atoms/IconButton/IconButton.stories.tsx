import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const Heart = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z" />
  </svg>
);

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  args: { 'aria-label': 'Favoritar', children: <Heart /> },
};
export default meta;
type S = StoryObj<typeof IconButton>;
export const Default: S = {};
export const Small: S = { args: { size: 'sm' } };
export const Danger: S = { args: { tone: 'danger' } };
