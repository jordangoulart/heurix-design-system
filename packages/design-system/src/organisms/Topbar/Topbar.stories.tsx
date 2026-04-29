import type { Meta, StoryObj } from '@storybook/react';
import { Topbar } from './Topbar';
import { ThemeToggle } from '../../molecules/ThemeToggle';

const meta: Meta<typeof Topbar> = {
  title: 'Organisms/Topbar',
  component: Topbar,
  parameters: { layout: 'fullscreen' },
};
export default meta;

export const Default: StoryObj<typeof Topbar> = {
  args: {
    title: 'Heurix',
    subtitle: 'Design System',
    meta: 'v1.0 · live',
    right: <ThemeToggle />,
  },
};
