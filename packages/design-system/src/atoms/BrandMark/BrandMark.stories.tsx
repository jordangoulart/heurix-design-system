import type { Meta, StoryObj } from '@storybook/react';
import { BrandMark } from './BrandMark';

const meta: Meta<typeof BrandMark> = {
  title: 'Atoms/BrandMark',
  component: BrandMark,
};
export default meta;
export const Default: StoryObj<typeof BrandMark> = {};
export const Sizes: StoryObj<typeof BrandMark> = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <BrandMark size="sm" />
      <BrandMark size="md" />
      <BrandMark size="lg" />
    </div>
  ),
};
