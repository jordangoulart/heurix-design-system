import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  args: { label: 'Notas', placeholder: 'Anote evidências…' },
};
export default meta;
export const Default: StoryObj<typeof Textarea> = {};
