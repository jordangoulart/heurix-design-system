import type { Meta, StoryObj } from '@storybook/react';
import { Eyebrow } from './Eyebrow';

const meta: Meta<typeof Eyebrow> = {
  title: 'Atoms/Eyebrow',
  component: Eyebrow,
  args: { children: 'foundations' },
};
export default meta;
export const Default: StoryObj<typeof Eyebrow> = {};
