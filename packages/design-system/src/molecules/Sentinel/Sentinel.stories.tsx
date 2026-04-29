import type { Meta, StoryObj } from '@storybook/react';
import { Sentinel } from './Sentinel';

const meta: Meta<typeof Sentinel> = {
  title: 'Molecules/Sentinel',
  component: Sentinel,
};
export default meta;
export const Default: StoryObj<typeof Sentinel> = {};
export const Custom: StoryObj<typeof Sentinel> = { args: { children: '— sem mais resultados —' } };
